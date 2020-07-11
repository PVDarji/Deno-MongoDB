const env = Deno.env.toObject();

export const DATABASE_PATH="mongodb://localhost:27017"
export const APP_PORT = 5000;
export const DBNAME = env.DBNAME || "deno_demo";