import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { PortfolioType } from "../../Types";

interface DataState {
  data: PortfolioType[];
  categoryTitle: string[];
  keyHighlightData:any
  webGisData:PortfolioType[]
  trainingData:PortfolioType[]
  surveyData:PortfolioType[]
  disasterAndRiskData:PortfolioType[]
  softwareAndAppData:PortfolioType[]
  landData:PortfolioType[]
  openData:PortfolioType[]
  eGovernanceData:PortfolioType[]
  frontierData:PortfolioType[]
  loading: boolean;
  error: string | null;
}

const initialState: DataState = {
  data: [],
  categoryTitle: [],
  keyHighlightData: [],
  webGisData: [],
  trainingData: [],
  surveyData: [],
  disasterAndRiskData: [],
  softwareAndAppData: [],
  landData: [],
  openData: [],
  eGovernanceData: [],
  frontierData: [],
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
      state.keyHighlightData = state.data.filter(item => item.is_key_highlight);
      state.webGisData = state.data.filter(item => 
        item.category_title.includes("Web GIS and Data Visualization")
      );
      state.trainingData = state.data.filter(item => 
        item.category_title.includes("Training & Capacity Building")
      );
      state.surveyData = state.data.filter(item => 
        item.category_title.includes("Surveying and GIS Mapping")
      );
      state.disasterAndRiskData = state.data.filter(item => 
        item.category_title.includes("Disaster Risk Resilience")
      );
      state.softwareAndAppData = state.data.filter(item => 
        item.category_title.includes("Software & Application Development")
      );
      state.landData = state.data.filter(item => 
        item.category_title.includes("Innovation in Land Reform and Management")
      );
      state.openData = state.data.filter(item => 
        item.category_title.includes("Open Data Initiatives")
      );
      state.eGovernanceData = state.data.filter(item =>
        item.category_title.includes("E-Governance")
      );
      state.frontierData = state.data.filter(item =>
        item.category_title.includes("Frontier Technologies")
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
