import { PrismaClient } from '@prisma/client';

declare global {
	namespace App {
		// interface Error {}
		interface Locals {
			auth: import('lucia-auth').AuthRequest;
		}
		// interface PageData {}
		// interface Platform {}
	}
	let prisma: PrismaClient;

	declare namespace Lucia {
		type Auth = import('$lib/server/lucia').Auth;
		type UserAttributes = {
			username: string;
			name: string;
		};
	}
}

export {};
