import { FlatList, View, StyleSheet } from 'react-native'
import React from 'react'
import { hp, wp } from '../../../../components/ResponsiveComponent'
import ToggleSwitch from '.'
import { colors } from '../../../../constants'
import { SimpleButton } from '../../../../components/SimpleButton'
import { appStyles } from '../../../../utilities'
import Spacer from '../../../../components/Spacer'
import { ResponsiveText } from '../../../../components/ResponsiveText'

const FlatListCustom = ({ toggles, setToggles, disableAllNotificationsEnabled, setDisableAllNotificationsEnabled }) => {
    const sections = [
        {
            title: 'Orders',
            key: 'ordersGroup',
            children: ['orderCancelled', 'orderCompleted', 'orderRejected']
        },
        {
            title: 'Transactions',
            key: 'transactionsGroup',
            children: ['paymentCompleted', 'paymentNew', 'paymentRejected']
        },
        {
            title: 'Conversions',
            key: 'conversionsGroup',
            children: ['conversionCompleted', 'conversionRejected']
        },
        {
            title: 'Account',
            key: 'accountGroup',
            children: ['loginEvent', 'twoFactor']
        }
    ]

    const handleMasterToggle = (groupKey, children) => {
        const newVal = !toggles[groupKey]
        const updated = { ...toggles, [groupKey]: newVal }
        children.forEach(key => updated[key] = newVal)
        setToggles(updated)
    }

    const handleChildToggle = (key) => {
        setToggles(prev => ({ ...prev, [key]: !prev[key] }))
    }

    const renderGroup = ({ item }) => (
        <View style={styles.groupContainer}>
            <ToggleSwitch
                toggleText={item.title}
                isEnabled={toggles[item.key]}
                setIsEnabled={() => handleMasterToggle(item.key, item.children)}
                isGroup
                disabled={disableAllNotificationsEnabled}
            />
            {item.children.map((childKey) => (
                <View key={childKey}>
                    <View style={styles.divider} />
                    <ToggleSwitch
                        toggleText={formatLabel(childKey)}
                        isEnabled={toggles[childKey]}
                        setIsEnabled={() => handleChildToggle(childKey)}
                        disabled={disableAllNotificationsEnabled}
                    />
                </View>
            ))}
        </View>
    )

    const formatLabel = (text) => {
        return text.replace(/([A-Z])/g, ' $1').replace(/^./, str => str.toUpperCase())
    }

    return (
        <FlatList
            ListHeaderComponent={() => (
                <View>
                    <Spacer height={hp(3)} />
                    <ResponsiveText style={styles.topText}>Once enabled, you will receive relevant notifications on your email address.</ResponsiveText>
                    <Spacer />
                    <View style={styles.disableToggleAllCard}>
                        <ToggleSwitch
                            toggleText="Disable All Notifications"
                            isEnabled={disableAllNotificationsEnabled}
                            isDisableAll
                            setIsEnabled={() => {
                                const newVal = !disableAllNotificationsEnabled
                                const updatedToggles = {}
                                Object.keys(toggles).forEach(k => updatedToggles[k] = !newVal)
                                setDisableAllNotificationsEnabled(newVal)
                                setToggles(updatedToggles)
                            }}
                        />
                    </View>
                </View>
            )}

            data={sections}
            renderItem={renderGroup}
            keyExtractor={(index) => index.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{ paddingBottom: hp(6) }}
            ListFooterComponent={() => (
                <View style={[appStyles.row, styles.buttonRow]}>
                    <SimpleButton text="Cancel" textColor={colors.white} styleView={styles.cancelBtn} />
                    <SimpleButton text="Save" textColor={colors.black} styleView={styles.saveBtn} />
                </View>
            )}
        />
    )
}

export default FlatListCustom

const styles = StyleSheet.create({
    groupContainer: {
        backgroundColor: colors.cardsBgColor,
        borderColor: colors.cardBorderColor,
        borderWidth: 1.5,
        borderRadius: wp(3),
        padding: wp(4),
        marginBottom: hp(2)
    },
    topText: {
        textAlign: 'center',
        fontSize: Platform.OS === 'android' ? 16 : 14,
        paddingHorizontal: wp(4),
        fontWeight: '400',
        color: colors.lightTextColor,
    },
    disableToggleAllCard: {
        backgroundColor: colors.cardsBgColor,
        padding: wp(4.5),
        borderRadius: wp(3),
        borderColor: colors.cardBorderColor,
        borderWidth: 1.5,
        marginBottom: hp(2)
    },
    divider: {
        height: 1,
        backgroundColor: colors.lineStroke,
        marginVertical: hp(2)
    },
    buttonRow: {
        marginTop: hp(2),
    },
    cancelBtn: {
        width: wp(44),
        backgroundColor: colors.transparentBtn,
        paddingVertical: hp(2),
        borderRadius: wp(10),
    },
    saveBtn: {
        width: wp(44),
        backgroundColor: colors.mainColor,
        paddingVertical: hp(2),
        borderRadius: wp(10)
    },
})
