{#if $$slots.default}
    <div class="inline-flex items-center justify-center w-full mt-8">
        <hr class="border border-secondary dark:border-secondary-dark bg-secondary dark:bg-secondary-dark h-0.5 my-4 w-full rounded">
        <div class="absolute px-3 font-medium bg-background dark:bg-background-dark -translate-x-1/2 left-1/2"><slot /></div>
    </div>
{:else}
    <hr class="border bg-primary dark:bg-primary-dark h-1 my-20 rounded">
{/if}

