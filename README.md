# svelte-attr

svelte-attr is a library that dynamically changes the attributes of html and body tags with SvelteKit's SSR.

## Install

```bash
npm install svelte-attr
```

## Usage

```ts
// src/hooks.server.ts

import type { Handle } from '@sveltejs/kit';
import { svelteAttr } from 'svelte-attr';

export const handle: Handle = async ({ event, resolve }) => {
    return svelteAttr(resolve(event));
};
```

```html
<script lang="ts">
    import { HtmlAttr, BodyAttr } from 'svelte-attr';
</script>

<HtmlAttr lang="en" />
<BodyAttr data-theme="dark" />
```
