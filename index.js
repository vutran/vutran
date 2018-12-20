#!/usr/bin/env node

const boxen = require("boxen");
const chalk = require("chalk");

const me = {
  firstName: "Vu",
  lastName: "Tran",
  twitter: "https://twitter.com/tranvu",
  github: "https://github.com/vutran",
  email: "vu@vu-tran.com"
};

const card = boxen(
  `${chalk.bold("Vu Tran")}
${chalk.bold("-".repeat(40))}

${chalk.bold("Work:")} Dropbox
${chalk.bold("Twitter:")} https://twitter.com/tranvu
${chalk.bold("GitHub:")} https://github.com/vutran
${chalk.bold("LinkedIn:")} https://linkedin.com/in/trandev
${chalk.bold("Web:")} https://tran.vu

${chalk.bold("Card:")} npx vutran`,
  { borderColor: "yellow", padding: 1 }
);

console.log(card);
