// See https://kit.svelte.dev/docs/types#app
// for information about these interfaces
import { PrismaClient } from '@prisma/client';

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface Platform {}
	}
	var prisma: PrismaClient;
}

export {};
