import * as React from 'react';
import Appbar from '../../components/Appbar/Appbar';
import Footer from '../../components/Footer/Footer';
import UserComp from '../../components/UserComp/UserComp';

interface currentUserProps {
    currentUser: boolean,
    currentUserData: any
}

export default function User({currentUser, currentUserData}: currentUserProps) {
    return (
        <div>
            <UserComp/>
        </div>
    )
}
