import { ScrollView, View } from 'react-native'
import React from 'react'
import { AuthMainContainer } from '../../../components/authMainContainer'
import { MainHeader } from '../../../components/MainHeader'
import Spacer from '../../../components/Spacer'
import DropDowns, { InputFieldGroup } from './Components'
import { appStyles } from '../../../utilities'
import { styles } from './styles'
import { SimpleButton } from '../../../components/SimpleButton'
import { hp } from '../../../components/ResponsiveComponent'
import { colors } from '../../../constants'
import images from '../../../images'
import { useAddNewAddress } from './Hooks'

const AddNewAddress = (props) => {
    const {
        coin, setCoin,
        network, setNetwork,
        isCoinListOpen, setIsCoinListOpen,
        isNetworkOpen, setIsNetworkOpen,
        coinList, networkList,
    } = useAddNewAddress()
    return (
        <AuthMainContainer>
            <View style={{ flex: 1 }}>
                <ScrollView
                    contentContainerStyle={{ flexGrow: 1 }}
                    keyboardShouldPersistTaps="handled"
                >
                    <View style={[styles.containerMain]}>
                        <MainHeader leftImage={images.backArrow} title='ADD NEW ADDRESS' onBackPress={() => props?.navigation.goBack()} />
                        <Spacer height={hp(3)} />

                        <DropDowns
                            coinList={coinList} networkList={networkList}
                            coin={coin} setCoin={setCoin}
                            network={network} setNetwork={setNetwork}
                            isCoinListOpen={isCoinListOpen} setIsCoinListOpen={setIsCoinListOpen}
                            isNetworkOpen={isNetworkOpen} setIsNetworkOpen={setIsNetworkOpen}
                        />
                        <Spacer />
                        <InputFieldGroup />
                    </View>
                </ScrollView>

                <View style={[appStyles.row, styles.buttonRow,]}>
                    <SimpleButton text="Cancel" textColor={colors.white} styleView={styles.cancelBtn} onPress={() => props?.navigation.goBack()} />
                    <SimpleButton text="Save" textColor={colors.black} styleView={styles.saveBtn} />
                </View>
            </View>
        </AuthMainContainer>
    )
}

export default AddNewAddress