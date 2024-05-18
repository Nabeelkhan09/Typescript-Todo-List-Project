#! /usr/bin/env node

import inquirer from "inquirer";

import chalk from "chalk";
let todos = [];
let condition = true;

console.log(chalk.blue.bold("\n \t Wellcome to Nabeel Hanif - Todo-List Application\n"));
while(condition) {
let addTask = await inquirer.prompt(
    [ 
           {
           name:"todo",
           type:"input",
           message: chalk.green("Enter your New Task :") 
        }
    ]);
todos.push(addTask.todo);
console.log(chalk.magenta(`${addTask.todo} Task added in Todo-List Successfully`));

let addMoreTask = await inquirer.prompt([
    {
        name: "addmore",
        type: "confirm",
        message: chalk.magenta("Do you want to add more task ?"),
        default: "false"
    }
]);
condition = addMoreTask.addmore
}

console.log(chalk.red.bold("Your updated Todo-List:"), todos);