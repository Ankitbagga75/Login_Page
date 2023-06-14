import toast from 'react-hot-toast'

export async function usernameValidate (values){
    const errors = usernameVerify({},values);
}

export async function passwordValidate (values){
    const errors = passwordVerify({},values);
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