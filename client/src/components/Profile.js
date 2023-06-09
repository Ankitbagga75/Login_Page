import React from 'react';
import { Link } from 'react-router-dom';
import avatar from '../assets/profile.png';
import { profileValidate } from '../helper/validate';
import { useFormik } from 'formik';
import {Toaster} from 'react-hot-toast';
import styles from '../styles/Username.module.css'
import { useState } from 'react';
import convertToBase64 from '../helper/convert';
import extend from '../styles/Username.module.css'


export default function Profile(){
    const [file,setFile] = useState()
    const formik = useFormik({
        initialValues:{
            email:"",
            username:"",
            password:"",
            mobile: "",
            address: ""
        },
        validate: profileValidate,
        validateOnBlur: false,
        validateOnChange:false,
        onSubmit: async (values)=>{
            values = await Object.assign(values,{profile : file || ''})
            console.log(values);
        }
    })

    const onUpload = async e=>{
        const base64 = await convertToBase64(e.target.files[0]);
        setFile(base64);
    }
    return (
        <div className='container mx-auto'>
            <Toaster position='top-center' reverseOrder={false}></Toaster>
            <div className='flex justify-center items-center h-screen'>
                <div className={`${styles.glass} ${extend.glass}`} style={{width:"45%"}}>
            <div className='title flex flex-col items-center' style={{padding: "29px"}}>
                <h4 className='text-5xl font-bold'>Profile</h4>
                <span className='py-4 text-xl w-2/3 text-center text-gray-500'>
                    You can update the details
                </span>
                </div>
                <form className='py-1' onSubmit={formik.handleSubmit}>
                    <div className='profile flex justify-center py-4'>
                        <label htmlFor='profile'>
                        <img src={file || avatar} className={`${styles.profile_img} ${extend.profile_img}`} alt="avatar" /> 
                        </label>
                        <input onChange={onUpload} type="file" id='profile' name='profile' />
                    </div>
                    <div className='textbox flex flex-col items-center gap-6'>
                        <div className='name flex w-3/4 gap-10'>
                            <input{...formik.getFieldProps('firstname')} className={`${styles.textbox} ${extend.textbox}`} type = 'text' placeholder='FirstName' />
                            <input{...formik.getFieldProps('lastname')} className={`${styles.textbox} ${extend.textbox}`} type = 'text' placeholder='LastName' />  
                        </div>

                        <div className='name flex w-3/4 gap-10'>
                            <input{...formik.getFieldProps('mobile')} className={`${styles.textbox} ${extend.textbox}`} type = 'text' placeholder='Mobile' />
                            <input{...formik.getFieldProps('email')} className={`${styles.textbox} ${extend.textbox}`} type = 'text' placeholder='Email*' />  
                        </div>
                        
                        <div className='name flex w-3/4 gap-10'>
                            <input{...formik.getFieldProps('address')} className={`${styles.textbox} ${extend.textbox}`} type = 'text' placeholder='Address' />
                        </div>               
                        <button className={styles.btn} type = 'submit'>Update</button>
                    </div>
                    <div className='text-center py-4'>
                        <span className='text=gray-500'>Come back later? <Link className='text-red-500' to='/'>Logout</Link></span>
                    </div>
                </form>
                </div>
            </div>
        </div>
    )
}