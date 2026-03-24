// Base type
export interface BaseType {
  id: number;
  name: string;
  price?: number;
  image_url?: string;
  barcode_url?: string;
}

// Bowl extends BaseType
export interface Bowl extends BaseType {
  base_type_id?: number;
  volume?: number;
  slot_count: number;
  shape: 'round' | 'square';
}

// User
export interface User {
  id: number;
  email: string;
  name?: string;
  role?: string;
}

// Recipe
export interface Recipe {
  id: number;
  userId: number;
  name: string;
  bowlId: number;
  ingredientIds: number[];
  slots?: Record<string, BaseType | null>;
  is_public?: boolean;
}

// Price list item
export interface PriceListItem {
  id: number;
  item_id: number;
  price: number;
  type?: string;
}