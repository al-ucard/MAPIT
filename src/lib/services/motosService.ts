// src/lib/services/motosService.ts
import axios from 'axios';
import type { Moto } from '$lib/types';

const API_BASE = 'https://fake.prod.mapit.me';

export async function getMotos(): Promise<Moto[]> {
	const res = await axios.get<Moto[]>(`${API_BASE}/motos`);
	return res.data;
}

export async function getMotoById(id: string): Promise<Moto> {
	const res = await axios.get<Moto>(`${API_BASE}/motos/${id}`);
	return res.data;
}
