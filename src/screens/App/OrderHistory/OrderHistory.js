import { View } from 'react-native';
import React from 'react';
import { AuthMainContainer } from '../../../components/authMainContainer';
import { styles } from './styles';
import { MainHeader } from '../../../components/MainHeader';
import images from '../../../images';
import Spacer from '../../../components/Spacer';
import { hp } from '../../../components/ResponsiveComponent';
import { useOrderHistory } from './Hooks';
import { FilterBottomSheet, FilterTextInput, OrderHistoryList } from './Components';
import { Portal } from 'react-native-portalize';
import { OrdersSkeleton } from '../../../components/SkeletonLoader';

const OrderHistory = (props) => {
    const {
        FilterBottomSheetRef,
        handleOpenFilter,
        handleCloseFilter,
        input, setInput,
        selected, setSelected,
        orderHistory,
        filteredOrders,
        onApplyFilters,
        onResetFilters,
    } = useOrderHistory();

    const hasData = (filteredOrders || []).length > 0;

    return (
        <AuthMainContainer>
            <View style={styles.containerMain}>
                <MainHeader
                    leftImage={images.backArrow}
                    rightImage={images.download}
                    title={'ORDER HISTORY'}
                    onBackPress={() => props?.navigation?.goBack()}
                    onRightPress={() => props?.navigation?.navigate?.('')}
                />
                <Spacer height={hp(3)} />

                <FilterTextInput
                    value={input}
                    onChangeText={(text) => setInput(text)}
                    openBottomSheet={handleOpenFilter}
                />

                {hasData ? (
                    <OrderHistoryList orderHistory={filteredOrders} />
                ) : orderHistory?.length ? (
                    <OrderHistoryList orderHistory={[]} />
                ) : (
                    <OrdersSkeleton />
                )}

                <Portal>
                    <FilterBottomSheet
                        selected={selected}
                        setSelected={setSelected}
                        bottomSheetRef={FilterBottomSheetRef}
                        closeBottomSheet={handleCloseFilter}
                        onApply={onApplyFilters}
                        onReset={onResetFilters}
                    />
                </Portal>
            </View>
        </AuthMainContainer>
    );
};

export default OrderHistory;
