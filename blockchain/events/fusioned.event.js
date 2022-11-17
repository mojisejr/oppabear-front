import { useContractEvent } from "wagmi";
import { useState } from "react";
import labsContract from "../contracts/labs.contract";
import mutantContract from "../contracts/mutant.contract";
import { useGetTokenOfFusioned } from "../aggregates/get.TokenOfFusioned";

export function EventFusioned() {
  const [fusional, setFusional] = useState(false);
  //TODO: EVENT MUST EMIT THE FUSIONED TOKENID
  //   const [fusionTokenURI, setFusionedTokenURI] = useState();
  //   const { mutant } = useGetTokenOfFusioned(fusionTokenURI);

  useContractEvent({
    ...labsContract,
    eventName: "Fusioned",
    listener(hostTokenId, stimulusTokenId) {
      console.log("fusioned", { hostTokenId, stimulusTokenId });
      setFusional(true);
    },
  });

  return {
    fusional,
    // tokenURI,
  };
}
