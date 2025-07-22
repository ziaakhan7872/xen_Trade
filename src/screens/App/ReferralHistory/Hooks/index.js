import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import images from '../../../../images';
import { colors, fontFamily } from '../../../../constants';
import { ResponsiveText } from '../../../../components/ResponsiveText';
import { hp, wp } from '../../../../components/ResponsiveComponent';


export const useReferralHistory = () => {
    const FilterBottomSheetRef = useState(null)

    const handleOpenFilter = () => {
        FilterBottomSheetRef?.current?.expand()
    }
    const handleCloseFilter = () => {
        FilterBottomSheetRef?.current?.close()
    }
    return {
        FilterBottomSheetRef,
        handleOpenFilter, handleCloseFilter,

    }
}

export const FilterGroup = ({ options = [], initial = '', onChange }) => {
    const [selected, setSelected] = useState(initial);

    const handleSelect = (option) => {
        setSelected(option);
        if (onChange) onChange(option);
    };

    return (
        <View style={styles.filterWrapContainer}>
            {options.map((item) => {
                const isSelected = selected === item;
                return (
                    <TouchableOpacity
                        key={item}
                        onPress={() => handleSelect(item)}
                        activeOpacity={0.6}
                        style={[
                            styles.filterSelectionContainer,
                            {
                                flexDirection: 'row',
                                alignItems: 'center',
                                backgroundColor: colors.transparentBtn,
                            },
                        ]}
                    >
                        {isSelected && (
                            <Image source={images.blueTick} style={styles.tickSelectIcon} />
                        )}
                        <ResponsiveText
                            style={[
                                styles.filterSelection,
                                { color: isSelected ? colors.white : colors.lightTextColor },
                            ]}
                        >
                            {item}
                        </ResponsiveText>
                    </TouchableOpacity>
                );
            })}
        </View>
    );
};
// export default FilterGroup
const styles = StyleSheet.create({
    tickSelectIcon: {
        width: wp(4.5),
        height: wp(4.5),
        resizeMode: 'contain',
        marginRight: wp(2),
    },
    filterSelectionContainer: {
        paddingHorizontal: wp(5),
        paddingVertical: hp(1.2),
        backgroundColor: colors.transparentBtn,
        borderRadius: wp(10),
    },
    filterSelection: {
        fontFamily: fontFamily.appTextMedium,
        fontSize: 14,
        color: colors.white,
    },
    filterWrapContainer: {
        flexDirection: 'row',
        gap: wp(2.5),
        flexWrap: 'wrap',
        marginTop: hp(1.5),
    },
})




