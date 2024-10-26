<script lang="ts">
  export let id:    string | undefined = undefined;
  export let style: string | undefined = undefined;

  export let title:       string | undefined = undefined;
  export let urlimglogo:  string | undefined = undefined;
  export let urlimgqr:    string | undefined = undefined;
  export let urltarget:   string | undefined = undefined;
  export let description: string | undefined = undefined;
</script>

<div {id} class="main" {style}>
  {#if urlimglogo}
    <div class="image" style="background-image: url({urlimglogo});">
      {#if urlimgqr}
        <div class="qrhover">
          <p>QR</p>
        </div>  
        <div class="qrdisplay" style="background-image: url({urlimgqr});">
        </div>
      {/if}
    </div>  
  {/if}

  <div class="info">
    <a href="{urltarget}">{title}</a>
    {#if description}
      <p>{description}</p>
    {/if}
  </div>
</div>

<style>

  :root {
    --npadding: 8px;
  }

  .info > a {
    text-decoration: underline dotted;
    color: #fff;
    font-weight: bold;
  }

  .qrhover > p {
    font-weight: bolder;
    text-shadow: -1px -1px 0 #000, 1px -1px 0 #000, -1px 1px 0 #000, 1px 1px 0 #000;
  }

  .qrdisplay {
    display: none;
    background-color: rgba(0, 0, 0, 0.8);
    width: 250px;
    aspect-ratio: 1;
    position: absolute;
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    z-index: 1;
    padding: 8px;
    border-style: dotted;
  }

  .image:hover > .qrdisplay {
    display: block;
  }

  .qrhover {
    position: absolute;
    right: 0;
    bottom: 0;
  }

  .main p {
    margin: 0;
  }

  .info > p {
    font-size: 0.8rem;
    margin-top: 2px;
  }

  .image {
    position: relative;
    min-width: 52px;
    aspect-ratio: 1;
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    margin-right: var(--npadding);
  }

  .main {
    display: flex;
    flex-direction: row;
    align-items: center;
    width: fit-content;
    max-width: 500px;
    padding: 8px;
    margin: 4px;
    background-color: #2d293b;
    border-style: dotted;
    border-width: 2px;
    border-color: #826a6b;
    word-break: break-all;
  }
</style>
