import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

export const fetchData = createAsyncThunk('data/fetchData',async(numParagraphs) => {
  
    const response = await fetch(`https://baconipsum.com/api/?type=meat-and-filler&paras=${numParagraphs}&format=text`);
 

    const data = await response.text();
    return data.split('\n'); 
    
});

export const paraSlice = createSlice({
    name : 'paras' ,
    initialState:{
        loading: false,
        data: [],
        error: ''
    },
    reducers : {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchData.pending, (state) => {
                state.loading = true;
            })
            .addCase(fetchData.fulfilled, (state, action) => {
                state.loading = false;
                state.data = action.payload;
                state.error = '';
            })
            .addCase(fetchData.rejected, (state, action) => {
                state.loading = false;
                state.data = '';
                state.error = action.error.message;
            });
    }
})

export default paraSlice.reducer;