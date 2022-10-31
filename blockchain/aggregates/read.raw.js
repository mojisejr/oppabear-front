import { useContractReads } from "wagmi";
import hostContract from "../contracts/host.contract";
import stimulusContract from "../contracts/stimulus.contract";

export function useReadRaws(ownerAddress) {
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

  return {
    hostData,
    stimulusData,
    isError,
    isLoading,
  };
}
