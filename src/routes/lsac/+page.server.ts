import { insertLinkSchema, links } from '$lib/db/schema';
import { fail } from '@sveltejs/kit';
import type { PageServerLoad } from './$types';
import { db } from '$lib/db/db';
import { nanoid } from 'nanoid';
import { and, desc, eq } from 'drizzle-orm';
import { z } from 'zod';

const deleteLinkSchema = z.object({ linkId: z.string().length(21) });

export const load = (async ({ locals }) => {
	const userSession = await locals.getSession();
	if (!userSession?.user?.email) {
		return fail(405, { message: 'no active session' });
	}
	const userLinks = await db
		.select()
		.from(links)
		.where(eq(links.userEmail, userSession.user.email))
		.orderBy(desc(links.createdAt));

	return { userLinks };
}) satisfies PageServerLoad;

export const actions = {
	createlink: async ({ locals, request }) => {
		const userSession = await locals.getSession();
		if (!userSession?.user?.email) {
			return fail(405, { message: 'no active session' });
		}
		const data = await request.formData();
		try {
			const formData = insertLinkSchema.parse(Object.fromEntries(data));
			console.log(formData);
			await db.insert(links).values({
				id: nanoid(),
				userEmail: userSession.user?.email,
				linkUrl: formData.linkUrl,
				comment: formData.comment,
				updatedAt: new Date()
			});
		} catch (err) {
			return fail(400, { message: 'validation error' });
		}
	},
	deletelink: async ({ locals, request }) => {
		const userSession = await locals.getSession();
		if (!userSession?.user?.email) {
			return fail(405, { message: 'no active session' });
		}
		const data = await request.formData();
		try {
			const linkId = deleteLinkSchema.parse(Object.fromEntries(data));
			await db
				.delete(links)
				.where(and(eq(links.id, linkId.linkId), eq(links.userEmail, userSession.user.email)));
		} catch (err) {
			return fail(400, { message: 'validation error' });
		}
	}
};
