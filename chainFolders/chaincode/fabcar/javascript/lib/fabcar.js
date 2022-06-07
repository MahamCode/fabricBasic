/*
 * Copyright IBM Corp. All Rights Reserved.
 *
 * SPDX-License-Identifier: Apache-2.0
 */

'use strict';

const { Contract } = require('fabric-contract-api');

class FabCar extends Contract {
//function of initLedger, it ensures that you chaincode is properly installed and we are using this function as initialization while running
//ctx -> context is needed as a first parameter on all the functions
async initLedger(ctx){
    //whatever methods we are going to write in chaincode, we wil use ctx.stub
    //stub contains the all read write operations
    //putState stores the information in key value pairs
    await ctx.stub.putState("test", "hello world")
    return "success"
    }
    
    
    
    async writeData(ctx, key, value){
    await ctx.stub.putState(key, value)
    // console.log("***********",value)
    // value = JSON.parse(value)
    // await ctx.stub.putState(key, Buffer.from(JSON.stringify(value)))
    // return value
    }
    
    
    
    async readData(ctx, key){
        var response = await ctx.stub.getState(key);
        //every data that is in the ledger in form of byte array
        return response.toString();
    }
    }
    
    
    
    module.exports = FabCar;