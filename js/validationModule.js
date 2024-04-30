import { Inputs, alert1, alert2, alert3 } from "./varsModule.js"

export class validationInputs {
    valiadteName() {
        let NameRgex = /^[A-Z][a-z]{3,9}$/
        let NameValue = Inputs[0].value;
        if (NameRgex.test(NameValue)) {
            Inputs[0].classList.add('is-valid');
            Inputs[0].classList.remove('is-invalid');
            alert1.classList.add('d-none');
            return true;
        } else {
            Inputs[0].classList.add('is-invalid');
            alert1.classList.remove('d-none');
            return false;
        }
    }
    valiadteEmail() {
        let EmailRgex = /^[a-zA-Z0-9]*(@)[a-z]*(.com)$/
        let EmailValue = Inputs[1].value;
        if (EmailRgex.test(EmailValue)) {
            Inputs[1].classList.add('is-valid');
            Inputs[1].classList.remove('is-invalid');
            alert2.classList.add('d-none');
            return true;
        } else {
            Inputs[1].classList.add('is-invalid');
            alert2.classList.remove('d-none');
            return false;
        }
    }
    valiadtePassword() {
        let PasswordRgex = /^[A-Za-z0-9]{6,}$/
        let PasswordValue = Inputs[2].value;
        if (PasswordRgex.test(PasswordValue)) {
            Inputs[2].classList.add('is-valid');
            Inputs[2].classList.remove('is-invalid');
            alert3.classList.add('d-none');
            return true;
        } else {
            Inputs[2].classList.add('is-invalid');
            alert3.classList.remove('d-none');
            return false;
        }
    }
    validName() {
        Inputs[0].addEventListener('input', this.valiadteName)
    }

    validEmaail() {
        Inputs[1].addEventListener('input', this.valiadteEmail)
    }

    validPassword() {
        Inputs[2].addEventListener('input', this.valiadtePassword)
    }
}