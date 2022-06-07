# fabricBasic
 - It is the basic code of Hyper-ledger Fabric explorer and chaincode.
 - To start tha project run the below command in chain/transaction folder:
  ./startFabric javascript 
 - And to shutdown the network: ./networkDown.sh
   
 **For Integration with explorer:**
- After running the chaincode, copy the organization file and paste it in explorer folder.
- Do some change in docker-compose.yaml file and change the adminPrivate key in explorer/connection-profile/test-network.json

 **Invoke and query transaction in terminal:**
 - Go to chain/transaction/javascript
 - install npm
 - node enrollAdmn.js
 - node enrollUser.js
 - node invoke.js
 - node query.js




