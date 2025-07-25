import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { StyleSheet } from 'react-native'
import { hp, wp } from './ResponsiveComponent'
import { colors, fontFamily } from '../constants'

const DropDown = ({ items, value, setValue, placeholder, zIndex, setIsOpen }) => {
    const [open, setOpen] = useState(false)
    console.log("value11111111", value);

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={(openState) => {
                setOpen(openState)
                setIsOpen(openState) // Track the dropdown open state
            }}
            setValue={setValue}
            // setItems={() => { }} //For future use if we want to manage items dynamically
            style={[styles.dropdown, { zIndex: zIndex }]}  // dynamic zIndex 
            dropDownDirection="BOTTOM"
            dropDownContainerStyle={[styles.dropdownContainer, {
                // marginTop: 0,
                // top: hp(6.5),
                // zIndex: zIndex,
            }]}
            textStyle={styles.dropdownText}
            placeholder={placeholder}
            listMode="SCROLLVIEW"
            arrowIconStyle={{ tintColor: '#fff', marginRight: wp(2) }}
        />
    )
}
export default DropDown

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: colors.inputBgColor,
        borderColor: colors.borderColor,
        borderWidth: 1.5,
        borderRadius: wp(3),
        paddingVertical: hp(2),
        // position: 'relative',
    },
    dropdownContainer: {
        backgroundColor: colors.inputBgColor,
        borderColor: colors.borderColor,
        borderWidth: 1.5,
        borderRadius: wp(3),
        zIndex: -10,
        // top: hp(6.5),
        // marginTop: 0,
        // position: 'absolute',
    },
    dropdownText: {
        color: colors.white,
        fontSize: 14,
        paddingLeft: wp(2),
        fontFamily: fontFamily.appTextMedium,
    },
})
