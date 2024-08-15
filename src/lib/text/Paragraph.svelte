<script lang="ts">
    import Header from "./Header.svelte";
    import Text from "./Text.svelte";

    export let name: string;
</script>

<div class="w-full">
    <Header>{name}</Header>
</div>

<Text><slot /></Text>
