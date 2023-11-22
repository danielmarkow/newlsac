import { index, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const links = pgTable(
	'links',
	{
		id: varchar('offer_id', { length: 21 }).primaryKey(),
		userId: varchar('user_id', { length: 256 }).notNull(),
		comment: text('comment'),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updatedAt').notNull()
	},
	(links) => ({
		userIdIndex: index('user_id_idx').on(links.userId)
	})
);

export const insertLinkSchema = createInsertSchema(links);
export const selectLinkSchema = createSelectSchema(links);
