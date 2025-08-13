import { useDispatch } from "react-redux"
import { getRefreshToken } from "../../../../redux/store"
import { LogoutUser } from "../../../../constants/Api/Index"
import { Routes } from "../../../../constants"
import { logoutUser } from "../../../../redux/slices/userSlice"


export const UseMenuScreen = (props) => {
     const refreshToken = getRefreshToken()
    const dispatch = useDispatch()
    const logout = async ()=>{
        try {
            const payload = {
                refreshToken:refreshToken
            }
            const response = await LogoutUser(payload)
            if(response?.data){
                props?.navigation?.navigate(Routes?.AuthNavigator,{screen:Routes.LoginScreen})
                dispatch(logoutUser())
            }
        } catch (error) {
            console.log(error?.response,"login error")
            
        }
    }
  return {
    logout

  }
}


