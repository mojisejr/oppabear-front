import styles from "../styles/Home.module.css";
import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useHost } from "../blockchain/host";
import { useStimulus } from "../blockchain/stimulus";
import Link from "next/link";

function MintingPage() {
  const { mintHost } = useHost();
  const { mintStimulus } = useStimulus();
  const { account, isConnected } = useAccount();

  return (
    <div className={styles.container}>
      <h1>Minting Host and Stimulus</h1>
      <ConnectButton />
      {isConnected && (
        <div>
          <div>
            <button disabled={!mintHost} onClick={() => mintHost()}>
              Mint Host
            </button>
          </div>
          <div>
            <button disabled={!mintStimulus} onClick={() => mintStimulus()}>
              Mint Stimulus
            </button>
          </div>
        </div>
      )}
      <div>
        <Link href="/">Back</Link>
      </div>
    </div>
  );
}

export default MintingPage;
