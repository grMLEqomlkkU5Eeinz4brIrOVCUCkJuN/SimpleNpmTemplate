/**
 * Options accepted by {@link greet}.
 */
export interface GreetOptions {
	/** Greeting word to use instead of the default `"Hello"`. */
	greeting?: string;
}

/**
 * Example function — replace with your library's real implementation.
 *
 * @param name - Who to greet.
 * @param options - Optional overrides, see {@link GreetOptions}.
 * @returns A greeting string.
 */
export function greet(name: string, options: GreetOptions = {}): string {
	const greeting = options.greeting ?? "Hello";
	return `${greeting}, ${name}!`;
}
