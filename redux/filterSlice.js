import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
    name:"filters",
    initialState:{
        filtered_products: [],
        keywords: "",
    },
    reducers:{
        filterReducer : (state, action) => {
            if (!state.filtered_products.includes
                (action.payload)) {
                state.filtered_products.push(action.payload);
            }
                else{
                    state.filtered_products = state.filtered_products.filter((filtered_product) => filtered_product !== action.payload);
                }
            }
          }
    },
);

export const {filterReducer} = filterSlice.actions;
export default filterSlice.reducer;

