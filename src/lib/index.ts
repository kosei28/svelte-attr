import type { MaybePromise } from '@sveltejs/kit';
import { parse } from 'node-html-parser';

export async function svelteAttr(response: MaybePromise<Response>) {
    response = await response;
    let html = await response.text();
    const rootElement = parse(html);
    const htmlElement = rootElement.querySelector('html');
    const bodyElement = rootElement.querySelector('body');

    for (const meta of rootElement.querySelectorAll('meta[name="html-attr"]')) {
        try {
            const htmlAttr: Record<string, string> = JSON.parse(
                meta.getAttribute('content') as string
            );
            for (const key of Object.keys(htmlAttr)) {
                htmlElement?.setAttribute(key, htmlAttr[key]);
            }
        } catch (e) {
            // ignore
        }
    }

    for (const meta of rootElement.querySelectorAll('meta[name="body-attr"]')) {
        try {
            const bodyAttr: Record<string, string> = JSON.parse(
                meta.getAttribute('content') as string
            );
            for (const key of Object.keys(bodyAttr)) {
                bodyElement?.setAttribute(key, bodyAttr[key]);
            }
        } catch (e) {
            // ignore
        }
    }

    html = rootElement.toString();
    response = new Response(html, response);
    response.headers.set('content-length', new TextEncoder().encode(html).length.toString());

    return response;
}

export { default as HtmlAttr } from './htmlAttr.svelte';
export { default as BodyAttr } from './bodyAttr.svelte';
