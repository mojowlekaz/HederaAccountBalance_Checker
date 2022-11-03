
import { 
  TokenCreateTransaction,
  AccountId,
	PrivateKey,
	Client,
  TokenId,
  TokenInfoQuery,
  Hbar,
  AccountInfoQuery,
  TransferTransaction,
  AccountBalanceQuery,
	FileCreateTransaction,
	ContractCreateTransaction,
	ContractFunctionParameters,
	ContractExecuteTransaction,
 } from '@hashgraph/sdk';


import { HashConnect } from 'hashconnect';
import App from './Me';
  

// let accountId = AccountId.fromString("0.0.48149218");
// const privateKey = PrivateKey.fromString("302e020100300506032b657004220420e3e5c08fd7fe00d135d097bcbd600bc5ee39ac89e3aeebfdf769766a624a6898");
// const treasuryKey = PrivateKey.fromString("302e020100300506032b657004220420e3e5c08fd7fe00d135d097bcbd600bc5ee39ac89e3aeebfdf769766a624a6898");

// const client = Client.forTestnet().setOperator(accountId, privateKey);
// let tokenId = TokenId.fromString("0.0.48150045")


// import {  HashConnectTypes, MessageTypes } from 'hashconnect';

let accountId =""

let saveData = {
    topic: "",
    pairingString: "",
    privateKey: "",
    pairedWalletData: null,
    pairedAccounts: []
}

let appMetadata = {
    name: "Helium",
    description: "Helium Token dApp",
    icon: "data:image/jpeg;base64,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"
}

    
let hashconnect = new HashConnect();

 export async function connect() {

   
        //first init and store the private for later
        let initData = await hashconnect.init(appMetadata);
        saveData.privateKey = initData.privKey;

        //then connect, storing the new topic for later
        let state = await hashconnect.connect();
        saveData.topic = state.topic;

        console.log('\nTopic is: $(saveData.topic)\n')
        
        //generate a pairing string, which you can display and generate a QR code from
        saveData.pairingString = hashconnect.generatePairingString(state, "mainnet", false);
        
        //find any supported local wallets
       const result = hashconnect.findLocalWallets();
    //    provider = hashconnect.getProvider(network, topic, accountId);
    //    let balance = await provider.getAccountBalance(accountId);
    //    signer = hashconnect.getSigner(provider);

       console.log(state);

       console.log(result + 'result')
       hashconnect.connectToLocalWallet(saveData.pairingString)


       hashconnect.pairingEvent.once(pairingData => {
        pairingData.accountIds.forEach(id => {
            accountId =id 
            console.log(accountId)
        })
        document.getElementById('connect').innerHTML = `Account ID: ${accountId}`
       })
    }
    

export async function getbalance() {
  let amount = document.getElementById("input").value;
  let accountId=amount
const privateKey = PrivateKey.fromString("302e020100300506032b65700422042039cc01498168ab2a5a1cd1ce80201e4259abaabc14492b69b00ca2183a08ab15");
const client = Client.forMainnet().setOperator(accountId, privateKey);
const query = new AccountBalanceQuery()
.setAccountId(accountId)


const tokenBalance = await query.execute(client);

console.log("The token balance(s) for this account: " +tokenBalance.toString());

// document.getElementById("close").innerHTML = tokenBalance
document.getElementById("close").innerHTML =` Your Account Balance(s):  ${tokenBalance}`

}

export async function Accountinfo() {
  let amount = document.getElementById("input1").value;
  let accountId=amount
const privateKey = PrivateKey.fromString("302e020100300506032b657004220420e3e5c08fd7fe00d135d097bcbd600bc5ee39ac89e3aeebfdf769766a624a6898");
const client = Client.forTestnet().setOperator(accountId, privateKey);
//Create the query
const query = new TokenInfoQuery()
    .setTokenId(accountId);

//Sign with the client operator private key, submit the query to the network and get the token supply
const tokenSupply = (await query.execute(client)).totalSupply;

console.log("The total supply of this token is " +tokenSupply);

//v2.0.7);

document.getElementById("get").innerHTML = tokenSupply()

}
//  export async function  Accountinfo() {
//   let amount = document.getElementById("input").value;
//   let accountId= amount
//   const provider  = hashconnect.getProvider('testnet', saveData.topic, accountId)
//   const signer = hashconnect.getSigner(provider)

//   // const privateKey = PrivateKey.fromString("302e020100300506032b657004220420e3e5c08fd7fe00d135d097bcbd600bc5ee39ac89e3aeebfdf769766a624a6898");
//   // const client = Client.forTestnet().setOperator(accountId, privateKey);
// //Create the account info query
// const query = new AccountInfoQuery()
//     .setAccountId(accountId);

// //Sign with client operator private key and submit the query to a Hedera network
// const accountInfo = await query.execute(signer);
// document.getElementById('pp').innerHTML = accountInfo
// //Print the account info to the console
// console.log(accountInfo);
 
// //v2.0.0
//  }

// let accountId = AccountId.fromString("0.0.48149218");
// const privateKey = PrivateKey.fromString("302e020100300506032b657004220420e3e5c08fd7fe00d135d097bcbd600bc5ee39ac89e3aeebfdf769766a624a6898");
// const treasuryKey = PrivateKey.fromString("302e020100300506032b657004220420e3e5c08fd7fe00d135d097bcbd600bc5ee39ac89e3aeebfdf769766a624a6898");

// const client = Client.forTestnet().setOperator(accountId, privateKey);
// let tokenId = TokenId.fromString("0.0.48150045")

//     export async function SendToken() {
//     //Create the transfer transaction
// const transaction =  new TransferTransaction()
// ._addTokenTransfer(tokenId, accountId, -10)
// ._addTokenTransfer(tokenId, "0.0.48149330", 10 )
// .freezeWith(client);
// const signTx = await transaction.sign(privateKey);
// const txResponse = await signTx.execute(client);
// const receipt = await txResponse.getReceipt(client);
// const transactionStatus = receipt.status;

// console.log("The transaction consensus status " +transactionStatus.toString());



//       }
//     /////////////////////////CREATE TOKEN//////////////////
//    export async function Createtoken() {
//       //Create the transaction and freeze for manual signing
// const transaction = await new TokenCreateTransaction()
// .setTokenName("Lemon")
// .setTokenSymbol("LMN")
// .setTreasuryAccountId(accountId)
// .setInitialSupply(5000)
// .setAdminKey(privateKey)
// .setMaxTransactionFee(new Hbar(30)) //Change the default max transaction fee
// .freezeWith(client);

// //Sign the transaction with the token adminKey and the token treasury account private key
// const signTx =  await (await transaction.sign(privateKey)).sign(treasuryKey);

// //Sign the transaction with the client operator private key and submit to a Hedera network
// const txResponse = await signTx.execute(client);

// //Get the receipt of the transaction
// const receipt = await txResponse.getReceipt(client);

// //Get the token ID from the receipt
// const tokenId = receipt.tokenId;

// console.log("The new token ID is " + tokenId);
//    }

   


  export default App;
    


