import { useDispatch } from "react-redux"
import { getRefreshToken } from "../../../../redux/store"
import { Routes } from "../../../../constants"
import { LogoutTheUser } from "../../../../Backend/Api/Index"
import { logoutUser } from "../../../../redux/slices/userSlice"


export const UseMenuScreen = (props) => {
    const refreshToken = getRefreshToken()
    const dispatch = useDispatch()

    const logout = async () => {
        try {
            const payload = {
                refreshToken: refreshToken
            }
            const response = await LogoutTheUser(payload)
            if (response?.data) {
                props?.navigation?.navigate(Routes?.AuthNavigator, { screen: Routes.LoginScreen })
                dispatch(logoutUser())
            }
        } catch (error) {
            console.log(error, "login error")
            props?.navigation?.navigate(Routes?.AuthNavigator, { screen: Routes.LoginScreen })
            dispatch(logoutUser())

        }
    }

    return {
        logout
    }
}


