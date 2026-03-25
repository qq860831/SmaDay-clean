import { Link } from 'wouter';

export function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-50">
      <div className="text-center p-8">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">404</h1>
        <p className="text-lg text-gray-600 mb-8">Page not found.</p>
        <Link href="/" className="bg-[#14ccb9] text-white px-6 py-2 rounded-lg hover:bg-[#11b5a4] transition-colors">
          Go Home
        </Link>
      </div>
    </div>
  );
}
