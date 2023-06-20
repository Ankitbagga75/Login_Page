import toast, { ErrorIcon } from 'react-hot-toast'

export async function usernameValidate (values){
    const errors = usernameVerify({},values);
}

export async function passwordValidate (values){
    const errors = passwordVerify({},values);
}

export async function resetPasswordValidate (values){
    const erros = resetPasswordVerify({},values);
}

export async function registerValidate (values){
    const errors = usernameVerify({},values);
    passwordVerify(errors,values);
    emailVerify(errors,values);

    return errors; 
}

function resetPasswordVerify(error = {},values){
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (!values.password){
        error.password = toast.error('Password is required')
    }else if (values.password.includes(" ")){
        error.password = toast.error("Invalid Password");
    }else if (values.password.length < 8){
        error.password = toast.error("password must be at least 8 characters long")
    }else if (!specialChars.test(values.password)){
        error.password = toast.error("Password must have special characters");
    }

    if (!values.confirm_pwd){
        error.confirm_pwd = toast.error('Password is required')
    }else if (values.confirm_pwd.includes(" ")){
        error.confirm_pwd = toast.error("Invalid Password");
    }else if (values.confirm_pwd.length < 8){
        error.confirm_pwd = toast.error("password must be at least 8 characters long")
    }else if (!specialChars.test(values.confirm_pwd)){
        error.confirm_pwd = toast.error("Password must have special characters");
    }

    if (values.password !==  values.confirm_pwd){
        error.exist = toast.error("password not match")
    }

    return error
}
function usernameVerify(error ={},values){
    if (!values.username){
        error.username = toast.error('Username is required')
    }else if (values.username.includes(" ")){
        error.username = toast.error("Invalid Username");
    }

    return error;
}

function passwordVerify(error={},values){
    const specialChars = /[!@#$%^&*(),.?":{}|<>]/;
    if (!values.password){
        error.password = toast.error('Password is required')
    }else if (values.password.includes(" ")){
        error.password = toast.error("Invalid Password");
    }else if (values.password.length < 8){
        error.password = toast.error("password must be at least 8 characters long")
    }else if (!specialChars.test(values.password)){
        error.password = toast.error("Password must have special characters");
    }
     

    return error;
}

function emailVerify(error ={}, values){
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!values.email){
        error.email = toast.error("Email Required.....!")
    }
    else if(values.email.includes(' ')){
        error.email = toast.error("Wrong Email.....!")
    }
    else if (!emailRegex.test(values.email)){
        error.email = toast.error("Invalid Email....!")
    }

    return error; 
}