import * as React from 'react';
import Appbar from '../../components/Appbar/Appbar';
import Footer from '../../components/Footer/Footer'
import UserComp from '../../components/UserComp/UserComp'

interface currentUserProps {
    currentUser: boolean
}

export default function User({currentUser}: currentUserProps) {
    return (
        <div>
            <Appbar currentUser={currentUser}/>
            <UserComp/>
            <Footer/>
        </div>
    )
}
