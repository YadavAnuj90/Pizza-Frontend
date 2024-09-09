import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import axiosInstance from "../../Helpers/axiosInstance";
import toast from "react-hot-toast";

const initialState = {
    cartData: ''
}

export const addProductToCart = createAsyncThunk('/cart/addProduct', async(productId) => {
    
    try {
        const response = axiosInstance.post(`/carts/add/${productId}`);
        toast.promise(response , {
          loading: 'Adding product to cart',
          error:'Something went worng .cannot add product to cart.',
          success: 'Product Added to cart successfully',

        });

         const apiResponse = await response;
         return apiResponse

  } catch (error) {
      console.log(error);
      toast.error('Something Went wrong!!!');
  }

});




export const removeProductFromCart = createAsyncThunk('/cart/removeProduct', async(productId) => {
    
    try {
        const response = axiosInstance.post(`/carts/remove/${productId}`);
        toast.promise(response , {
          loading: 'removing  product from cart',
          error:'Something went worng .cannot remove product from cart.',
          success: 'Product removed successfully',

        });

         const apiResponse = await response;
         return apiResponse

  } catch (error) {
      console.log(error);
      toast.error('Something Went wrong!!!');
  }

});





export const getCartDetails = createAsyncThunk('/cart/getDetails', async() => {
    
    try {
        const response = axiosInstance.get(`/carts`);
        toast.promise(response , {
          loading: 'Fetching cart details',
          error:'Something went worng cannot fetch cart',
          success: 'Cart fetched successfully',

        });

         const apiResponse = await response;
         return apiResponse

  } catch (error) {
      if(error?.response?.status === 401) {
        toast.error('Please login to view cart');
        return {
            isUnauthorized : true
        }
      }
      toast.error('Something Went wrong!!!');
  }

});

const cartSlice = createSlice({
    name: 'cart',
    initialState,
    reducers: {
    },
    extraReducers: (builder) => {
             
        builder.addCase(getCartDetails.fulfilled , (state , action) => {
            state.cartData = action?.payload?.data?.data;
        })
    }
});

export default cartSlice.reducer;
