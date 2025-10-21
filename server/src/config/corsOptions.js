export const corsOptions = {
    origin: [process.env.FRONTEND_URL],
    credential: true,
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}