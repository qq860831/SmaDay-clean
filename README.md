<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# SmaDay App

This contains everything you need to run your React app locally and deploy it online.

## Setup & Run Locally

**Prerequisites:** Node.js (v20+ recommended)

1. **Install dependencies:**
   ```bash
   npm install
   ```
2. **Setup environment variables:**
   Duplicate the `.env.example` file and rename it to `.env.local`, then set your `GEMINI_API_KEY`:
   ```env
   GEMINI_API_KEY=your_api_key_here
   ```
3. **Run the app:**
   ```bash
   npm run dev
   ```
   The app will run on `http://localhost:3000`.

## Deployment

This project is configured with a **GitHub Action** (`.github/workflows/deploy.yml`) for automatic deployment to **GitHub Pages**.

1. Go to your GitHub repository **Settings** > **Pages**.
2. Under "Build and deployment", set the **Source** to **GitHub Actions**.
3. Any push to the `main` branch will automatically trigger a build and deploy the app to GitHub Pages.

## Recently Updated

- ✅ Configured `package.json` for Vite + React.
- ✅ Added `.github/workflows/deploy.yml` for automated GitHub Pages deployment.
- ✅ Updated `.gitignore` to prevent uploading unnecessary files (`node_modules`, `dist`, `.env`, OS cache files).
- ✅ Checked that `npm install` and build process run flawlessly.
