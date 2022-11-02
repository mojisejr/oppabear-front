import { useContractReads } from "wagmi";
import hostContract from "../contracts/host.contract";
import stimulusContract from "../contracts/stimulus.contract";
import labsContract from "../contracts/labs.contract";

export function useGetFusionablePairs(ownerAddress) {
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...labsContract,
        functionName: "getFusionablePairs",
        args: [ownerAddress],
      },
    ],
  });

  const parsedData =
    data === undefined || data.length <= 0 || data[0] == null
      ? []
      : JSON.parse(data);

  return {
    data: parsedData,
    isError,
    isLoading,
  };
}
