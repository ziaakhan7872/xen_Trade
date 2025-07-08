import { useState } from 'react';

const useSettingSecurity = () => {
    const [isBiometricEnabled, setIsBiometricEnabled] = useState(false);
    const [isScreenshotEnabled, setIsScreenshotEnabled] = useState(false);
    const [isPinEnabled, setIsPinEnabled] = useState(false);

    return {
        isBiometricEnabled,
        setIsBiometricEnabled,
        isScreenshotEnabled,
        setIsScreenshotEnabled,
        isPinEnabled,
        setIsPinEnabled
    };
};

export default useSettingSecurity;
