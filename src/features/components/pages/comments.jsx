import { Width } from "devextreme-react/cjs/chart";
import { gregorian_to_jalali } from "../../../services/gregorian-to-jalali";
import useFetchComments from "../../costomHooks/useFetchComments";

const Comments = () => {

    const convertDate = (currentDate) => {
        var date_temp = currentDate;
        var date_converted = date_temp.split(" ");
        var date_request_temp = date_converted[0].split("-");
        var reg_date = gregorian_to_jalali(parseInt(date_request_temp[0]), parseInt(date_request_temp[1]), parseInt(date_request_temp[2]));
        var strDate = reg_date[0] + "-" + reg_date[1] + "-" + reg_date[2];
        return strDate;
    }

    const url = new URL(window.location.href);
    const ticketId = url.searchParams.get('ticket');
    // const userId = url.searchParams.get('usr');
    // const currentUserId = localStorage.getItem('userId');

    const comments = useFetchComments(ticketId);
    console.log(comments.result);

    return (
        <>
            <div className="overflow-auto p-2" style={{ maxHeight: "700px" }} dir="rtl">
                <div>
                    <form>
                        <div className="d-flex gap-2">
                            <label>موضوع:</label>
                            <input className="bg-secondary rounded border-1 text-muted" readOnly value="" type="text" style={{ backgroundColor: "#1f96a5" }} />
                            <label>تاریخ:</label>
                            <input className="bg-secondary rounded border-1 text-muted" readOnly value="" type="text" style={{ backgroundColor: "#1f96a5" }} />
                            <label>اولویت:</label>
                            <input className="bg-secondary rounded border-1 text-muted" readOnly value="" type="text" style={{ backgroundColor: "#1f96a5" }} />
                            <label>وضعیت:</label>
                            <input className="bg-secondary rounded border-1 text-muted" readOnly value="" type="text" style={{ backgroundColor: "#1f96a5" }} />
                        </div>
                        <div className="d-flex gap-4 mt-2">
                            <label>شرح:</label>
                            <textarea className="input-group bg-secondary rounded text-muted" readOnly value="" type="text" />
                        </div>
                    </form>
                </div>
                <div className="mt-0">
                    {
                        comments && comments.result && (
                            comments.result.map((comment, index) => {
                                return (
                                    // <div class="col-md-9 col-sm-9 col-sx-9 col-lg-9 mt-4 rounded" dir="rtl">
                                    <div class="col mt-4 rounded" dir="rtl">
                                        <div key={index} class="col navbar rounded-top fs-lg fw-bold p-1 text-light" style={{ backgroundColor: "#1f96a5" }}><span><span className="fw-normal">پشتیبان</span> || تاریخ ثبت: <span className="fw-normal" dir="rtl">{convertDate(comment.createdtime)}</span></span></div>
                                        <div key={index} class="col mt-0 rounded-bottom fs-lg p-2" style={{ backgroundColor: "#e2cae2" }}>{comment.commentcontent}</div>
                                    </div>
                                )
                            })
                        )
                    }
                </div>
            </div>
        </>
    )
}

export default Comments;