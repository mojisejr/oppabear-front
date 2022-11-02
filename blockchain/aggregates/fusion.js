import { usePrepareContractWrite, useContractWrite } from "wagmi";
import labContract from "../contracts/labs.contract";

export function useFusion(hostTokenId, stimulusTokenId) {
  const fusionConfig = usePrepareContractWrite({
    ...labContract,
    functionName: "fusion",
    args: [hostTokenId, stimulusTokenId],
    enabled: hostTokenId > 0 && stimulusTokenId > 0 ? true : false,
  });

  const { write, isError, isLoading } = useContractWrite(fusionConfig.config);

  return {
    fusion: write,
    isError,
    isLoading,
  };
}
