<script lang="ts">
	import { onMount } from 'svelte';

	export let lat: number;
	export let lng: number;

	let mapContainer: HTMLDivElement;
	let map: any;

	onMount(async () => {
		const L = await import('leaflet');
		// Importar CSS dinámicamente (opcional, si no está global)
		await import('leaflet/dist/leaflet.css');

		map = L.map(mapContainer).setView([lat, lng], 13);

		L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
			attribution: '© OpenStreetMap contributors'
		}).addTo(map);

		L.marker([lat, lng]).addTo(map).bindPopup('Ubicación de la moto').openPopup();
	});
</script>

<style>
	#map {
		width: 100%;
		height: 300px;
		border: 1px solid #ccc;
		border-radius: 8px;
	}
</style>

<div bind:this={mapContainer} id="map"></div>
