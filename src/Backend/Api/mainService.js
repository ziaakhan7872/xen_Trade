// apiRequest.js
import axios from "axios";
import { getAuthToken, getRefreshToken, setUser } from "../../redux/store";
import { AUTH_BASE_URL, getHeaders } from "../../Configs/ApiBaseUrl";
import { Routes } from "../../constants/routes";
import { navigate } from "../../navigation/NavigationService/NavigationService";


export const apiRequest = async ({
    method,
    url,
    data = {},
    params = {},
    headers = {},
    isAuth = true,
    dispatch,
}) => {
    let token = null;

    if (isAuth) {
        token = getAuthToken();
        console.log("tken", token)
    }

    const finalHeaders = {
        "Content-Type": "application/json",
        ...getHeaders(token),
        ...headers,
    };

    const config = {
        method,
        url,
        headers: finalHeaders,
        params,
        data,
    };

    try {
        const response = await axios(config);
        return response;
    } catch (error) {
        if (error.response?.status === 401) {
            console.log("error unahoried")
            const newToken = await refreshToken(dispatch);

            if (!newToken || !newToken.accessToken) {
                console.error("Both access and refresh tokens are expired or invalid");
                navigate(Routes.LoginScreen);
                return;
            }

            dispatch(setUser({
                token: newToken.accessToken,
            }));

            config.headers["Authorization"] = `Bearer ${newToken.accessToken}`;
            const retryResponse = await axios(config);
            return retryResponse.data;
        }

        console.error("API Error:", error.response?.data || error.message);
        throw error;
    }
};

const refreshToken = async (dispatch) => {
    const refreshToken = getRefreshToken();
    if (!refreshToken) {
        console.error("No refresh token available.");
        return null;
    }

    try {
        const response = await apiRequest({
            method: "POST",
            url: `${AUTH_BASE_URL}/sessions/refresh-token`,
            data: { refreshToken: refreshToken },
            isAuth: false,
            dispatch,
        });

        return response.data;
    } catch (error) {
        console.error("Error refreshing token:", error.response?.data || error.message);
        return null;
    }
};
