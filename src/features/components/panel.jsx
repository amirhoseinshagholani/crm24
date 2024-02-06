import { useContext, useEffect } from "react";
import { useActionData, useNavigate } from "react-router-dom";
import { AppContext } from "../context/app-context";

const Panel = () => {
    const loginState = localStorage.getItem('loginState');
    const navigate = useNavigate();

    const {user} = useContext(AppContext);

    useEffect(()=>{
        console.log(loginState);
        if(!loginState){
            navigate('/login');
        }
    },[]);

    return(
        <div className="wrapper" style={{minHeight:'100h'}}>
            <nav className="sidebar">

            </nav>
            <div className="main">
                <nav className="navbar">
                    <a className="sidebar-toggle">
                        <i className="hamburger align-items-center"></i>
                    </a>
                </nav>
                <main className="content">

                </main>
                <footer className="footer">

                </footer>
            </div>
        </div>
    )

    // return(
    //     <div className="container text-center mt-10">
    //         <h1>پنل مدیریت</h1>
    //         <p className="lead"><span className="fw-bold">{user.firstname + " " + user.lastname+" "}</span>به پنل ادمین خوش آمدید</p>
    //         {
    //             console.log(user)
    //         }
    //     </div>
    // )
}

export default Panel;