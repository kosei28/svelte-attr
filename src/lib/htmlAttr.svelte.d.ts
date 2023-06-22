import type { SvelteComponentTyped } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type HtmlAttrProps = Omit<HTMLAttributes<HTMLHtmlElement>, `on:${string}`> &
    Record<`data-${string}`, string>;

export default class HtmlAttr extends SvelteComponentTyped<HtmlAttrProps> {}
