import { combineReducers } from '@reduxjs/toolkit';
import dataReducer from './dataReducer';

const rootReducer = combineReducers({
  portfolioData: dataReducer,
  // Add other reducers here as needed
});

export type RootState = ReturnType<typeof rootReducer>;
export default rootReducer;