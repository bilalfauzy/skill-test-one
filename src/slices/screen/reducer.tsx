import { createSlice } from '@reduxjs/toolkit';

const screenSlice = createSlice({
  name: 'screen',
  initialState: {
    width: window.innerWidth,
    height: window.innerHeight,
    isMobile: window.innerWidth < 768,
    isTablet: window.innerWidth >= 768 && window.innerWidth <= 1024,
    isDesktop: window.innerWidth >= 1024,
  },
  reducers: {
    updateScreenSize: (state, action) => {
      const { width, height } = action.payload;
      state.width = width;
      state.height = height;
      state.isMobile = width < 768;
      state.isTablet = width >= 768 && width <= 1024;
      state.isDesktop = width >= 1024;
    },
  },
});

export const { updateScreenSize } = screenSlice.actions;
export default screenSlice.reducer;
