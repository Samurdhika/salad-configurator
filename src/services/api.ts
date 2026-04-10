export async function getBowls(){
    const response = await fetch(` https://fresse-api.onrender.com/api/bowls?type_id=[1|2]
`);

    if (!response.ok) {
        throw new Error ("error");
    }

    return response.json();
}

export async function getCategories(){
    const response = await fetch(`https://fresse-api.onrender.com/api/categories?type_id=[1|2]`);

    if(!response.ok){
        throw new Error ("error");
    }

    return response.json();
}

export async function getIngredients(){
    const response = await fetch(`https://fresse-api.onrender.com/api/ingredients`);

    if(!response.ok){
        throw new Error("error");
    }

    return response.json();
}