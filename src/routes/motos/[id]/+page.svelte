<script lang="ts">
	import { goto } from '$app/navigation';
	import MapaMoto from '$lib/component/MapaMoto.svelte';
	import type { Moto } from '$lib/types';

	export let data: { moto: Moto };

  let modalVisible = false;

	function calcularAnios(fechaCompra: string): number {
		const fecha = new Date(fechaCompra);
		const ahora = new Date();
		let diff = ahora.getFullYear() - fecha.getFullYear();

		if (
			ahora.getMonth() < fecha.getMonth() ||
			(ahora.getMonth() === fecha.getMonth() && ahora.getDate() < fecha.getDate())
		) {
			diff--;
		}

		return diff >= 0 ? diff : 0;
	}

	const anios = calcularAnios(data.moto.fechaCompra);
	let precioCalculado = data.moto.precioCompra / (2 ** anios);

	const textoParrafo1 = `El valor mostrado a continuación es una estimación de precio de recompra aproximado, es necesario realizar una tasación en un taller. Por favor, consulta con tu concesionario para obtener una oferta en firme.`;
  const textoParrafo2 = `El valor calculado de recompra de su motocicleta ` + data.moto.modelo + ` es de:`;

  function volverListado() {
		goto('/motos');  
	}

	function abrirModal() {
		modalVisible = true;
	}

	function cerrarModal() {
		modalVisible = false;
	}
</script>

<div class="contenedor">
	<p>{textoParrafo1}</p>
	<p>{textoParrafo2}</p>

	<p class="precio">€ {precioCalculado.toFixed(2)}</p>
</div>

<MapaMoto lat={data.moto.coordenadas.latitud} lng={data.moto.coordenadas.longitud} />

<div class="botones">
  <button class="volver" type="button" on:click={volverListado}>Volver al listado</button>
  <button class="solicitar" type="button" on:click={abrirModal}>Solicitar cita</button>
</div>

{#if modalVisible}
	<div class="modal-fondo" role="dialog" aria-modal="true" aria-labelledby="modalTitle" aria-describedby="modalDesc">
		<div class="modal-contenido">
			<h3 id="modalTitle" class="modal-titulo">Cita solicitada</h3>
			<p id="modalDesc" class="modal-mensaje">Su concesionario se pondrá en contacto pronto, para concertar cita.</p>
			<button type="button" on:click={cerrarModal}>OK</button>
		</div>
	</div>
{/if}