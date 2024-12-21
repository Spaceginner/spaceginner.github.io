<script>
  import Link from "$lib/LinkCard.svelte";
  import Text from "$lib/text/Text.svelte";
  import Title from "$lib/text/Title.svelte";
  import LineBreak from "$lib/decorations/LineBreak.svelte";
  import Header from "$lib/text/Header.svelte";

  import gh_logo from "$lib/assets/icons/github-mark-white.svg";
  import dc_logo from "$lib/assets/icons/discord-mark-white.svg";
  import tg_logo from "$lib/assets/icons/telegram-white-icon.svg";
  import gal_logo from "$lib/assets/icons/gallery-icon.svg";
  import Section from "$lib/Section.svelte";
  import Paragraph from "$lib/text/Paragraph.svelte";
</script>

<div class="mt-5 text-center">
  <Title>Me, Ivan.</Title>
  <Text>a teenage enthusiast in science and programming.</Text>
</div>

<div class="my-12">
  <Section name="socials." flex=true>
    <Link href="https://github.com/Spaceginner" desc="Github" icon={gh_logo}/>
    <Link href="https://discord.com/users/565207149618135042" desc="Discord" icon={dc_logo}/>
    <Link href="https://t.me/spaceginner" desc="Telegram" icon={tg_logo}/>
  </Section>

  <Section name="projects." flex=true>
    <Link href="./" desc="Gallery (WIP)" icon={gal_logo}/>
    <Link href="https://opyn.ginner.space/" desc="Opyn (N/A atm)" />
  </Section>
</div>

<LineBreak />

<Section>
  <Paragraph name="About.">
    I'm a 15 years old highschool boy. Am in a relationship. Live in Kiev region, Ukraine.
  </Paragraph>

  <Paragraph name="Hobbies.">
    Programming, Music Compositing, Photography. (And being silly (sometimes))
  </Paragraph>

  <Paragraph name="Knowledge.">
    Programming: VSC, JetBrains IDEs, Git, Python, Rust (&lt;3) <br>
    Music: Sibelius, MuseScore <br>
    Photography: RawTherapee <br>
    Languages: Ukrainian, Russian, English <br>
  </Paragraph>
</Section>
