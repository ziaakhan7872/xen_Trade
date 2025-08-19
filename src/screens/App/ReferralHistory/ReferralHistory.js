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

const ReferralHistory = (props) => {
    //Checking
    const { FilterBottomSheetRef, handleOpenFilter, handleCloseFilter, input, setInput, selected, setSelected } = useReferralHistory()
    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader leftImage={images.backArrow} rightImage={images.download} title={'REFERRAL HISTORY'} onBackPress={() => props?.navigation?.goBack()} onRightPress={() => props?.navigation?.navigate?.('')} />
                <Spacer height={hp(3)} />
                <FilterTextInput value={input} onChangeText={(text) => setInput(text)} openBottomSheet={handleOpenFilter} />
                <Spacer />

                <HistoryList props={props} />

                <FilterBottomSheet
                    selected={selected}
                    setSelected={setSelected}
                    bottomSheetRef={FilterBottomSheetRef}
                    closeBottomSheet={handleCloseFilter} />
            </View>
        </AuthMainContainer>
    )
}

export default ReferralHistory