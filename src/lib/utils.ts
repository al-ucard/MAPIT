export function calcularAnios(fechaCompra: string): number {
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

export function calcularPrecio(precioCompra: number, anios: number): number {
	return precioCompra / 2 ** anios;
}
