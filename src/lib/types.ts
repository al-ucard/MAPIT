export interface Coordenadas {
	latitud: number;
	longitud: number;
}

export interface Moto {
	id: string;
	fechaCompra: string;
	precioCompra: number;
	modelo: string;
	nombre: string;
	coordenadas: Coordenadas;
}
