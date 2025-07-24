<script lang="ts">
	import { goto } from '$app/navigation';
	import MapaMoto from '$lib/component/MapaMoto.svelte';
	import type { Moto } from '$lib/types';
	import { calcularAnios, calcularPrecio } from '$lib/utils';

	export let data: { moto: Moto };

	let modalVisible = false;

	const anios = calcularAnios(data.moto.fechaCompra);
	let precioCalculado = calcularPrecio(data.moto.precioCompra, anios);

	const textoParrafo1 = `El valor mostrado a continuación es una estimación de precio de recompra aproximado, es necesario realizar una tasación en un taller. Por favor, consulta con tu concesionario para obtener una oferta en firme.`;
	const textoParrafo2 =
		`El valor calculado de recompra de su motocicleta ` + data.moto.modelo + ` es de:`;

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

	<MapaMoto lat={data.moto.coordenadas.latitud} lng={data.moto.coordenadas.longitud} />
</div>

<div class="botones">
	<button class="volver" type="button" on:click={volverListado}>Volver al listado</button>
	<button class="solicitar" type="button" on:click={abrirModal}>Solicitar cita</button>
</div>

{#if modalVisible}
	<div
		class="modal-fondo"
		role="dialog"
		aria-modal="true"
		aria-labelledby="modalTitle"
		aria-describedby="modalDesc"
	>
		<div class="modal-contenido">
			<h3 id="modalTitle" class="modal-titulo">Cita solicitada</h3>
			<p id="modalDesc" class="modal-mensaje">
				Su concesionario se pondrá en contacto pronto, para concertar cita.
			</p>
			<button type="button" on:click={cerrarModal}>OK</button>
		</div>
	</div>
{/if}

<style>
	.contenedor {
		max-width: 600px;
		margin: 0 auto 2rem auto;
		font-size: 1.2rem;
		text-align: left;
		color: var(--color-texto-secundario);
	}

	.precio {
		font-weight: 700;
		font-size: 3rem;
		margin: 0.5em 0 0.5em 2rem;
		color: var(--color-texto-principal);
	}

	.botones {
		display: flex;
		justify-content: center;
		gap: 1rem;
		margin: 2rem 0;
	}

	.modal-fondo {
		position: fixed;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		background-color: rgba(0, 0, 0, 0.3);
		display: flex;
		align-items: center;
		justify-content: center;
		z-index: 1000;
	}

	.modal-contenido {
		background-color: var(--color-fondo);
		padding: 2.5rem 3rem;
		border-radius: 8px;
		max-width: 400px;
		width: 90%;
		text-align: center;
		box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
		color: var(--color-texto-principal);
		font-family: 'Roboto', sans-serif;
		font-size: 1.2rem;
		font-weight: 400;
	}

	.modal-titulo {
		font-weight: 700;
		font-size: 1.8rem;
		margin-bottom: 1rem;
	}

	.modal-mensaje {
		margin-bottom: 1.5rem;
	}

	.modal-contenido button {
		font-size: 1rem;
		padding: 0.5em 1.2em;
		border-radius: 6px;
		background-color: var(--color-azul);
		color: white;
		box-shadow: 0 3px 8px rgba(0, 123, 255, 0.4);
	}

	.modal-contenido button:hover {
		background-color: var(--color-azul-hover);
	}

	button.volver {
		background-color: var(--color-azul-claro);
		color: #005bba;
	}

	button.volver:hover {
		background-color: #c2deff;
	}

	button.solicitar {
		background-color: var(--color-azul);
		color: white;
		box-shadow: 0 4px 10px rgba(0, 123, 255, 0.5);
	}

	button.solicitar:hover {
		background-color: var(--color-azul-hover);
	}
</style>
