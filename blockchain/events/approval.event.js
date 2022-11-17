import { useContractEvent } from "wagmi";
import { useState } from "react";
import hostContract from "../contracts/host.contract";
import stimulusContract from "../contracts/stimulus.contract";

export function EventApproval() {
  const [hostApproved, setHostApproval] = useState(false);
  const [stimulusApproved, setStimulusApproval] = useState(false);

  useContractEvent({
    ...hostContract,
    eventName: "Approval",
    listener(owner, approved, tokenId) {
      setHostApproval(true);
    },
  });

  useContractEvent({
    ...stimulusContract,
    eventName: "Approval",
    listener(owner, approved, tokenId) {
      setStimulusApproval(true);
    },
  });

  //{tokenId, approved}
  return {
    approval: hostApproved && stimulusApproved,
  };
}
