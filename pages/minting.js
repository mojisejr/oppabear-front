import React from "react";
import { ConnectButton } from "@rainbow-me/rainbowkit";
import { useAccount } from "wagmi";
import { useHost } from "../blockchain/host";
import { useStimulus } from "../blockchain/stimulus";

function MintingPage() {
  const { mintHost } = useHost();
  const { mintStimulus } = useStimulus();
  const { account, isConnected } = useAccount();

  return (
    <div>
      <div>Minting Host and Stimulus</div>
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
    </div>
  );
}

export default MintingPage;
