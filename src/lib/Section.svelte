<script lang="ts">
    export let name: string | null = null;
    export let flex: boolean = false;

    import LineBreak from "./decorations/LineBreak.svelte";
    import Text from "./text/Text.svelte";
</script>

<section id="{name}" class="lg:max-w-[1024px] lg:mx-auto">
    {#if name != null}
        <LineBreak><Text>{name}</Text></LineBreak>
    {/if}

    {#if flex}
        <div class="flex flex-wrap justify-center">
            <slot />
        </div>
    {:else}
        <slot />
    {/if}
</section>
