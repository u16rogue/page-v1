<script lang="ts">
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="main">
  {#if data.entries?.length}
    <div class="entry-container">
      {#each data.entries as entry}
        <div class="entry-block">
          <div class="entry-block-top">
            <div class="entry-icon" style="background-image: url('{entry.icon}');"></div>
            <div class="descriptors">
              <a class="title" href="{entry.repourl}">{entry.title}</a>
              <p class="description">{entry.description}</p> 
              {#if entry.tags}
                <div class="tags">
                  {#each entry.tags as tag}
                    <div class="tag">{tag}</div>
                  {/each}
                </div>
              {/if}
            </div>
          </div>
          <div class="entry-block-bottom">
          </div>
        </div>
      {/each}
    </div>
  {:else}
    <p>Nothing.</p>
  {/if}
</div>

<style>
  :root {
  }

  .tag {
    background-color: #7c363e;
    width: fit-content;
    padding: 4px;
    margin: 2px;
    font-weight: lighter;
    font-size: 0.7rem;
  }

  .tags {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
  }

  .description {
    font-size: 0.8rem;
    color: #c39fa1;
    margin: 0;
    margin-top: 4px;
  }

  .title {
    font-weight: bolder;
    text-decoration: underline dotted;
    color: #c39fa1;
  }

  .entry-block-top {
    display: flex;
    flex-direction: row;
    align-items: center;
  }

  .entry-icon {
    min-width: 64px;
    aspect-ratio: 1;
    background-size: contain;
    background-position: center;
    margin-right: 8px;
  }

  .entry-block {
    background-color: #2d293b;
    padding: 8px;
    margin: 4px;
    border-style: dotted;
    border-color: #826a6b;
  }

  .entry-container {

  }

  .main {
    color: #fff;
    padding: 8px;
  }
</style>
