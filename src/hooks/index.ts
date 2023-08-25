import { ethers } from "ethers";
import { Contract } from "@ethersproject/contracts";
import { useContractCall, useContractFunction,useCall, } from "@usedapp/core";
import contractAbi from "../abi/CandlePrediction.json";
import { contractAddress } from "../contracts"
import FTSOAbi from "../abi/FTSO.json"
import wethAbi from "../abi/WETH.json"
import { BTCAddress, ETHAddress, LTCAddress} from "../contracts"




//main contract to interact with
const contractInterface = new ethers.utils.Interface(contractAbi)
const contract = new Contract(contractAddress, contractInterface)
//oracle
const FtsoInterface = new ethers.utils.Interface(FTSOAbi)
const BTCContract = new Contract(BTCAddress, FtsoInterface)
const ETHContract = new Contract(ETHAddress, FtsoInterface)
const LTCContract = new Contract(LTCAddress, FtsoInterface)

////////////////////////////////////////////////////////////////////

const wnatAddress = "0x02f0826ef6aD107Cfc861152B32B52fD11BaB9ED"
const wnatInterface = new ethers.utils.Interface(wethAbi)
const wnatContract = new Contract(wnatAddress, wethAbi)




export function useTotalRed(){
  const { value, error } = useCall(contractAddress && {
    contract: contract,
    method: 'totalRed',
    args: []
  })?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value
}







//native balance

export function useGetBALANCE(_Address){
  const { value, error } = useCall(wnatAddress && {
    contract: wnatContract,
    method: 'balanceOf',
    args: [_Address]
  })?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value
}

//stakedINFO










export function useGetLatestPrice() {
  
  
    const [price] = useContractCall({
      abi: contractInterface,
      address: contractAddress,
      method: "getLatestPrice",
      args: [],
    }) ?? [];
    return price;
  }
  
export function useTotalValue() {
  const {value, error} = useCall({

    contract: contract,
    method: "TotalValue",
    args:[]


  }) ?? {}
  if(error) {
    // console.error(error.message)
    return undefined
  }
  return value;
  }

export function useTotalUp() {
  const {value, error} = useCall({

    contract: contract,
    method: "TotalUp",
    args:[]


  }) ?? {}
  if(error) {
    // console.error(error.message)
    return undefined
  }
  return value;
}

export function useTotalDown() {
  const {value, error} = useCall({

    contract: contract,
    method: "TotalDown",
    args:[]


  }) ?? {}
  if(error) {
    // console.error(error.message)
    return undefined
  }
  return value;
}






  

export function useEnterGameLong() {
    const { state, send } = useContractFunction(contract, "EnterGame", {
      transactionName: "Enter Long"
    });
    return { state, send };
  }     
export function useEnterGameShort() {
    const { state, send } = useContractFunction(contract, "EnterGame", {
      transactionName: "Enter Short"
    });
    
    return { state, send };
  }     
export function useEndGame() {
    const { state, send } = useContractFunction(contract, "EndGame", {});
    return { state, send };
  }     


//FTSO  

export function useGetCurrentEpochId() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: 'getCurrentEpochId',
    args:[]


  }) ?? {}


return value;
}


export function useGetCurrentPrice() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getCurrentPrice",
    args:[]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }

return value;
}

export function useGetCurrentPriceETH() {
  const {value, error} = useCall({

    contract: ETHContract,
    method: "getCurrentPrice",
    args:[]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }

return value;
}

export function useGetCurrentPriceLTC() {
  const {value, error} = useCall({

    contract: LTCContract,
    method: "getCurrentPrice",
    args:[]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }

return value;
}


export function useGetEpochPriceETH(epochnumber) {
  const {value, error} = useCall({

    contract: ETHContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-epochnumber]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }

  return value;
  

}

export function useGetEpochPriceLTC(epochnumber) {
  const {value, error} = useCall({

    contract: LTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-epochnumber]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }

  return value;
  

}

export function useGetEpochPrice0() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }

  return value;
  

}

export function useGetEpochPrice() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-1]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}

export function useGetEpochPrice2() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-2]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}

export function useGetEpochPrice3() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-3]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}

export function useGetEpochPrice4() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-4]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}

export function useGetEpochPrice5() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-5]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}

export function useGetEpochPrice6() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-6]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}

export function useGetEpochPrice7() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-7]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}

export function useGetEpochPrice8() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-8]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}

export function useGetEpochPrice9() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-9]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}

export function useGetEpochPrice10() {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-10]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}

export function useGetEpochPriceXXX(delay) {
  const {value, error} = useCall({

    contract: BTCContract,
    method: "getEpochPrice",
    args:[useGetCurrentEpochId()-delay]


  }) ?? {}
  if(error) {
    console.error(error.message)
    return undefined
  }
  return value;

}













