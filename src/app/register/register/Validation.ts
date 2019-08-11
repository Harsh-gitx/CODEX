import { FormGroup } from "@angular/forms";

export function confirmPassValidator(group:FormGroup){
    //console.log(group.value.pass)
    console.log(group)
    let password=group.value.pass;
    let confirmPass=group.value.confirmPass;
    console.log(password,confirmPass)
    console.log(password==confirmPass)
    return password===confirmPass?null:{'custom':true};
    //obtain password and confirmPassword
    //compare and return

    // null, {'custom':true }
}