const URL = "https://fresse-api.onrender.com/api";

export async function getBowls(){
    const response = await fetch(`${URL}/bowls`);

    if (!response.ok) {
        throw new Error ("error");
    }

    return response.json();
}

export async function getCategories(){
    const response = await fetch(`${URL}/categories`);

    if(!response.ok){
        throw new Error ("error");
    }

    return response.json();
}

export async function getIngredients(){
    const response = await fetch(`${URL}/ingredients`);

    if(!response.ok){
        throw new Error("error");
    }

    return response.json();
}