import toast from 'react-hot-toast'

export async function usernameValidate (values){
    const errors = usernameVerify({},values);
}

export async function passwordValidate (values){
    const errors = passwordVerify({},values);
}

export async function resetPasswordValidate (values){
    const erros = resetPasswordVerify({},values);
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