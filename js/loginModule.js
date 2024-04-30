import { Inputs, LogSignBtn, anchLogSig, welcomeSec, loginSec, logoutBTn, alertSec, noureen } from "./varsModule.js";

export class Login {
    accuntArr = [];
    checkAccount() {
        let Namevalue = "";
        if (JSON.parse(localStorage.getItem('ADDAcount')) != null) {
            this.accuntArr = JSON.parse(localStorage.getItem('ADDAcount'));
            for (let i = 0; i < this.accuntArr.length; i++) {
                if (Inputs[1].value === this.accuntArr[i].Email && Inputs[2].value === this.accuntArr[i].Password) {
                    Namevalue = this.accuntArr[i].Name;
                    welcomeSec.classList.remove('d-none');
                    loginSec.classList.add('d-none');
                }
                else {
                    alertSec.classList.remove('d-none');
                }
            }
            noureen.innerText = Namevalue;
        } else {
            alertSec.classList.remove('d-none');
        }
    }
    signupAnchor() {
        LogSignBtn.innerText = `Sign Up`;
        Inputs[0].classList.remove('d-none');
        anchLogSig.innerText = `Sign in`;
    }

    logout() {
        logoutBTn.addEventListener('click', function () {
            welcomeSec.classList.add('d-none');
            loginSec.classList.remove('d-none');
        })
    }
}