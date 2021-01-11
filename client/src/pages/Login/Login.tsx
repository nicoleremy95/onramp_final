import * as React from 'react';
import Appbar from '../../components/Appbar/Appbar';
import Footer from '../../components/Footer/Footer'
import LoginForm from '../../components/LoginForm/LoginForm'


export default function Login() {
    return (
        <div>
            <Appbar/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}
