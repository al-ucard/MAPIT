import { calcularAnios, calcularPrecio } from './utils';

describe('calcularAnios', () => {
	test('calcula años correctamente para fecha pasada', () => {
		const fechaCompra = new Date();
		fechaCompra.setFullYear(fechaCompra.getFullYear() - 3); // hace 3 años
		const fechaStr = fechaCompra.toISOString();

		const anios = calcularAnios(fechaStr);
		expect(anios).toBe(3);
	});

	test('no cuenta años negativos (fecha futura)', () => {
		const fechaCompra = new Date();
		fechaCompra.setFullYear(fechaCompra.getFullYear() + 1);
		const fechaStr = fechaCompra.toISOString();

		const anios = calcularAnios(fechaStr);
		expect(anios).toBe(0);
	});

	test('decrementa un año si aún no pasó el mes y día de compra', () => {
		const ahora = new Date();
		const fechaCompra = new Date();
		fechaCompra.setFullYear(ahora.getFullYear() - 5);
		fechaCompra.setMonth(ahora.getMonth() + 1); // mes siguiente (aún no cumplido)
		const fechaStr = fechaCompra.toISOString();

		const anios = calcularAnios(fechaStr);
		expect(anios).toBe(4);
	});
});

describe('calcularPrecio', () => {
	test('divide el precio correctamente según años', () => {
		expect(calcularPrecio(1000, 0)).toBe(1000);
		expect(calcularPrecio(1000, 1)).toBe(500);
		expect(calcularPrecio(1000, 2)).toBe(250);
		expect(calcularPrecio(1000, 3)).toBe(125);
	});
});
