
export interface PriceListItem {
    id:number;
    item_id:number;
    price:number;
    type:string;
    }

export interface BaseType {
  id: number;
  name: string;
  price?: number;
  image_url?: string;
  barcode_url?: string;
}

export interface Bowl extends BaseType {
  base_type_id?: number;
  volume?: number;
  slot_count: number;
  shape: 'round' | 'square';
}
    
export interface User {
    id:number;
    email: string;
    name: string;
    role:string;
}

export interface Recipe{
    id:number;
    userId: number;
    name: string;
    bowlId: number;
    ingredientIds: number[];
    is_public: boolean;

}

export interface Category {
  id: number;
  name: string;
}

export interface Ingredient extends BaseType {
  categoryId: number;
  diets: string[];
}
