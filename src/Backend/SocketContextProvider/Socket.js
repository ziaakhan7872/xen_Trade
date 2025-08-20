import { Centrifuge } from 'centrifuge';
import { getAuthToken, getRefreshToken } from '../../redux/store';
import { SOCKET_BASE_URL } from '../../Configs/ApiBaseUrl';
import React, { createContext, useContext, useEffect, useState } from 'react';

// Create context
const SocketContext = createContext(null);

// Custom hook to use the context
export const useSocket = () => useContext(SocketContext);

// Provider component
export const SocketProvider = ({ children }) => {
  const [centrifugueBuild, setCentrifugeBuild] = useState(null);
   const jwtToken = getAuthToken();
   console.log(jwtToken)
   

  useEffect(() => {
   

    const centrifuge = new Centrifuge(SOCKET_BASE_URL, {
      token: jwtToken,
    });
    console.log(centrifuge,"centrifuge")

    centrifuge.on('connecting', (ctx) => {
      console.log('connecting', ctx);
    });

    centrifuge.on('connected', (ctx) => {
      console.log('Connected to Centrifugo:', ctx);
    });

    centrifuge.on('disconnected', (ctx) => {
      console.log('Disconnected from Centrifugo server:', ctx);
    });

    centrifuge.on('error', (error) => {
      console.error('Connection error:', error);
    });

    // Connect to Centrifugo
    centrifuge.connect();
    setCentrifugeBuild(centrifuge);

    // Cleanup on unmount
    return () => {
      try {
        centrifuge.removeAllListeners();
        centrifuge.disconnect();
      } catch (e) {
        // ignore
      }
    };
  }, [jwtToken]);

  return (
    <SocketContext.Provider value={{centrifugueBuild}}>
      {children}
    </SocketContext.Provider>
  );
};
