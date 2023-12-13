const secret = {
    db: {
        host: process.env.POSTGRES_HOST ?? '',
        user: process.env.POSTGRES_USER ?? '',
        password: process.env.POSTGRES_PASSWORD ?? '',
        name: process.env.POSTGRES_DB ?? '',
    },
    encrypt: {
        privateKey: process.env.PRIVATE_KEY ?? '',
    },
    cache: {
        host: process.env.REDIS_HOST,
        port: process.env.REDIS_PORT,
        password: process.env.REDIS_PASSWORD,
    }
};

export default secret;
