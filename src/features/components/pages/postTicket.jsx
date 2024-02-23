import { useForm } from "react-hook-form";
import { useSubmit } from "react-router-dom";

const PostTicket = () => {

    const submitForm = useSubmit();
    const { register, handleSubmit } = useForm();

    const onSubmit = (data) => {
        const { ...ticketData } = data;
        submitForm(ticketData, { method: 'post' });
    }

    return (
        <>
            <div className='card bg-secondary' dir="rtl">
                <div className='card-body mt-2'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className="d-flex gap-3">
                            <div className='mb-3'>
                                <label className='form-label mt-2'>عنوان تیکت: </label>
                                <input {...register('ticketTitle',{
                                    required:"عنوان تیکت الزامی است"
                                })} type="text" className='border border-dark form-control-lg mt-0' />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label mt-2'>اولویت: </label>
                                <select {...register('ticketpriorities')} type="text" className='border border-dark bg-light form-control-lg mt-0'>
                                    <option value="کم">کم</option>
                                    <option value="معمولی">معمولی</option>
                                    <option value="بالا">بالا</option>
                                    <option value="اضطراری">اضطراری</option>
                                </select>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label mt-2'>توضیحات: </label>
                            <textarea {...register('ticketDescription',{
                                required:"شرح تیکت الزامی است"
                            })} type="text" className='border border-dark form-control form-control-lg mt-0' />
                        </div>
                        <div className='text-center mt-3'>
                            <button type='submit' className='btn btn-lg btn-info'>
                                ثبت تیکت
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    )
}

export default PostTicket;

export async function ticketPostAction({ request }) {
    const sessionName = localStorage.getItem('sessionName');
    const sinaToken = localStorage.getItem('sinaToken');
    const formData = await request.formData();
    const ticketData = Object.fromEntries(formData);
// console.log(ticketData.ticketTitle);
// console.log(ticketData.ticketpriorities);
// console.log(ticketData.ticketDescription);
    // try {
    //     const response = await httpService.post('/API/NetExpert/RegisterCrmTicket', {
    //         sessionName: sessionName,
    //         operation: `create`,
            
    //     },{
    //         headers:{
    //             "Content-Type":"application/json",
    //             "Authorization":sinaToken
    //         }
    //     });
        
    //     if (response.data.result[0].cf_1123 == inputData.mellicode) {
    //         localStorage.setItem('loginState', true);
    //         localStorage.setItem('userId', response.data.result[0].id);
    //         return [response.data.result[0], response.status == 200];
    //     }
    // } catch (err) {
    //     alert("مخاطب مورد نظر موجود نیست");
    //     return false;
    // }
    
}