<script>
  import Link from "$lib/LinkCard.svelte";

  import gh_logo from "$lib/assets/icons/github-mark-white.svg";
  import dc_logo from "$lib/assets/icons/discord-mark-white.svg";
  import tg_logo from "$lib/assets/icons/telegram-white-icon.svg";
  import gal_logo from "$lib/assets/icons/gallery-icon.svg";
</script>

<div class="mt-5 text-center">
  <h1 class="text-8xl text-text dark:text-text-dark major-mono-display-regular">Me, Ivan.</h1>
  <p class="text-text dark:text-text-dark">a teenage enthusiast in science and programming.</p>
</div>

<div class="my-12">
  <div class="inline-flex items-center justify-center w-full mt-8">
    <hr class="border bg-primary dark:bg-primary-dark h-1/2 my-4 w-full rounded">
    <span class="absolute px-3 font-medium bg-background dark:bg-background-dark text-text dark:text-text-dark -translate-x-1/2 left-1/2">socials.</span>
  </div>
  
  <div class="flex flex-wrap lg:max-w-[1024px] lg:mx-auto justify-center">
    <Link href="https://github.com/Spaceginner" desc="Github" icon={gh_logo}/>
    <Link href="https://discord.com/users/565207149618135042" desc="Discord" icon={dc_logo}/>
    <Link href="https://t.me/spaceginner" desc="Telegram" icon={tg_logo}/>
  </div>

  <div class="inline-flex items-center justify-center w-full mt-12">
    <hr class="border bg-primary dark:bg-primary-dark h-1/2 my-4 w-full rounded">
    <span class="absolute px-3 font-medium bg-background dark:bg-background-dark text-text dark:text-text-dark -translate-x-1/2 left-1/2">projects.</span>
  </div>
  
  <div class="flex flex-wrap lg:max-w-[1024px] lg:mx-auto justify-center">
    <Link href="." desc="Gallery (WIP)" icon={gal_logo}/>
  </div>
</div>

<hr class="border bg-primary dark:bg-primary-dark h-1 my-20 rounded">

<h2 class="text-7xl text-text dark:text-text-dark major-mono-display-regular">About.</h2>
<p class="text-text dark:text-text-dark">I'm a 15 years old highschool boy. Am in a relationship. Live in Kiev region, Ukraine.</p>

<div class="my-10"></div>

<h2 class="text-7xl text-text dark:text-text-dark major-mono-display-regular">Hobbies.</h2>
<p class="text-text dark:text-text-dark">Programming, Music Compositing, Photography.</p>
