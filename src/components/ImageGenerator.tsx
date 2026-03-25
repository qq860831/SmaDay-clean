import { useState } from 'react';
import { GoogleGenAI } from '@google/genai';
import { Loader2, Image as ImageIcon } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';

interface ImageGeneratorProps {
  onImageGenerated: (imageUrl: string) => void;
  className?: string;
}

export function ImageGenerator({ onImageGenerated, className }: ImageGeneratorProps) {
  const [loading, setLoading] = useState(false);
  const [size, setSize] = useState<'1K' | '2K' | '4K'>('1K');
  const [error, setError] = useState<string | null>(null);

  const generateImage = async () => {
    setLoading(true);
    setError(null);

    try {
      // Check for API Key
      // @ts-ignore - window.aistudio is injected by the platform
      if (window.aistudio && window.aistudio.hasSelectedApiKey && !(await window.aistudio.hasSelectedApiKey())) {
        // @ts-ignore
        await window.aistudio.openSelectKey();
        // Re-check after dialog closes (though we might need to retry the action)
        // @ts-ignore
        if (!(await window.aistudio.hasSelectedApiKey())) {
          throw new Error('Please select an API key to continue.');
        }
      }

      const apiKey = process.env.API_KEY || process.env.GEMINI_API_KEY;
      if (!apiKey) {
        throw new Error('API Key not found. Please select a key.');
      }
      const ai = new GoogleGenAI({ apiKey });
      
      const response = await ai.models.generateContent({
        model: 'gemini-3-pro-image-preview',
        contents: {
          parts: [
            {
              text: 'Split screen comparison of a dirty air conditioner full of mold and a sparkling clean white air conditioner, realistic, high definition, professional photography, bright lighting.',
            },
          ],
        },
        config: {
          imageConfig: {
            imageSize: size,
            aspectRatio: '16:9',
          },
        },
      });

      let imageUrl = '';
      if (response.candidates?.[0]?.content?.parts) {
        for (const part of response.candidates[0].content.parts) {
          if (part.inlineData) {
            imageUrl = `data:${part.inlineData.mimeType};base64,${part.inlineData.data}`;
            break;
          }
        }
      }

      if (imageUrl) {
        onImageGenerated(imageUrl);
      } else {
        throw new Error('No image generated.');
      }
    } catch (err: any) {
      console.error(err);
      setError(err.message || 'Failed to generate image.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={cn("flex flex-col gap-2 p-4 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg border border-gray-200 max-w-sm", className)}>
      <h3 className="text-sm font-semibold text-gray-700 flex items-center gap-2">
        <ImageIcon className="w-4 h-4" />
        自訂背景圖片 (AI 生成)
      </h3>
      
      <div className="flex gap-2">
        {(['1K', '2K', '4K'] as const).map((s) => (
          <button
            key={s}
            onClick={() => setSize(s)}
            className={cn(
              "px-2 py-1 text-xs rounded border transition-colors",
              size === s 
                ? "bg-teal-600 text-white border-teal-600" 
                : "bg-white text-gray-600 border-gray-300 hover:bg-gray-50"
            )}
          >
            {s}
          </button>
        ))}
      </div>

      <button
        onClick={generateImage}
        disabled={loading}
        className="flex items-center justify-center gap-2 w-full py-2 px-4 bg-teal-600 hover:bg-teal-700 text-white rounded-md text-sm font-medium transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {loading ? (
          <>
            <Loader2 className="w-4 h-4 animate-spin" />
            生成中...
          </>
        ) : (
          '生成背景圖'
        )}
      </button>
      
      {error && <p className="text-xs text-red-500 mt-1">{error}</p>}
    </div>
  );
}
