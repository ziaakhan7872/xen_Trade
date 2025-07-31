import { View } from 'react-native'
import React from 'react'
import { styles } from './styles'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import images from '../../../images'
import { FilterBottomSheet, FilterTextInput, HistoryList } from './Components'
import Spacer from '../../../components/Spacer'
import { hp } from '../../../components/ResponsiveComponent'
import { useReferralHistory } from './Hooks'
import { Portal } from 'react-native-portalize'

const ReferralHistory = (props) => {
    const { FilterBottomSheetRef, handleOpenFilter, handleCloseFilter, input, setInput, selected, setSelected } = useReferralHistory()
    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} rightImage={images.download} title={'REFERRAL HISTORY'} onBackPress={() => props?.navigation?.goBack()} onRightPress={() => props?.navigation?.navigate?.('')} />
                <Spacer height={hp(3)} />
                <FilterTextInput value={input} onChangeText={(text) => setInput(text)} openBottomSheet={handleOpenFilter} />
                <Spacer height={hp(3)} />
                <HistoryList props={props} />

                <Portal>
                    <FilterBottomSheet
                        selected={selected}
                        setSelected={setSelected}
                        bottomSheetRef={FilterBottomSheetRef}
                        closeBottomSheet={handleCloseFilter} />
                </Portal>
            </View>
        </AuthMainContainer>
    )
}

export default ReferralHistory