import * as React from 'react';
import Appbar from '../../components/Appbar/Appbar';
import Footer from '../../components/Footer/Footer'
import LoginForm from '../../components/LoginForm/LoginForm'

interface currentUserProps {
    currentUser: boolean
}

export default function Login({currentUser}: currentUserProps) {
    return (
        <div>
            <Appbar currentUser={currentUser}/>
            <LoginForm/>
            <Footer/>
        </div>
    )
}
