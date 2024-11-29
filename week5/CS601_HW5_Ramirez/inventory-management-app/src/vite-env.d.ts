/// <reference types="vite/client" />
export interface InventoryItemType {
  SKU: string;
  name: string;
  qty: number;
  price: number;
}

declare module '*.png' {
  const value: string;
  export default value;
}
