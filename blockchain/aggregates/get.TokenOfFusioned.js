import { useContractReads } from "wagmi";
import { readTokenURIs } from "../utils/readTokenUri.build";
import mutantContract from "../contracts/mutant.contract";

export function useGetTokenOfFusioned() {
  const { data, isError, isLoading } = useContractReads({
    contracts: [
      {
        ...mutantContract,
        functionName: "tokenURI",
        args: [tokenId],
      },
    ],
  });

  const mutant = data === undefined ? [] : data[0];

  return {
    mutant,
  };
}
