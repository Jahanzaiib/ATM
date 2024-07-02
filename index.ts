import inquirer from "inquirer";
import chalk from "chalk";

let mypin = 1200;
let myBalance = 100000;

let ans = await inquirer.prompt([
  {
    type: "number",
    name: "userPin",
    message: chalk.green("Please Enter your PIN Code "),
  },
]);

if (ans.userPin == mypin) {
  console.log(chalk.green("Your Pin is correct"));
  let userMethod = await inquirer.prompt([
    {
      name: "usermethod",
      type: "list",
      message: "Kindly, Enter your method:",
      choices: ["Withdraw", "Current Balance", "Fast Cash"],
    }
  ]);
  if (userMethod.usermethod === "Withdraw") {
    let amountAns = await inquirer.prompt([
      {
        name: "amount",
        type: "number",
        message: "Please enter your Amount ",
      }
    ]);
    if (amountAns.amount > myBalance) {
      console.log(chalk.red("Unsufficent Balance"));
    } else {
      myBalance = myBalance - amountAns.amount;
      console.log(chalk.greenBright(`Your Remaing amount is ${myBalance}`));
    }
  } else if (userMethod.usermethod === "Current Balance") {
    console.log(chalk.redBright(`Your Balance amount is ${myBalance}`));
  } else if (userMethod.usermethod === "Fast Cash") {
    let fastans = await inquirer.prompt([
      {
        name: "fast",
        type: "list",
        Message: " Please select your cash Amount ",
        choices: [100, 500, 1000, 5000, 1000],
      }
    ]);

    myBalance = myBalance - fastans.fast;
    console.log(chalk.greenBright(`Your Remaing amount is ${myBalance}`));
  }
} else {
  console.log(chalk.red("your PIN is incorrect Please try again"));
};


