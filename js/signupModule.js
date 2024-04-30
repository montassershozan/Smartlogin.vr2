import { Inputs, LogSignBtn, anchLogSig, alertSec } from "./varsModule.js";
import { Login } from "./loginModule.js";
import { validationInputs } from "./validationModule.js";

class Sign {
    constructor(Name, Email, Password) {
        this.Name = Name;
        this.Email = Email;
        this.Password = Password;
    }
}

class Signu {
    accuntArr = [];
    makeAccount() {
        let valid = new validationInputs();
        let newAccount = new Sign(Inputs[0].value, Inputs[1].value, Inputs[2].value);
        if (valid.valiadteName() && valid.valiadteEmail() && valid.valiadtePassword()) {
            this.accuntArr.push(newAccount);
            console.log(this.accuntArr);
            const convToStr = JSON.stringify(this.accuntArr);
            localStorage.setItem('ADDAcount', convToStr);
            LogSignBtn.innerText = `Login`;
            Inputs[0].classList.add('d-none');
            anchLogSig.innerText = `Sign Up`;
        }
        else {
            alertSec.classList.remove('d-none');
        }
    }
}

export class Signup {
    addAccount() {
        let makeAccount = new Signu();
        LogSignBtn.addEventListener('click', function (e) {
            e.preventDefault();
            if (LogSignBtn.innerHTML != `Login`) {
                makeAccount.makeAccount();
            } else {
                let login = new Login();
                login.checkAccount();
            }
        })
    }
    signinAnchor() {
        anchLogSig.addEventListener('click', function () {
            if (anchLogSig.innerHTML != `Sign Up`) {
                LogSignBtn.innerText = `Login`;
                Inputs[0].classList.add('d-none');
                anchLogSig.innerText = `Sign Up`;
                alert1.classList.add('d-none');
                alert2.classList.add('d-none');
                alert3.classList.add('d-none');

            } else {
                let login2 = new Login();
                login2.signupAnchor();
            }
        })
    }
}