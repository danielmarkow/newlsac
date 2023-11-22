import type { PageServerLoad } from './$types';

export const load = (async () => {
	return {};
}) satisfies PageServerLoad;

export const actions = {
	createlink: async ({ locals, request }) => {
		const data = await request.formData();
		const formData = Object.fromEntries(data);
		// TODO validate
		console.log(formData);
		const userSession = await locals.getSession();
		console.log(userSession);
	}
};
