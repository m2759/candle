import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { formatEther } from '@ethersproject/units'
import {
  Mainnet,
  ChainId,
  DAppProvider,
  useEtherBalance,
  useEthers,
  Config,
  Songbird,
  DEFAULT_SUPPORTED_CHAINS,
  useNotifications,
} from '@usedapp/core'


const config: Config = {
  networks: [Songbird],
  readOnlyChainId: 19,

  readOnlyUrls: {
    [Songbird.chainId]: "https://songbird-api.flare.network/ext/C/rpc"
  },

  notifications: {
    expirationPeriod: 500,
    checkInterval: 100

  }
}

ReactDOM.render(
  
  <React.StrictMode>
    <DAppProvider config={config}>
      
      <App />

    </DAppProvider>
  </React.StrictMode>,
  document.getElementById('root')
);



// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
