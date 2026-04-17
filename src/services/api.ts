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

export async function getBaseType(){
    const response = await fetch(`https://fresse-api.onrender.com/api/baseingredients`)

    if(!response.ok){
        throw new Error("error");
    }

    return response.json();
}

export async function getPrices(token: string) {
    const response = await fetch(`https://fresse-api.onrender.com/api/prices`, {
        headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json',
        },
    });

    if (!response.ok) {
        throw new Error("Failed to fetch prices");
    }

    return response.json();
}