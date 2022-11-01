import { useContractEvent } from "wagmi";
import { useState } from "react";
import hostContract from "../contracts/host.contract";

export function HostApproval() {
  const [approval, setApproval] = useState(0);

  useContractEvent({
    ...hostContract,
    eventName: "Approval",
    listener(owner, approved, tokenId) {
      setApproval(tokenId);
    },
  });

  return {
    approval,
  };
}
