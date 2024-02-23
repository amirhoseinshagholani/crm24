
const PostTicket = () => {
    return (
        <>
            <div className='card bg-secondary' dir="rtl">
                <div className='card-body mt-2'>
                    <form>
                        <div className="d-flex gap-3">
                            <div className='mb-3'>
                                <label className='form-label mt-2'>عنوان تیکت: </label>
                                <input type="text" className='border border-dark form-control-lg mt-0' />
                            </div>
                            <div className='mb-3'>
                                <label className='form-label mt-2'>اولویت: </label>
                                <select type="text" className='border border-dark bg-light form-control-lg mt-0'>
                                    <option value="کم">کم</option>
                                    <option value="معمولی">معمولی</option>
                                    <option value="بالا">بالا</option>
                                    <option value="اضطراری">اضطراری</option>
                                </select>
                            </div>
                        </div>
                        <div className='mb-3'>
                            <label className='form-label mt-2'>توضیحات: </label>
                            <textarea type="text" className='border border-dark form-control form-control-lg mt-0' />
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