import { createClient } from "redis";
import secret from "../../../constant/secret";

console.log('initializing redis');

const redisClient = createClient({
    url: `redis://${secret.cache.host}:${secret.cache.port}`,
});

redisClient.on('error', err => console.log('redis client error', err));

redisClient.on('connect', () => console.log('connected to redis'));

redisClient.connect();

export default redisClient;
