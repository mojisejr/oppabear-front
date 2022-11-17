import { usePrepareContractWrite, useContractWrite } from "wagmi";
import hostContract from "../contracts/host.contract";
import stimlusContract from "../contracts/stimulus.contract";
import labContract from "../contracts/labs.contract";

export function useApprove(hostTokenId, stimulusTokenId) {
  const hostConfig = usePrepareContractWrite({
    ...hostContract,
    functionName: "approve",
    args: [labContract.address, hostTokenId?.edition],
    enabled: hostTokenId?.edition > 0 ? true : false,
  });

  const stimulusConfig = usePrepareContractWrite({
    ...stimlusContract,
    functionName: "approve",
    args: [labContract.address, stimulusTokenId?.edition],
    enabled: stimulusTokenId?.edition > 0 ? true : false,
  });

  const host = useContractWrite(hostConfig.config);
  const stimulus = useContractWrite(stimulusConfig.config);

  return {
    approveHost: host.write,
    approveStimulus: stimulus.write,
    isApproved: host.isSuccess && stimulus.isSuccess,
  };
}
