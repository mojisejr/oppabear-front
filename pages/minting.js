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
    <div className="flex flex-col justify-center items-center gap-4 h-screen bg-gradient-to-br from-slate-600 to-blue-200">
      <h1 className="text-[100px] font-bold">Minting Host and Stimulus</h1>
      <ConnectButton />
      {isConnected && (
        <div>
          <div className="flex  justify-center gap-4">
            <button
              className="p-3 bg-slate-800 text-white hover:bg-red-600 rounded-xl"
              disabled={!mintHost}
              onClick={() => mintHost()}
            >
              Mint Host
            </button>
            <button
              className="p-3 bg-slate-800 text-white hover:bg-red-600 rounded-xl"
              disabled={!mintStimulus}
              onClick={() => mintStimulus()}
            >
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
