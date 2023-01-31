import ProductsData from "../ProductsData.json"

export const getAllProducts = async ()=>{
    return ProductsData;
};
export const getProductById = async (productId)=>{
    return ProductsData.find(product => product.id === productId);
};