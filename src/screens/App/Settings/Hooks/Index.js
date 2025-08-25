import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { hp } from "../../../../components/ResponsiveComponent";
import { colors, Routes } from "../../../../constants";
import { LogoutTheUser } from "../../../../Backend/Api/Index";
import { getRefreshToken } from "../../../../redux/store";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../../../redux/slices/userSlice";


export const UseSetting = (props) => {
    const refreshToken = getRefreshToken()
    const dispatch = useDispatch()

    // const HideBottomTab = () => {
    //     props?.navigation?.setOptions({
    //         tabBarStyle: {
    //             paddingTop: hp(0.9),
    //             backgroundColor: colors.bottomTabColor,
    //             borderTopWidth: 0,
    //         },
    //     });
    // }

    const Logout = async () => {
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
        Logout
    }
}


