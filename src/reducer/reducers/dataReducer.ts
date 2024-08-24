import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioType } from "../../Types";

interface DataState {
  data: PortfolioType[];
  categoryTitle: string[];
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  categoryTitle: [],
  loading: false,
  error: null,
};

const dataSlice = createSlice({
  name: "data",
  initialState,
  reducers: {
    fetchDataRequest(state) {
      state.loading = true;
      state.error = null;
    },
    fetchDataSuccess(state, action: PayloadAction<PortfolioType[]>) {
      state.loading = false;
      state.data = action.payload;
      state.categoryTitle = Array.from(
        new Set(state.data.flatMap((item) => item.category_title))
      );
    },
    fetchDataFailure(state, action: PayloadAction<string>) {
      state.loading = false;
      state.error = action.payload;
    },
  },
});

export const { fetchDataRequest, fetchDataSuccess, fetchDataFailure } =
  dataSlice.actions;
export default dataSlice.reducer;
