import {
  createSlice,
  PayloadAction,
  createAsyncThunk,
  CaseReducer,
} from '@reduxjs/toolkit';

const URL = 'https://course-api.com/react-useReducer-cart-project';

// TYPES
export interface Item {
  id: string;
  title: string;
  price: number;
  img: string;
  amount: number;
}

interface CartState {
  items: Item[];
  loading: boolean;
  total: number;
  itemsOnTheBag: number;
}

// Initial state
const initialState: CartState = {
  items: [],
  loading: false,
  total: 0,
  itemsOnTheBag: 0,
};

// createAsync thunk
export const getItems = createAsyncThunk('', async () => {
  const response = await fetch(URL);
  const data: Item[] = await response.json();
  return data;
});

// types
const increase: CaseReducer<CartState, PayloadAction<string>> = (
  state,
  action,
) => {
  const item = state.items.find((item) => item.id === action.payload);
  if (item) item.amount += 1;
  const total = state.items.reduce((total, item) => {
    return total + item.amount * item.price;
  }, 0);
  const itemsAmount = state.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  state.total = total;
  state.itemsOnTheBag = itemsAmount;
};

const decrease: CaseReducer<CartState, PayloadAction<string>> = (
  state,
  action,
) => {
  const item = state.items.find((item) => item.id === action.payload);
  if (item) item.amount -= 1;
  const total = state.items.reduce((total, item) => {
    return total + item.amount * item.price;
  }, 0);
  const itemsAmount = state.items.reduce((total, item) => {
    return total + item.amount;
  }, 0);
  state.total = total;
  state.itemsOnTheBag = itemsAmount;
};

// create slice
const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    increaseAmount: increase,
    decreaseAmount: decrease,
  },
  extraReducers: (builder) => {
    builder
      .addCase(getItems.pending, (state) => {
        state.loading = true;
      })
      .addCase(getItems.fulfilled, (state, action) => {
        state.loading = false;
        state.items = action.payload;
        state.total = state.items.reduce((total, item) => {
          return total + item.amount * item.price;
        }, 0);
        state.itemsOnTheBag = state.items.reduce((total, item) => {
          return total + item.amount;
        }, 0);
      });
  },
});

export const { decreaseAmount, increaseAmount } = cartSlice.actions;
export default cartSlice.reducer;
