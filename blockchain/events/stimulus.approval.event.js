import { useContractEvent } from "wagmi";
import { useState } from "react";
import stimulusContract from "../contracts/stimulus.contract";

export function StimulusApproval() {
  const [approval, setApproval] = useState(0);

  useContractEvent({
    ...stimulusContract,
    eventName: "Approval",
    listener(owner, approved, tokenId) {
      setApproval(tokenId);
    },
  });

  return {
    approval,
  };
}
``;
