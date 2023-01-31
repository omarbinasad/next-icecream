import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
    name:"cart",
    initialState:{
        products:[],
        quantity: 0,
        total: 0,
    },
    reducers:{
        addProduct:(state, action)=>{
            const item = state.products.find(item=> item.id === action.payload.id)
            if(item){
                item.quantity += action.payload.quantity
            }
            else{
            state.products.push(action.payload);
            state.quantity += 1;
            state.total += action.payload.price * action.payload.quantity; 
            }
            
        },
        removeProduct:(state, action)=>{
            state.products = state.products.filter(item=> item.id !== action.payload)
            state.quantity = state.products.length
              
        },
        reset: (state)=>{
            state = initialState;
        },
    },
});
export const { addProduct, removeProduct, reset} = cartSlice.actions;
export default cartSlice.reducer;