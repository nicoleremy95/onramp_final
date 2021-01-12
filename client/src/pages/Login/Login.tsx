import * as React from 'react';
import Appbar from '../../components/Appbar/Appbar';
import Footer from '../../components/Footer/Footer';
import LoginForm from '../../components/LoginForm/LoginForm';

interface currentUserProps {
    currentUser: boolean,
    currentUserData: any
}

export default function Login({currentUser, currentUserData}: currentUserProps) {
    return (
        <div>
            <LoginForm/>
        </div>
    )
}
