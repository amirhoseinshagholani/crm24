import { useState } from "react";
import useFetchTickets from "../../costomHooks/tickets/useFetchTickets";
import { gregorian_to_jalali } from "../../../services/gregorian-to-jalali";

const Tickets = () => {

    const tickets = useFetchTickets();
    const [createdDate,setCreatedDate] = useState([]);

    const convertDate = (currentDate) => {
        var date_temp = currentDate;
        var date_converted = date_temp.split(" ");
        var date_request_temp = date_converted[0].split("-");
        var reg_date = gregorian_to_jalali(parseInt(date_request_temp[0]), parseInt(date_request_temp[1]), parseInt(date_request_temp[2]));
        var strDate = reg_date[0] + "-" + reg_date[1] + "-" + reg_date[2];
        return strDate;
    }

    return (
        <>
            <div className="overflow-auto p-2" style={{ maxHeight: "700px" }} dir="rtl">
                <div className="mt-0">
                    {
                        tickets && tickets.result && (
                            tickets.result.map((ticket, index) => {
                                return (
                                    <div class="col mt-4 rounded">
                                        <div key={index} class="col navbar rounded-top fs-lg fw-bold p-1 text-dark" style={{ backgroundColor: "#fbb53c" }}><span>موضوع: <span className="fw-normal">{ticket.ticket_title}</span> || تاریخ ثبت: <span className="fw-normal" dir="rtl">{convertDate(ticket.createdtime)}</span></span><div><a href={`/panel/tickets/comments?ticket=${ticket.id}&usr=${ticket.contact_id}`} className="m-1 btn btn-sm btn-dark">نمایش جزئیات</a></div></div>
                                        <div key={index} class="col mt-0 rounded-bottom fs-lg p-2" style={{ backgroundColor: "#81d1f8" }}>{ticket.description}</div>
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

export default Tickets;