#! /usr/bin/env/ node
import inquirer from "inquirer";
let myBalance=15000;

let pinAnswer = 1234;


let myPin = await inquirer.prompt([
  {
    name: "pin",
    type: "number",
    message: "Enter your pin",
  },
]);
if (pinAnswer === myPin.pin) {
  let operationAns = await inquirer.prompt([
    {
      name: "operation",
      message: "please select operation you want to perform",
      type: "list",
      choices: ["check balance", "withdraw","fast cash"],
    },
  ]);

  if(operationAns.operation==="withdraw"){
    let amountAns =await inquirer.prompt({
      name:"amount",
      type:"number",
      message:"enter amount you want to withdraw"
    })
    myBalance-= amountAns.amount
    console.log(`your remaining balance is ${myBalance}`)
  }
  else if(operationAns.operation==="fast cash"){
    let fastCashAns=await inquirer.prompt({
      name:"fastCash",
      message:"select the amount you want",
      type:"list",
      choices:["1000","3000","5000"]
    })

    myBalance-=fastCashAns.fastCash
    console.log(`your remaining balance is : ${myBalance}`)
  } 
    else{
      console.log( `your current balance is ${myBalance}`)
    }
} 


else {
  console.log("please enter valid pin");
}
