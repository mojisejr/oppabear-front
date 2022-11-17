import hostContract from "../contracts/host.contract";
import stimulusContract from "../contracts/stimulus.contract";

export function readTokenURIs(tokenIds = [], type = 0) {
  if (tokenIds <= 0) return;
  switch (type) {
    case 0: {
      return tokenIds.map((tokenId) => {
        return {
          ...hostContract,
          functionName: "tokenURI",
          args: [tokenId.toString()],
        };
      });
    }
    case 1: {
      return tokenIds.map((tokenId) => {
        return {
          ...stimulusContract,
          functionName: "tokenURI",
          args: [tokenId.toString()],
        };
      });
    }
    default: {
      return [];
    }
  }
}
