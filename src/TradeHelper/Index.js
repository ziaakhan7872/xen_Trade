
import BigNumber from "bignumber.js";

const DECIMALS = 6;

export const ValidateInput = (value) => {
    if (value === "") {
        return false
    }
    const regex = /^\d*\.?\d{0,6}$/;
    return regex.test(value);
}

export const FormatBigNumber = (num) => {
    return new BigNumber(num || 0).toFixed(DECIMALS);
}

export const HandleQuantityChange = (value, coinPrice, setQuantity, setPrice) => {
    // ✅ Always allow clearing input
    if (value === "") {
        setQuantity("");
        setPrice("");
        return;
    }

    if (!ValidateInput(value)) return;

    const qtyBN = new BigNumber(value);

    // ✅ allow 0, but block negatives
    if (qtyBN.isLessThan(0)) return;

    setQuantity(value);

    const coinPriceBN = new BigNumber(coinPrice || 0);
    if (!qtyBN.isNaN() && !coinPriceBN.isZero()) {
        const newPrice = qtyBN.multipliedBy(coinPriceBN).toString();
        setPrice(newPrice);
    }
};


export const HandlePriceChange = (value, coinPrice, setQuantity, setPrice) => {
    if (value === "") {
        setPrice("");
        setQuantity("");
        return;
    }


    setPrice(value);

    const priceBN = new BigNumber(value);
    const coinPriceBN = new BigNumber(coinPrice || 0);

    if (!coinPriceBN.isZero() && !priceBN.isNaN()) {
        const newQuantity = priceBN?.dividedBy(coinPriceBN).toString();
        const newQ = new BigNumber(newQuantity).toFormat(6)
        setQuantity(newQ);
        console.log("New Quantity:", newQuantity);
    }

}

export const HandleSliderChange = (value, balance, setPrice, setQuantity, setSlider, coinPrice) => {
    const availableBalance = new BigNumber(balance || 0);
    const sliderValue = new BigNumber(value).dividedBy(100);
    const newPrice = availableBalance.multipliedBy(sliderValue).toString();
    setPrice(newPrice);
    const coinPriceBN = new BigNumber(coinPrice || 0);
    if (!coinPriceBN.isZero() && !new BigNumber(newPrice).isNaN()) {
        const newQuantity = new BigNumber(newPrice).dividedBy(coinPriceBN).toString();
        const formattedQuantity = new BigNumber(newQuantity).toFormat(6);
        setQuantity(formattedQuantity);
    }
    setSlider(value);
}

export const changeQuantity = (step, quantity, coinPrice, setQuantity, setPrice) => {
    const currentQty = new BigNumber(quantity || 0);
    const newValue = currentQty.plus(step);
    if (newValue.isLessThan(0)) return;

    setQuantity(newValue.toString());
    HandleQuantityChange(newValue.toString(), coinPrice, setQuantity, setPrice);
};

export const HandleChangeCoinPrice = (value, quantity, setPrice, setCurrentCoinPrice) => {
    console.log("HandleChangeCoinPrice", value, quantity);
    setCurrentCoinPrice(value);
    const currentQty = new BigNumber(quantity || 0);
    const coinPrice = new BigNumber(value || 0);

    if (!coinPrice.isZero() && !currentQty.isNaN() && !currentQty.isZero()) {
        const newPrice = coinPrice.multipliedBy(currentQty);
        setPrice(newPrice);
    } else {
        setPrice("0");
    }
};

export const ChangeCoinPrice = (currentPrice, step, setPrice, setCurrentCoinPrice, quantity) => {
    const newValue = new BigNumber(currentPrice || 0).plus(step).decimalPlaces(1);
    if (newValue.isLessThan(0)) return;
    setCurrentCoinPrice(newValue.toString());
    HandleChangeCoinPrice(newValue.toString(), quantity, setPrice, setCurrentCoinPrice);
};
