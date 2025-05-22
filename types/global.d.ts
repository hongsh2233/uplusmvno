import type { LayoutOptions as _LayoutOptions } from "./layout";

declare global {
  interface LayoutOptions extends _LayoutOptions {}
}
interface Window {
  onTagShoHideHandler: () => void;
}
