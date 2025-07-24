import type { PageLoad } from './$types';
import { getMotos } from '$lib/services/motosService';

export const load: PageLoad = async () => {
	const motos = await getMotos();
	return { motos };
};
