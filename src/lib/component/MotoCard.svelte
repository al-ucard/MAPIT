<script lang="ts">
	import type { Moto } from '$lib/types';
	export let moto: Moto;
	export let onClick: (id: string) => void;
</script>

<button
	class="moto-ficha"
	type="button"
	aria-label={`Ver detalles de la moto ${moto.nombre}`}
	on:click={() => onClick(moto.id)}
>
	<strong>{moto.nombre} - {moto.modelo}</strong>
	<div class="moto-info">ID: {moto.id}</div>
	<div class="moto-info">Fecha de compra: {new Date(moto.fechaCompra).toLocaleDateString()}</div>
	<div class="moto-info">
		Precio original: {moto.precioCompra.toLocaleString('es-ES', {
			style: 'currency',
			currency: 'EUR'
		})}
	</div>
</button>

<style>
	button.moto-ficha {
		display: flex;
		flex-direction: column;
		align-items: flex-start;
		padding: 1rem;
		border: 1px solid #ddd;
		border-radius: 8px;
		background-color: #f0f7ff;
		cursor: pointer;
		transition: background-color 0.2s;
		color: #003366;
	}

	button.moto-ficha:hover {
		background-color: #dbe9ff;
	}

	.moto-ficha strong {
		font-size: 1.2rem;
		margin-bottom: 0.3rem;
	}

	.moto-info {
		font-size: 0.9rem;
		color: #555;
		margin-bottom: 0.2rem;
	}
</style>
