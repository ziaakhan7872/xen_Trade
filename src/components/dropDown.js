import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { StyleSheet } from 'react-native'
import { hp, wp } from './ResponsiveComponent'
import { colors } from '../constants'

const DropDown = ({ items, value, setValue, placeholder, zIndex, setIsOpen }) => {
    const [open, setOpen] = useState(false)

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
            dropDownContainerStyle={[styles.dropdownContainer, { zIndex: zIndex }]}
            textStyle={styles.dropdownText}
            placeholder={placeholder}
            // placeholderStyle={{ color: '#7C9CA1' }}
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
        paddingVertical: hp(2)
    },
    dropdownContainer: {
        backgroundColor: colors.inputBgColor,
        borderColor: colors.borderColor,
        borderWidth: 1.5,
        borderRadius: wp(3),
        zIndex: 1000
    },
    dropdownText: {
        color: colors.white,
        fontSize: 14,
        paddingLeft: wp(2),
        fontWeight: '600',
    },
})
