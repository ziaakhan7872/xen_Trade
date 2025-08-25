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
            const { user, token, refreshToken } = action.payload;
            if (user !== undefined) state.user = user;
            if (token !== undefined) state.token = token;
            if (refreshToken !== undefined) state.refreshToken = refreshToken;
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
