import { Elysia } from 'elysia';
import cors from '@elysiajs/cors';
import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'path';

const app = new Elysia({ prefix: "/api/v1" })
    .get("/", () => "Welcome to Elysia API, this API under heavy development!")

    // group Mengaji endpoint
    .group('/mengaji', (app) =>
        app
            .get("/surah", async () => {
                try {
                    const __filename = fileURLToPath(import.meta.url);
                    const __dirname = path.dirname(__filename);
                    const filePath = path.resolve(__dirname, '../data/mengaji/surah.json');
                    const data = readFileSync(filePath, 'utf-8');
                    const surahList = JSON.parse(data);
                    return surahList;
                } catch (error) {
                    console.error('Error reading surah file:', error);
                    return { error: 'Failed to read surah file' };
                }
            })
        )
    .use(cors());

const handle = ({ request }: { request: Request }) => app.handle(request);
export const GET = handle;
export const POST = handle;
