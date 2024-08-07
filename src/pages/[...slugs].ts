import { Elysia } from 'elysia'
import cors from '@elysiajs/cors'

const app = new Elysia({prefix: '/api/v1'})
    .get('/', () => 'Welcome to Elysia')
    .use(cors())

const handle = ({ request }: { request: Request }) => app.handle(request) 
export const GET = handle 
export const POST = handle 