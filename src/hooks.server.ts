// import { handleHooks } from '@lucia-auth/sveltekit';
import { auth } from '$lib/server/auth';
import type { Handle } from '@sveltejs/kit';
// import { sequence } from '@sveltejs/kit/hooks';

export const handle: Handle = async ({ event, resolve }) => {
	event.locals.auth = auth.handleRequest(event);
	const { session, user } = await event.locals.auth.validateUser();
	console.log({ userId: user?.userId, sessionId: session?.sessionId });
	return resolve(event);
};

// export const handle: Handle = sequence(handleHooks(auth), customHandle);
