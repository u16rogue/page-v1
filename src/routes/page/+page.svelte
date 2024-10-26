<script lang="ts">
  import type { PageData } from "./$types";
  import HomeCard from "./HomeCard.svelte";
  export let data: PageData; 
</script>

<div class="main">

  <div class="sect-info">
    <div class="emojis">🐀, 7️⃣ 🐇, ⛩️🥒</div>
  </div>

  <div class="sect-ids">
    <HomeCard
      title="SimpleX"
      urlimglogo="https://raw.githubusercontent.com/simplex-chat/simplex-chat/refs/heads/stable/website/src/img/icons/simplex.svg"
      urlimgqr="https://github.com/u16rogue/u16rogue/blob/master/simplex.png?raw=true"
      urltarget="https://simplex.chat/contact#/?v=2-7&smp=smp%3A%2F%2Fhejn2gVIqNU6xjtGM3OwQeuk8ZEbDXVJXAlnSBJBWUA%3D%40smp16.simplex.im%2F-9WRZUQ3ghE3M1rXUQUO1fXICdXZKtpb%23%2F%3Fv%3D1-3%26dh%3DMCowBQYDK2VuAyEAnLym1RTH5LeT-FxbWN0eGXaccvKrDQgLHWB_4MUDm3E%253D%26srv%3Dp3ktngodzi6qrf7w64mmde3syuzrv57y55hxabqcq3l5p6oi7yzze6qd.onion"
    />

    <HomeCard
      title="Mail"
      urlimglogo="https://github.com/u16rogue/u16rogue/blob/master/bird.png?raw=true"
      urltarget="mailto:u16rogue@waifu.club"
      description="u16rogue@waifu.club"
    />

    <HomeCard
      title="Monero"
      urlimglogo="https://raw.githubusercontent.com/monero-project/monero-site/refs/heads/master/img/favicons.svg"
      urlimgqr="https://github.com/u16rogue/u16rogue/blob/master/monero.png?raw=true"
      description="89yEiQexDpCFm4abkhN7UWZft6dubKx9PVQR4BdwGvqFQHw4JG1ctcyULVH6eCr3n3b8KSND3vfqC3vhPsAvFyBq97nBCEk"
    />

    <HomeCard
      title="Signing/Encryption PGP"
      urltarget="https://keys.openpgp.org/search?q=F8CF8408099EF18C2667D850C6E401136B821496"
      urlimglogo="https://raw.githubusercontent.com/ModernPGP/icons/master/keys/icon-key.png"
      description="F8CF8408099EF18C2667D850C6E401136B821496"
    />
  </div>

  <div class="sect-articles"></div>
</div>

<style>

  .emojis {
    font-size: 3.5rem;
    padding: 20px;
  }

  .sect-ids {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

  .emojis {
    text-align: center;
  }

  .main {
    color: #fff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
  }
</style>
