<<<<<<< HEAD
export interface PriceListItem {
    id:number;
    item_id:number;
    price:number;
    type:string;
    }
=======
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
>>>>>>> sanu
}
