import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { handleMessageBar } from "../../utils/handleMessageBar";

export const paperFormAction = createAsyncThunk(
    "paperFormAction",
    async (value, {rejectWithValue}) => {
        
        try {
            const response = await fetch(`http://127.0.0.1:8000/paper-form/paper-1001`, {
            "method": "GET",
            "headers": {
                "Content-Type": "application/json",
            }
        });
            if (!response.ok) {
                const errordata = await response.json();
                throw new Error(JSON.stringify(errordata));
            }
            const data = await response.json();
            return data;
        } catch(error) {
            if (error instanceof TypeError && error?.message === "Failed to fetch") {
                handleMessageBar(value?.GetUsersDetails?.dispatch, true, 3000, "error", "Network error: Please check your connection.", "bottom", "right");
                return rejectWithValue({ message: "Network error: Unable to connect to the server, Please check your connection." });
            }

            handleMessageBar(value?.GetUsersDetails?.dispatch, true, 3000, "error", rejectWithValue(JSON.parse(error?.message))?.payload?.message, "bottom", "right");
            
            return rejectWithValue(JSON.parse(error?.message));
        }
    }
);

const initialState = {
    paperFormLoading: null,
    paperFormData: null,
    paperFormError: null,
};

export const paperFormReducer = createSlice({
    name: "paperFormReducer",
    initialState,
    reducers: {
        paperFormReset: (state) => {
            state.paperFormLoading = initialState?.paperFormLoading;
            state.paperFormData = initialState?.paperFormData;
            state.paperFormError = initialState?.paperFormError;
        }
    },
    extraReducers: (reducersResult) => {
        reducersResult.addCase(paperFormAction.pending, (state) => {
            state.paperFormLoading = true;
        });
        reducersResult.addCase(paperFormAction.fulfilled, (state, action) => {
            state.paperFormLoading = false;
            state.paperFormData = action?.payload;
        });
        reducersResult.addCase(paperFormAction.rejected, (state, action) => {
            state.paperFormLoading = false;
            state.paperFormData = false;
            state.paperFormError = action?.payload;
        });
    }
})

export const { paperFormReset } = paperFormReducer.actions;

export default paperFormReducer.reducer;