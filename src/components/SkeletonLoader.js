// src/components/Skeletons/SkeletionLoader.js
import React from 'react';
import { StyleSheet, View } from 'react-native';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';
import { hp, wp } from './ResponsiveComponent';
import { colors } from '../constants';

export const SkeletionLoader = ({ rows = 5 }) => {
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

export const BuySellSkeleton = () => {
  return (
    <SkeletonPlaceholder
      borderRadius={8}
      backgroundColor={colors.bottomTabColor}
      highlightColor={colors.iconColor + '30'}
    >
      <View style={styles.bsContainer}>
        {/* Buy / Sell segmented */}
        <View style={styles.bsHeaderRow}>
          <View style={styles.bsSegmentLeft} />
          <View style={styles.bsSegmentRight} />
        </View>

        {/* Order type dropdown (Limit/Market) */}
        <View style={styles.bsDropdown} />

        {/* Price row: [-] [input] [+] */}
        <View style={styles.bsThreeColRow}>
          <View style={styles.bsSquareBtn} />
          <View style={styles.bsInput} />
          <View style={styles.bsSquareBtn} />
        </View>

        {/* Qty row: [-] [input] [+]  */}
        <View style={[styles.bsThreeColRow, { marginTop: hp(1.2) }]}>
          <View style={styles.bsSquareBtn} />
          <View style={styles.bsInput} />
          <View style={styles.bsSquareBtn} />
        </View>

        {/* Slider (thin) */}
        <View style={styles.bsSlider} />

        {/* Price preview (full width, single line) */}
        <View style={styles.bsPricePreview} />

        {/* Balance / Fees / Total rows */}
        <View style={styles.bsMetaRow} />
        <View style={styles.bsMetaRow} />
        <View style={styles.bsMetaRow} />

        {/* CTA button */}
        <View style={styles.bsCta} />
      </View>
    </SkeletonPlaceholder>
  );
};


export const OrderBookSkeleton = () => {
  const rows = Array.from({ length: 5 });

  return (
    <SkeletonPlaceholder borderRadius={4} highlightColor={colors.iconColor + '30'} backgroundColor={colors.bottomTabColor}>
      <View style={{ paddingHorizontal: wp(3), paddingVertical: hp(1.5), height: hp(55), }}>
        {/* Header */}
        <View style={styles.row}>
          <View style={styles.headerCell} />
          <View style={styles.headerCell} />
        </View>

        {/* Top part rows (green section placeholder) */}
        {rows.map((_, i) => (
          <View key={`top-${i}`} style={styles.row}>
            <View style={styles.cell} />
            <View style={styles.cell} />
          </View>
        ))}

        {/* Highlighted middle row */}
        <View style={[styles.row, { marginVertical: hp(1) }]}>
          <View style={[styles.cell, { height: hp(3), borderRadius: 6 }]} />
          <View style={[styles.cell, { height: hp(3), borderRadius: 6 }]} />
        </View>

        {/* Bottom part rows (red section placeholder) */}
        {rows.map((_, i) => (
          <View key={`bottom-${i}`} style={styles.row}>
            <View style={styles.cell} />
            <View style={styles.cell} />
          </View>
        ))}
      </View>
    </SkeletonPlaceholder>
  );
};

export const OrdersSkeleton = () => {
  const cards = Array.from({ length: 4 }); // how many order boxes you want

  return (
    <SkeletonPlaceholder borderRadius={8} highlightColor={colors.iconColor + '30'} backgroundColor={colors.bottomTabColor}>
      <View style={{ paddingHorizontal: wp(3), paddingVertical: hp(1.5) }}>
        {cards.map((_, i) => (
          <View key={i} style={styles.card} />
        ))}
      </View>
    </SkeletonPlaceholder>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: wp(3),
  },
  row: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: hp(2),
  },
  tab: {
    width: wp(20),
    height: hp(5),
    borderRadius: 20,
  },
  dropdown: {
    width: "100%",
    height: hp(5),
    marginBottom: hp(2),
    borderRadius: 8,
  },
  squareBtn: {
    width: wp(10),
    height: hp(5),
    borderRadius: 6,
  },
  input: {
    flex: 1,
    height: hp(5),
    marginHorizontal: wp(3),
    borderRadius: 6,
  },
  slider: {
    width: "100%",
    height: hp(2.5),
    borderRadius: 8,
  },
  smallText: {
    width: "60%",
    height: hp(2),
    marginVertical: hp(1),
    borderRadius: 4,
  },
  bigButton: {
    width: "100%",
    height: hp(6),
    marginTop: hp(3),
    borderRadius: 30,
  },
  headerCell: {
    width: wp(35),
    height: hp(2),
    borderRadius: 4,
  },
  cell: {
    width: wp(35),
    height: hp(2.5),
    borderRadius: 4,
  },
  card: {
    width: "100%",
    height: hp(10),   // box height (adjust to match your card size)
    borderRadius: 8,
    marginBottom: hp(1.5),
  },
  bsContainer: {
    paddingHorizontal: wp(2),
    paddingTop: hp(1.5),
    paddingBottom: hp(2),
    borderRadius: 12,
  },
  bsHeaderRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: hp(1.2),
  },
  bsSegmentLeft: {
    width: wp(22),
    height: hp(4.8),
    borderTopLeftRadius: 20,
    borderBottomLeftRadius: 20,
  },
  bsSegmentRight: {
    width: wp(22),
    height: hp(4.8),
    marginLeft: wp(2),
    borderTopRightRadius: 20,
    borderBottomRightRadius: 20,
  },
  bsDropdown: {
    width: '100%',
    height: hp(4.6),
    borderRadius: 10,
    marginTop: hp(1.2),
  },
  bsThreeColRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp(1.6),
  },
  bsSquareBtn: {
    width: wp(10),
    height: hp(4.8),
    borderRadius: 10,
  },
  bsInput: {
    flex: 1,
    height: hp(4.8),
    marginHorizontal: wp(2),
    borderRadius: 10,
  },
  bsSlider: {
    width: '100%',
    height: hp(1.6),
    borderRadius: 10,
    marginTop: hp(2),
  },
  bsPricePreview: {
    width: '100%',
    height: hp(3),
    borderRadius: 8,
    marginTop: hp(1.4),
  },
  bsMetaRow: {
    width: '65%',
    height: hp(2.2),
    borderRadius: 6,
    marginTop: hp(0.9),
  },
  bsCta: {
    width: '100%',
    height: hp(5.6),
    borderRadius: 28,
    marginTop: hp(2),
  },
});
