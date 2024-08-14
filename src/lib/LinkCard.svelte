<script lang="ts">
    export let href: string;
    export let desc: string;
    export let icon: string | null = null;
</script>

<a href={href} class="m-1">
    <div class="border border-primary dark:border-primary-dark hover:border-accent hover:dark:border-accent-dark hover:bg-secondary hover:dark:bg-secondary-dark transition-colors bg-opacity-10 rounded-md flex gap-2 w-64 h-20">
        {#if icon != null}
            <div class="p-4 h-20 w-20">
                <img src={icon} alt="icon" class="h-full w-full">
            </div>
        {/if}
        <div class="flex-auto my-auto">
            <p class="text-text dark:text-text-dark">{desc}</p>
        </div>
    </div>
</a>
