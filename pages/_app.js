import "../styles/globals.css";
import "@rainbow-me/rainbowkit/styles.css";
import {
  getDefaultWallets,
  RainbowKitProvider,
} from "@rainbow-me/rainbowkit";
import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { publicProvider } from "wagmi/providers/public";
import myTheme from "../Theme/rainbow.v1";

const { chains, provider } = configureChains(
  [
    // chain.mainnet,
    // chain.polygon,
    // chain.polygonMumbai,
    // chain.optimism,
    // chain.arbitrum,
    chain.goerli,
  ],
  [publicProvider()]
);

const { connectors } = getDefaultWallets({
  appName: "Oppabear Labs",
  chains,
});

const wagmiClient = createClient({
  autoConnect: false,
  connectors,
  provider,
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider theme={myTheme} modalSize="compact" chains={chains}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
