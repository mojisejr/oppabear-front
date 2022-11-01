import { usePrepareContractWrite, useContractWrite } from "wagmi";
import labContract from "../contracts/labs.contract";

export function useLock(hostTokenId, stimulusTokenId) {
  const hostConfig = usePrepareContractWrite({
    ...labContract,
    functionName: "lock",
    args: [hostTokenId, stimulusTokenId],
    enabled: hostTokenId > 0 && stimulusTokenId > 0 ? true : false,
  });

  const { write, isError, isLoading } = useContractWrite(hostConfig.config);

  return {
    lock: write,
    isError,
    isLoading,
  };
}
