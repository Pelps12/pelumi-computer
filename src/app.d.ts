// See https://svelte.dev/docs/kit/types#app.d.ts
// for information about these interfaces
interface EmscriptenModule {
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	print: (...args: any[]) => void;
	canvas: HTMLCanvasElement | null;
	setStatus: (text: string) => void;
	totalDependencies: number;
	monitorRunDependencies: (left: number) => void;
	lastStatus: ModuleStatus | null;
	requestFullscreen?: (lock: boolean, resize: boolean) => void;
	// eslint-disable-next-line @typescript-eslint/no-explicit-any
	ctx: any;
	arguments: string[];
	locateFile: (path: string, scriptDirectory: string) => string;
}

declare global {
	namespace App {
		// interface Error {}
		// interface Locals {}
		// interface PageData {}
		// interface PageState {}
		// interface Platform {}
	}
	let Module: EmscriptenModule;
}

export {};
