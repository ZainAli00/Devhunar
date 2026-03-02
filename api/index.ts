// Vercel Serverless Function entry point.
// Vercel bundles this file (and all its imports) with esbuild,
// so the full Express app runs as a single serverless function
// handling all /api/* requests.
import { app } from '../server/src/app';

export default app;
