import { Signup } from "./signupModule.js";
import { Login } from "./loginModule.js";
import { validationInputs } from "./validationModule.js";

let addAccount = new Signup();
addAccount.addAccount();
addAccount.signinAnchor();

let logout = new Login();
logout.logout();

let validInputs = new validationInputs();

validInputs.validName();
validInputs.validEmaail();
validInputs.validPassword();