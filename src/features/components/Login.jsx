import logo from '@assets/images/logo.png'
import axios from 'axios';
import { useEffect } from 'react';
import { useState } from 'react';
import { httpService } from '../../services/http-service';
import { md5 } from '@services/md5';
import useSessionName from '../costomHooks/useSessionName';
import { useForm } from 'react-hook-form';

const Login = () => {

    const sessionName = useSessionName();
    const { register, formState: { errors }, handleSubmit } = useForm();
    const [submitting,setSubmitting] = useState(false);

    const onsubmit = (data) => {
        setSubmitting(true);
        console.log(data);
    }

    return (
        <>
            <div className="container justify-content-center w-100">
                <main className="d-flex p-0">
                    <div className="container d-flex flex-column">
                        <div className="row h-100">
                            <div className="col-sm-10 col-md-8 col-lg-6 mx-auto d-table h-100">
                                <div className="d-table-cell align-middle">
                                    <div className="justify-content-center w-100 p-5">
                                        <div className="container d-flex flex-column mt-5">
                                            <div className='text-center'>
                                                <img src={logo} alt="" width="190" />
                                                <p className='lead mt-4 fs-lg'>
                                                    جهت ورود کدملی و رمزعبور خود را وارد کنید
                                                </p>
                                            </div>
                                            <div className='card bg-secondary'>
                                                <div className='card-body'>

                                                    <form onSubmit={handleSubmit(onsubmit)}>
                                                        <div className='mb-3'>
                                                            <label className='form-label'>کدملی</label>
                                                            <input {...register('mellicode', {
                                                                required: "کد ملی الزامی است",
                                                                maxLength: 10,
                                                                minLength: 10
                                                            })}
                                                            type="text" className={`form-control form-control-lg ${errors.mellicode && 'is-invalid'}`} />
                                                            {
                                                                errors.mellicode && errors.mellicode.type == 'required' && (
                                                                    <p className='fs-sm text-danger mt-1'>
                                                                        {errors.mellicode.message}
                                                                    </p>
                                                                )
                                                            }
                                                            {
                                                                errors.mellicode && errors.mellicode.type == 'maxLength' && (
                                                                    <p className='fs-sm text-danger mt-1'>
                                                                        کد ملی را درست وارد کنید
                                                                    </p>
                                                                )
                                                            }
                                                            {
                                                                errors.mellicode && errors.mellicode.type == 'minLength' && (
                                                                    <p className='fs-sm text-danger mt-1'>
                                                                        کد ملی را درست وارد کنید
                                                                    </p>
                                                                )
                                                            }
                                                        </div>
                                                        <div className='mb-3'>
                                                            <label className='form-label'>رمزعبور</label>
                                                            <input {...register('password', {
                                                                required: "رمزعبور الزامی است"
                                                            })}
                                                            type="text" className={`form-control form-control-lg ${errors.password && 'is-invalid'}`} />
                                                            {
                                                                errors.password && errors.password.type == 'required' && (
                                                                    <p className='fs-sm text-danger mt-1'>
                                                                        رمزعبور الزامی است
                                                                    </p>
                                                                )
                                                            }
                                                        </div>
                                                        <div className='text-center mt-3'>
                                                            <button disabled={submitting} type='submit' className='btn btn-lg btn-info'>
                                                                {
                                                                    submitting ? <div> در حال ورود <div className='spinner-border spinner-border-sm'></div></div> : 'ورود'
                                                                }
                                                            </button>
                                                        </div>
                                                    </form>

                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Login;