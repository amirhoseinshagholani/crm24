import Login from "./Login"

const Home = () => {
    return(
        <div className="container text-center mt-10">
            <h1>صفحه اصلی</h1>
            <p className="lead">به نت اکسپرت خوش آمدید</p>
            <p>
                <a className="btn btn-success btn-lg" href={'/login'}>ورود</a>
            </p>
        </div>
    )
}

export default Home;