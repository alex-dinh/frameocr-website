// src/pages/api/data.json.ts
import type { APIRoute } from 'astro'

export const GET: APIRoute = () => {
    const data = {
        info: 'FrameOCR Latest Version',
        version: '1.2.3'
    }
    
    return new Response(JSON.stringify(data), {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}