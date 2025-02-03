import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [], // Initialize items as an empty array
  },
  reducers: {
    addItem: (state, action) => {
         const plant = action.payload;
      // Check if the plant is already in the cart
      const existingPlant = state.items.find(item => item.name === plant.name);
      if (existingPlant) {
        // If the plant exists, increase the quantity
        existingPlant.quantity += 1;
      } else {
        // If the plant doesn't exist, add it to the cart with a quantity of 1
        state.items.push({
          ...plant,
          quantity: 1,
        });
      }
    
    },
    removeItem: (state, action) => {
        const plantName = action.payload; // The name of the plant to remove
      state.items = state.items.filter(item => item.name !== plantName);
    },
    updateQuantity: (state, action) => {
        const { plantName, quantity } = action.payload; // Destructure the payload to get the plant's name and the new quantity
      const plant = state.items.find(item => item.name === plantName);
      if (plant) {
        plant.quantity = quantity; // Update the quantity of the plant
      }

    
    },
  },
});

export const { addItem, removeItem, updateQuantity } = CartSlice.actions;

export default CartSlice.reducer;
