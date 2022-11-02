import { useContractEvent } from "wagmi";
import { useState } from "react";
import labsContract from "../contracts/labs.contract";

export function TokenLocked() {
  const [locked, setLock] = useState(0);

  useContractEvent({
    ...labsContract,
    eventName: "Received",
    listener(tokenId, owner) {
      setLock(tokenId);
    },
  });

  //{tokenId, approved}
  return {
    locked,
  };
}
