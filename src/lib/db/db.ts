import { drizzle, type PostgresJsDatabase } from 'drizzle-orm/postgres-js';
import postgres from 'postgres';
import { POSTGRES_URI } from '$env/static/private';

const queryClient = postgres(POSTGRES_URI as string);

export const db: PostgresJsDatabase = drizzle(queryClient);
