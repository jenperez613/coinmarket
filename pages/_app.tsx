import React from "react";
import "../styles/globals.css";
import { AppProps } from "next/app";
import { GunProvider } from "../context/gunContext";
import { CoinMarketProvider } from "../context/context";
import { MoralisProvider } from "react-moralis";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    <MoralisProvider
      appId={process.env.NEXT_PUBLIC_APP_ID || ""}
      serverUrl={process.env.NEXT_PUBLIC_SERVER_URL || ""}
    >
      <GunProvider>
        <CoinMarketProvider>
          <Component {...pageProps} />
        </CoinMarketProvider>
      </GunProvider>
    </MoralisProvider>
  );
}

export default MyApp;
