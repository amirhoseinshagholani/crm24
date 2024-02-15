import { React, useContext, useEffect } from "react";
import { AppContext } from "../../context/app-context";
import { BackgroundColor } from "devextreme-react/cjs/chart";
import { httpService } from '../../../services/http-service';
import useFetchUser from "../../costomHooks/useFetchUser";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import Button from '../../../../devextreme-react/button';
// import React from 'react';
// import { Button } from 'reactstrap';
// import { Modal, ModalBody, ModalHeader } from 'reactstrap';

// const currentUser = useFetchUser();

// useEffect(() => {
//     console.log(currentUser);
// }, [currentUser]);  

const Profile = () => {

    // const { user } = useContext(AppContext);

    const currentUser = useFetchUser();

 

    // const currentUser = Object.entries(user);
    return (
        <>
            {/* {
                <table className="table">

                    {Object.keys(user).map((key, index) => {
                        return user[key] && (
                            <>
                                <ul className="list-group">
                                    {Object.keys(user).map((key, index) => {
                                        return user[key] && <li className={`list-group-item`} key={index}>{key}: {user[key]}</li>;
                                    })}
                                </ul>
                            </>
                        );
                    })}
                </table>
            } */}
            {/* <ul className="list-group">
                {Object.keys(user).map((key, index) => {
                    return user[key] && <li className={`list-group-item`} key={index}>{key}: {user[key]}</li>;
                })}
            </ul> */}
            <div className="container border rounded-lg" style={{backgroundColor:"#ccd1ff"}}>
                <div className="text-center mt-5">
                    <h1>{currentUser.firstname} {currentUser.lastname}</h1>
                </div>
                <div className="d-flex justify-content-center align-items-center mt-5 mb-5 gap-5" dir="rtl">
                    <div>
                        <ul>
                            <li className="list-group fs-lg fw-bold mt-1"><p>کد ملی : <span dir="ltr">{currentUser.cf_1123}</span></p></li>
                            <li className="list-group fs-lg fw-bold mt-1"><p>شماره موبایل : <span dir="ltr">{currentUser.mobile}</span></p></li>
                            <li className="list-group fs-lg fw-bold mt-1"><p>ایمیل : <span dir="ltr">{currentUser.email}</span></p></li>
                        </ul>
                    </div>
                    <div>
                        <ul>
                            <li className="list-group fs-lg fw-bold mt-1"><p>منبع : <span dir="ltr">{currentUser.leadsource}</span></p></li>
                            <li className="list-group fs-lg fw-bold mt-1"><p>شهر : <span dir="ltr">{currentUser.cf_1193}</span></p></li>
                            <li className="list-group fs-lg fw-bold mt-1"><p>آدرس : <span dir="ltr">{currentUser.cf_1195}</span></p></li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

// export async function loadedUser(){
//     const sessionName = localStorage.getItem('sessionName');
//     const userId = localStorage.getItem('userId');

//     const response = await httpService.get('/webservice.php?operation=query&sessionName=' + sessionName + '&query=SELECT * FROM Contacts where id=' + userId + ';');
//     return response.data;
// }

export default Profile;
