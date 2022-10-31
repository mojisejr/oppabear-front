import { useContractWrite, usePrepareContractWrite } from "wagmi";
import contract from "./contracts/stimulus.contract";

// const { host, stimulus, labs, mutant } = {
//     host: "0xFba5De93343cB99d69127c10970be31875a2263a",
//     stimulus: "0x3cA7AfA1d2715E1F4bD8a95b7B2780E752855028",
//     labs: "0xB5aB626BcaD0e8c09760e9B1d161578b61CaF559",
//     mutant: "0x57C7D817A4c3f4dBaEBdef2057CDEd8f5e61Cf44",
//   };

export function useStimulus() {
  const { config } = usePrepareContractWrite({
    ...contract,
    functionName: "mint",
  });

  const { data, isLoading, isSuccess, write } = useContractWrite(config);
  return { data, isLoading, isSuccess, mintStimulus: write };
}
