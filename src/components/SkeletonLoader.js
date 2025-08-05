// src/components/Skeletons/SkeletionLoader.js
import React from 'react';
import { View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { hp, wp } from './ResponsiveComponent';
import { colors } from '../constants';

const SkeletionLoader = ({ rows = 5 }) => {
  const renderRows = () => {
    return Array.from({ length: rows }).map((_, index) => (
      <View
        key={index}
        style={{
          width: wp(90),                // Match MarketDataView width
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: wp(4),      // Same horizontal margin as MarketDataView
          paddingVertical: hp(1.5),     // Same vertical padding as MarketDataView
        }}
      >
        {/* Left Side (icon + text) */}
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <View style={{ width: 40, height: 40, borderRadius: 20 }} />
          <View style={{ marginLeft: 10 }}>
            <View
              style={{
                width: wp(40),
                height: 12,
                borderRadius: 4,
                marginBottom: 6,
              }}
            />
            <View
              style={{
                width: wp(25),
                height: 12,
                borderRadius: 4,
              }}
            />
          </View>
        </View>

        {/* Right Side (price placeholder) */}
        <View style={{ width: wp(20), height: 12, borderRadius: 4 }} />
      </View>
    ));
  };

  return (
    <SkeletonPlaceholder
      backgroundColor={colors.bottomTabColor}
      highlightColor={colors.iconColor + '30'}
    >
      {renderRows()}
    </SkeletonPlaceholder>
  );
};

export default SkeletionLoader;
