<script>
  import "../app.css";
  import LineBreak from "$lib/decorations/LineBreak.svelte";
  import Text from "$lib/text/Text.svelte";
</script>

<div class="font-mono p-5 h-full flex flex-col" style="justify-content:space-between">
  <div class="w-full">
    <div class="flex-grow xl:max-w-screen-xl xl:mx-auto">
      <slot />
    </div>
  </div>

  <footer class="text-center p-5 min-h-4">
    <LineBreak><Text>piece. love. goose.™</Text></LineBreak>
  </footer>
</div>
