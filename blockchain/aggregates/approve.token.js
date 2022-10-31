import { usePrepareContractWrite, useContractWrite } from "wagmi";
import hostContract from "../contracts/host.contract";
import stimlusContract from "../contracts/stimulus.contract";
import labContract from "../contracts/labs.contract";

export function useApprove(hostTokenId, stimulusTokenId) {
  const hostConfig = usePrepareContractWrite({
    ...hostContract,
    functionName: "approve",
    args: [hostTokenId, labContract.address],
    enabled: hostTokenId > 0 ? true : false,
  });
  //   const stimulusConfig = usePrepareContractWrite({
  //     ...stimlusContract,
  //     functionName: "approve",
  //     args: [stimulusTokenId, labContract.address],
  //     enabled: stimulusTokenId > 0 ? true : false,
  //   });

  const host = useContractWrite(hostConfig.config);
  //   const stimulus = useContractWrite(stimulusConfig.config);
  console.log(host);

  return {
    approveHost: host.write,
    // approveStimulus: stimulus.write,
    isHostError: host.isError,
    isHostLoading: host.isLoading,
    // isStimulusError: stimulus.isError,
    // isStimulusLoading: stimulus.isLoading,
  };
}
