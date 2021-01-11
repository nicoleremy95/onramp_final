import * as React from 'react';
import Appbar from '../../components/Appbar/Appbar';
import Footer from '../../components/Footer/Footer'
import UserComp from '../../components/UserComp/UserComp'

export default function User() {
    return (
        <div>
            <Appbar/>
            <UserComp/>
            <Footer/>
        </div>
    )
}
