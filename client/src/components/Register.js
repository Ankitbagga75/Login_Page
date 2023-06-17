import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { passwordValidate } from '../helper/validate';
import { useFormik } from 'formik';
import {Toaster} from 'react-hot-toast';
import styles from '../styles/Username.module.css'
export default function Register(){

    const formik = useFormik({
        initialValues:{
            email:"",
            username:"",
            password:""
        },
        validate: passwordValidate,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit: async (values)=>{
            console.log(values);
        }

    })
    return (
        <div className='container mx-auto'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={styles.glass} style={{width:"45%"}}>
            <div className='title flex flex-col items-center' style={{padding: "29px"}}>
                <h4 className='text-5xl font-bold'> Register </h4>
                <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                    Happy to join you! 
                </span>
                </div>
                <form className='py-1' onSubmit={formik.handleSubmit}>
                    <div className='profile flex justify-center py-4'>
                        <label htmlFor=''>
                        <img src={avatar} className={styles.profile_img} alt="avatar" width="200" height="200" /> 
                        </label>
                        <input type="file" id='profile' />
                    </div>
                    <div className='textbox flex flex-col items-center gap-6'>
                        <input{...formik.getFieldProps('email')} className={styles.textbox} type = 'text' placeholder='Email' />
                        <input{...formik.getFieldProps('username')} className={styles.textbox} type = 'text' placeholder='Username' />
                        <input{...formik.getFieldProps('password')} className={styles.textbox} type = 'text' placeholder='Password' />
                        <button className={styles.btn} type = 'submit'>Let's Go</button>
                    </div>
                    <div className='text-center py-4'>
                        <span className='text=gray-500'>Already Register? <Link className='text-red-500' to='/'>Login</Link></span>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}