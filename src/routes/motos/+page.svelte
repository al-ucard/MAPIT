<script lang="ts">
  import { goto } from '$app/navigation';
	import MotoCard from '$lib/component/MotoCard.svelte';
  import type { Moto } from '$lib/types';

  export let data: { motos: Moto[] };

  function verDetalle(id: string) {
    goto(`/motos/${id}`);
  }
</script>

<div class="moto-lista">
  {#each data.motos as moto}
    <MotoCard moto={moto} onClick={verDetalle} />
  {/each}
</div>

<style>
  .moto-lista {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    max-width: 600px;
    margin: auto;
    padding: 0 1rem;
  }
</style>
