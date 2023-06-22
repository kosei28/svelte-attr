import { svelteAttr } from '$lib/index.js';
import type { Handle } from '@sveltejs/kit';

export const handle: Handle = async ({ event, resolve }) => {
    return svelteAttr(resolve(event));
};
