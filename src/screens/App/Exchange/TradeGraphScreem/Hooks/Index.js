import { useEffect, useState, useCallback } from "react";

const UseTradeGraphScreen = () => {
  const [starPress, setStarPress] = useState(false);

  const [candleChartData, setCandleChartData] = useState([
    {
      timestamp: new Date('2024-01-08T00:08:00').getTime(),
      open: 32000,
      high: 32500,
      low: 31800,
      close: 32200,
      volume: 150000, // Initial volume
    },
  ]);

  // Generate new random candle with volume
  const selectRandomData = useCallback(() => {
    setCandleChartData((prevData) => {
      const lastCandle = prevData[prevData.length - 1];
      const basePrice = lastCandle.close;

      const randomHigh = basePrice + Math.floor(Math.random() * 500);
      const randomLow = basePrice - Math.floor(Math.random() * 500);
      const randomOpen = basePrice + Math.floor(Math.random() * 200 - 100);
      const randomClose = basePrice + Math.floor(Math.random() * 200 - 100);
      const randomVolume = Math.floor(Math.random() * 200000) + 50000; // random volume

      const newTimestamp = lastCandle.timestamp + 60 * 1000;

      const newCandle = {
        timestamp: newTimestamp,
        open: randomOpen,
        high: randomHigh,
        low: randomLow,
        close: randomClose,
        volume: randomVolume, // include volume
      };

      // console.log("New Candle Added:", newCandle);
      return [...prevData, newCandle];
    });
  }, []);

  // Add candle every 10s
  useEffect(() => {
    const interval = setInterval(selectRandomData, 10000);
    return () => clearInterval(interval);
  }, [selectRandomData]);

  return {
    starPress,
    setStarPress,
    candleChartData,
    setCandleChartData,
  };
};

export default UseTradeGraphScreen;
