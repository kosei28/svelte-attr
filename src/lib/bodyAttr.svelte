<script lang="ts">
    import type { BodyAttrProps } from './bodyAttr.svelte';

    let attr = $$props;

    $: setAttr($$props);

    function setAttr(newProps: BodyAttrProps) {
        attr = newProps;

        if (typeof document !== 'undefined') {
            for (const key of Object.keys(attr)) {
                document.body.setAttribute(key, attr[key]);
            }
        }
    }
</script>

<svelte:head>
    <meta name="body-attr" content={JSON.stringify(attr)} />
</svelte:head>
