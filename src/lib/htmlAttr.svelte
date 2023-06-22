<script lang="ts">
    import type { HtmlAttrProps } from './htmlAttr.svelte';

    let attr = $$props;

    $: setAttr($$props);

    function setAttr(newProps: HtmlAttrProps) {
        attr = newProps;

        if (typeof document !== 'undefined') {
            for (const key of Object.keys(attr)) {
                document.documentElement.setAttribute(key, attr[key]);
            }
        }
    }
</script>

<svelte:head>
    <meta name="html-attr" content={JSON.stringify(attr)} />
</svelte:head>
