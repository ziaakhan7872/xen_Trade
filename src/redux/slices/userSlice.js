import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    user: {},  
    token: '', 
     refreshToken: '',
};

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
    
        setUser(state, action) {
            const { user, token ,refreshToken} = action.payload;
            state.user = user;
            state.token = token;
            state.refreshToken = refreshToken; 
        },

        logoutUser(state) {
            state.user = {};  
            state.token = '';  
            state.refreshToken = '';
        },
    },
});

export const { setUser, logoutUser } = userSlice.actions
export default userSlice.reducer
