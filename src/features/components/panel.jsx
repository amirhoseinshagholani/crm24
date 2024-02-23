import { useContext, useEffect, useState } from "react";
import { Outlet, useActionData, useNavigate } from "react-router-dom";
// import { AppContext } from "../context/app-context";
import logo from '@assets/images/logo-panel.png';
import useFetchUser from "../costomHooks/useFetchUser";
import { httpService } from "@services/http-service";

const Panel = () => {
    const loginState = localStorage.getItem('loginState');

    const navigate = useNavigate();
    // const {user}= useContext(AppContext);
    
    const currentUser = useFetchUser();

    useEffect(() => {
        // console.log(currentUser);
        if (!loginState) {
            navigate('/login');
        }
    }, [currentUser]);  

    return (
        <div className="wrapper" style={{ minHeight: '100h' }}>
            <nav className="sidebar" >
                <div className="sidebar-content" dir="rtl">
                    <a href="/panel" className="sidebar-brand d-flex flex-column align-item-center pt-0 mb-0">
                        <img src={logo} className="mt-3" />
                    </a>
                    <hr className="text-dark" />
                    <ul className="sidebar-nav pe-0 pt-0">
                        <li className="sidebar-header fw-bold fs-lg"><a href="/panel" className="text-secondary">پروفایل</a></li>
                        <li className="sidebar-header fw-bold fs-lg text-secondary">ترمینال</li>
                        <li className="sidebar-item">
                            <a href="/panel/simcard" className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-sim" viewBox="0 0 16 16">
                                    <path d="M2 1.5A1.5 1.5 0 0 1 3.5 0h7.086a1.5 1.5 0 0 1 1.06.44l1.915 1.914A1.5 1.5 0 0 1 14 3.414V14.5a1.5 1.5 0 0 1-1.5 1.5h-9A1.5 1.5 0 0 1 2 14.5zM3.5 1a.5.5 0 0 0-.5.5v13a.5.5 0 0 0 .5.5h9a.5.5 0 0 0 .5-.5V3.414a.5.5 0 0 0-.146-.353l-1.915-1.915A.5.5 0 0 0 10.586 1z" />
                                    <path d="M5.5 4a.5.5 0 0 0-.5.5V6h2.5V4zm3 0v2H11V4.5a.5.5 0 0 0-.5-.5zM11 7H5v2h6zm0 3H8.5v2h2a.5.5 0 0 0 .5-.5zm-3.5 2v-2H5v1.5a.5.5 0 0 0 .5.5zM4 4.5A1.5 1.5 0 0 1 5.5 3h5A1.5 1.5 0 0 1 12 4.5v7a1.5 1.5 0 0 1-1.5 1.5h-5A1.5 1.5 0 0 1 4 11.5z" />
                                </svg>
                                <span className="text-info"> سیمکارت </span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a href="/panel/networks" className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-hdd-network" viewBox="0 0 16 16">
                                    <path d="M4.5 5a.5.5 0 1 0 0-1 .5.5 0 0 0 0 1M3 4.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                                    <path d="M0 4a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v1a2 2 0 0 1-2 2H8.5v3a1.5 1.5 0 0 1 1.5 1.5h5.5a.5.5 0 0 1 0 1H10A1.5 1.5 0 0 1 8.5 14h-1A1.5 1.5 0 0 1 6 12.5H.5a.5.5 0 0 1 0-1H6A1.5 1.5 0 0 1 7.5 10V7H2a2 2 0 0 1-2-2zm1 0v1a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1m6 7.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5" />
                                </svg>
                                <span className="text-info"> شبکه </span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a href="/panel/modems" className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-modem" viewBox="0 0 16 16">
                                    <path d="M5.5 1.5A1.5 1.5 0 0 1 7 0h2a1.5 1.5 0 0 1 1.5 1.5v11a1.5 1.5 0 0 1-1.404 1.497c.35.305.872.678 1.628 1.056A.5.5 0 0 1 10.5 16h-5a.5.5 0 0 1-.224-.947c.756-.378 1.277-.75 1.628-1.056A1.5 1.5 0 0 1 5.5 12.5zM7 1a.5.5 0 0 0-.5.5v11a.5.5 0 0 0 .5.5h2a.5.5 0 0 0 .5-.5v-11A.5.5 0 0 0 9 1z" />
                                    <path d="M8.5 2.5a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0m0 2a.5.5 0 1 1-1 0 .5.5 0 0 1 1 0" />
                                </svg>
                                <span className="text-info"> مودم </span>
                            </a>
                        </li>
                        <li className="sidebar-header fw-bold fs-lg text-secondary">خرید بسته</li>
                        <li className="sidebar-header fw-bold fs-lg text-secondary">پشتبانی</li>
                        <li className="sidebar-item">
                            <a href="/panel/tickets/post" className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ticket" viewBox="0 0 16 16">
                                    <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
                                </svg>
                                <span className="text-info"> ثبت تیکت </span>
                            </a>
                        </li>
                        <li className="sidebar-item">
                            <a href="/panel/tickets" className="sidebar-link">
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-ticket-detailed" viewBox="0 0 16 16">
                                    <path d="M4 5.5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5m0 5a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7a.5.5 0 0 1-.5-.5M5 7a1 1 0 0 0 0 2h6a1 1 0 1 0 0-2z" />
                                    <path d="M0 4.5A1.5 1.5 0 0 1 1.5 3h13A1.5 1.5 0 0 1 16 4.5V6a.5.5 0 0 1-.5.5 1.5 1.5 0 0 0 0 3 .5.5 0 0 1 .5.5v1.5a1.5 1.5 0 0 1-1.5 1.5h-13A1.5 1.5 0 0 1 0 11.5V10a.5.5 0 0 1 .5-.5 1.5 1.5 0 1 0 0-3A.5.5 0 0 1 0 6zM1.5 4a.5.5 0 0 0-.5.5v1.05a2.5 2.5 0 0 1 0 4.9v1.05a.5.5 0 0 0 .5.5h13a.5.5 0 0 0 .5-.5v-1.05a2.5 2.5 0 0 1 0-4.9V4.5a.5.5 0 0 0-.5-.5z" />
                                </svg>
                                <span className="text-info"> مشاهده تیکت ها </span>
                            </a>
                        </li>
                    </ul>
                </div>
            </nav>
            <div className="main">
                <nav className="navbar bg-dark">
                    <a className="text-secondary fs-md">
                        {currentUser.firstname + " " + currentUser.lastname + " "} به پنل مدیریت نت اکسپرت خوش آمدید
                    </a>
                    <div>
                        <a href="#" className="btn btn-sm btn-danger">خروج</a>
                    </div>
                </nav>
                <main className="content">
                    <div className="container-fluid p-0">
                        <Outlet></Outlet>
                    </div>
                </main>
                <footer className="footer bg-dark">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <p className="mb-0">
                                    <a href="/panel" className="text-muted">
                                        © netXpert - desine by AmirHosein
                                    </a>
                                </p>
                            </div>
                        </div>
                    </div>
                </footer>
            </div>
        </div>
    )
}

export default Panel;