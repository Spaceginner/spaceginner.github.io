<script lang="ts">
    import Header from "./Header.svelte";
    import Text from "./Text.svelte";

    export let name: string;
</script>

<section id="{name}">
    <div class="w-full">
        <Header>{name}</Header>
    </div>
    
    <Text><slot /></Text>
</section>
