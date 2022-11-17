import { usePrepareContractWrite, useContractWrite } from "wagmi";
import labContract from "../contracts/labs.contract";

export function useFusion(hostTokenId, stimulusTokenId) {
  const fusionConfig = usePrepareContractWrite({
    ...labContract,
    functionName: "fusion",
    args: [hostTokenId?.edition, stimulusTokenId?.edition],
    enabled:
      hostTokenId?.edition > 0 && stimulusTokenId?.edition > 0 ? true : false,
  });

  const { write, isError, isLoading, isSuccess } = useContractWrite(
    fusionConfig.config
  );

  return {
    fusion: write,
    isError,
    isLoading,
    isFusioned: isSuccess,
  };
}
