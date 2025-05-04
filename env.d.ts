export {}; // Esto lo convierte en un módulo válido

declare global {
	interface Window {
		toggleSidebar: () => void;
	}
}
