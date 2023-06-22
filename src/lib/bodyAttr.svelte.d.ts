import type { SvelteComponentTyped } from 'svelte';
import type { HTMLAttributes } from 'svelte/elements';

export type BodyAttrProps = Omit<HTMLAttributes<HTMLBodyElement>, `on:${string}`> &
    Record<`data-${string}`, string>;

export default class BodyAttr extends SvelteComponentTyped<BodyAttrProps> {}
