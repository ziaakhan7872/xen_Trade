import React, { useState } from 'react'
import DropDownPicker from 'react-native-dropdown-picker'
import { StyleSheet } from 'react-native'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import { colors } from '../../../../constants'

const DropDown = ({ items, value, setValue, placeholder }) => {
    const [open, setOpen] = useState(false)

    return (
        <DropDownPicker
            open={open}
            value={value}
            items={items}
            setOpen={setOpen}
            setValue={setValue}
            // setItems={() => { }} //For future use if we want to manage items dynamically
            style={styles.dropdown}
            dropDownContainerStyle={styles.dropdownContainer}
            textStyle={styles.dropdownText}
            placeholder={placeholder}
            placeholderStyle={{ color: '#7C9CA1' }}
            listMode="SCROLLVIEW"
            arrowIconStyle={{ tintColor: '#fff' }}
        />
    )
}

export default DropDown

const styles = StyleSheet.create({
    dropdown: {
        backgroundColor: colors.inputBgColor,
        borderColor: 'transparent',
        borderRadius: wp(3),
        minHeight: hp(6.5),
        paddingHorizontal: wp(2),
        zIndex: 10
    },
    dropdownContainer: {
        backgroundColor: colors.inputBgColor,
        borderColor: 'transparent',
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
