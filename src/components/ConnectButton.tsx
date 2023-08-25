import { Button, Box, Text, Img } from "@chakra-ui/react";
import Identicon from "./Identicon";
import { TransactionStatus, useEthers, transactionErrored, useEtherBalance, useNotifications, Notifications,useTransactions, useContractFunction } from '@usedapp/core'
import metamask_icon from "../Pictures/metamaskicon.png"
declare var window: any

type Props = {
  handleOpenModal: any;
};



export default function ConnectButton({ handleOpenModal }: Props) {
  const { activateBrowserWallet, account, chainId, error, active, deactivate, switchNetwork } = useEthers();

  function handleConnectWallet() {
    activateBrowserWallet();
  }

  
  
  return account ? (
    
    <Box
      display="flex"
      alignItems="center"
      background="gray.700"
      //width="234px"
      borderRadius="md"
      py="0"
    >
      

      
      <Button onClick={deactivate }
        
        bg="gray.900"
        border="1px solid transparent"

        _hover={{
          border: "1px",
          borderStyle: "solid",
          borderColor: "gray.800",
          backgroundColor: "gray.800",
        }}
        _active={{
          backgroundColor: "gray.800",
          borderColor: "gray.700",
        }}
        borderRadius="md"
        m="1px"
        px={3}
        height="38px"
        width="144px"

        _focus={{
          boxShadow:
            '0 0 1px 2px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)',
        }}

        
      >
        <Text color="white" fontSize="md" fontWeight="medium" mr="2">
          {account &&
            `${account.slice(0, 6)}...${account.slice(
              account.length - 4,
              account.length
            )}`}
        </Text>
        <Identicon />

      </Button>

      
      
      </Box>
    
  ) : (
    
    <Button
      
      onClick={handleConnectWallet }
      bg="gray.700"
      color="gray.100"
      fontSize="lg"
      fontWeight="medium"
      borderRadius="md"
      border="1px solid transparent"

      _active={{
        backgroundColor: "gray.700",
        borderColor: "gray.700",
      }}
      _hover={{
        border: "1px",
        borderStyle: "solid",
        borderColor: "gray.600",
        backgroundColor: "gray.600",
      }}
      _focus={{
        boxShadow:
          '0 0 1px 2px rgba(0, 0, 0, 0), 0 1px 1px rgba(0, 0, 0, .15)',
      }}
      

      
    >
      <Img src={metamask_icon} boxSize="30px" position="relative" right = "7px"/>
      <Text>
      
     Connect Wallet
      </Text>
    </Button>
  );
}
