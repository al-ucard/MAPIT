import { getMotoById } from '$lib/services/motosService';
import type { PageLoad } from './$types';

export const load: PageLoad = async ({ params }) => {
	const moto = await getMotoById(params.id);
	return { moto };
};
