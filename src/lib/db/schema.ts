import { index, pgTable, text, timestamp, varchar } from 'drizzle-orm/pg-core';
import { createInsertSchema, createSelectSchema } from 'drizzle-zod';

export const links = pgTable(
	'links',
	{
		id: varchar('offer_id', { length: 21 }).primaryKey(),
		userEmail: varchar('user_id', { length: 320 }).notNull(),
		linkUrl: text('link_url').notNull(),
		comment: text('comment'),
		createdAt: timestamp('created_at').defaultNow().notNull(),
		updatedAt: timestamp('updatedAt').notNull()
	},
	(links) => ({
		userEmailIndex: index('user_email_idx').on(links.userEmail)
	})
);

export const insertLinkSchema = createInsertSchema(links);
export const selectLinkSchema = createSelectSchema(links);
