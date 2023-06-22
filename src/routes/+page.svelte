<script lang="ts">
    import BodyAttr from '$lib/bodyAttr.svelte';
    import HtmlAttr from '$lib/htmlAttr.svelte';
    import '../app.css';

    let lang: 'en' | 'ja' = 'en';
    let dark = true;

    const title = {
        en: 'Welcome to SvelteKit',
        ja: 'SvelteKitへようこそ'
    };
</script>

<HtmlAttr {lang} />
<BodyAttr data-theme={dark ? 'dark' : 'light'} />

<h1>{title[lang]}</h1>

<select bind:value={lang}>
    <option value="en">English</option>
    <option value="ja">日本語</option>
</select>
<label>
    <input type="checkbox" bind:checked={dark} />
    <span>Dark mode</span>
</label>
