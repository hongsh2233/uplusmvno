import type { LayoutOptions as _LayoutOptions } from "./layout";

/* 2025-05-23 1747983161 (정C) 타입 오류로 수정함 */
declare global {
  interface LayoutOptions extends _LayoutOptions {}
  interface Window {
    onTagShoHideHandler: () => void;
  }
}
