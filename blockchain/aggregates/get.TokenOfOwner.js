import { useContractReads } from "wagmi";
import { readTokenURIs } from "../utils/readTokenUri.build";
import hostContract from "../contracts/host.contract";
import stimulusContract from "../contracts/stimulus.contract";

export function useGetTokenOfOwner(ownerAddress) {
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...hostContract,
        functionName: "tokensOfOwner",
        args: [ownerAddress],
      },
      {
        ...stimulusContract,
        functionName: "tokensOfOwner",
        args: [ownerAddress],
      },
    ],
  });

  const hostData = data === undefined ? [] : data[0];
  const stimulusData = data === undefined ? [] : data[1];

  //@non get token uri of tokens
  const hostUriObjects = readTokenURIs(hostData, 0);
  const stimulusUriObjects = readTokenURIs(stimulusData, 1);

  const hostURIs = useContractReads({
    contracts: hostUriObjects,
  });

  const stimulusURIs = useContractReads({
    contracts: stimulusUriObjects,
  });

  return {
    hostData,
    stimulusData,
    hostURIs: hostURIs.data === undefined ? [] : hostURIs.data,
    stimulusURIs: stimulusURIs.data === undefined ? [] : stimulusURIs.data,
    isHostOK: hostURIs.isSuccess,
    isStimulusOK: stimulusURIs.isSuccess,
    isStimulusLoading: stimulusURIs.isLoading,
    isHostLoading: hostURIs.isLoading,
  };
}
