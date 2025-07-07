import React from 'react'
import { View } from 'react-native'
import { hp, wp } from './ResponsiveComponent'
import { colors } from '../constants'


const Line = ({ height }) => {
    return (
        <View style={{ height: height ? height : hp(1) ,backgroundColor:colors.lineColor,width:wp(100)}}/>
    )
}


export default Line