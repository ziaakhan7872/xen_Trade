import React from 'react'
import { View } from 'react-native'
import { hp, wp } from './ResponsiveComponent'
import { colors } from '../constants'


const Line = ({ height,width=wp(100) }) => {
    return (
        <View style={{ height: height ? height : hp(1) ,backgroundColor:colors.lineColor,width:width}}/>
    )
}


export default Line