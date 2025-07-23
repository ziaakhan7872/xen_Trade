import { View, Text } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { styles } from './styles'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { useOrderHistory } from './Hooks'
import { FilterBottomSheet, FilterTextInput, OrderHistoryList } from './Components'
import { Portal } from 'react-native-portalize'

const OrderHistory = (props) => {
    const { FilterBottomSheetRef, handleOpenFilter, handleCloseFilter, input, setInput, selected, setSelected } = useOrderHistory()

    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} rightImage={images.download} title={'ORDER HISTORY'} onBackPress={() => props?.navigation?.goBack()} onRightPress={() => props?.navigation?.navigate?.('')} />
                <Spacer height={hp(3)} />

                <FilterTextInput value={input} onChangeText={(text) => setInput(text)} openBottomSheet={handleOpenFilter} />
                <OrderHistoryList />

                <Portal>
                    <FilterBottomSheet
                        selected={selected}
                        setSelected={setSelected} bottomSheetRef={FilterBottomSheetRef} closeBottomSheet={handleCloseFilter} />
                </Portal>
            </View>
        </AuthMainContainer >
    )
}

export default OrderHistory