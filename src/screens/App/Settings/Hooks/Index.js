import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { hp } from "../../../../components/ResponsiveComponent";
import { colors } from "../../../../constants";


export const UseSetting = (props) => {

    const showBotomTab = () => {
        props?.navigation?.setOptions({
            tabBarStyle: {
                paddingTop: hp(0.9),
                backgroundColor: colors.bottomTabColor,
                borderTopWidth: 0,
            },
        });
    }

    return {
        showBotomTab

    }
}


