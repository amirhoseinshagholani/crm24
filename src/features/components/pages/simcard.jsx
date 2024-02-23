import { useEffect, useState } from "react";
import useFetchSimcard from "../../costomHooks/useFetchSimcard";
import sim from '@assets/images/simcard.png';
import simItem from '@assets/images/simItem.png';
import { gregorian_to_jalali } from "../../../services/gregorian-to-jalali";

const Simcard = () => {
    const simcards = useFetchSimcard();
    const [expDate, setExpDate] = useState([]);

    const convertDate = (currentDate) => {
        var date_temp = currentDate;
        var date_request_temp = date_temp.split("-");
        var reg_date = gregorian_to_jalali(parseInt(date_request_temp[0]), parseInt(date_request_temp[1]), parseInt(date_request_temp[2]));
        var strDate = reg_date[0] + "/" + reg_date[1] + "/" + reg_date[2];
        return strDate;
    }


    useEffect(() => {
        console.log(simcards.result);
    }, [simcards])

    return (
        <>
            <div className="container">
                <div>
                    <div className="float-end d-flex mt-4 gap-3">
                        {
                            simcards && simcards.result && (
                                simcards.result.map((simcard) => {
                                    return (
                                        <div className="card product-card h-100 border-0 shadow-sm">
                                            <span className="badge badge-end text-dark fs-sm  mt-2 text-end">
                                                <p className="mt-n1"><strong>سریال:</strong> {simcard.fld_vtcmterminalsf1 || "غیرفعال" }</p>
                                                <p className="mt-n2"><strong>شماره:</strong> {simcard.cf_1385 || "غیرفعال"}</p>
                                                <p className="mt-n2"><strong>انقضا:</strong> {simcard.cf_1475 ? convertDate(simcard.cf_1475) : "غیرفعال"}</p>
                                            </span>
                                            <img src={simItem} width="160" />
                                        </div>
                                    )
                                })
                            )
                        }
                    </div>
                </div>
            </div>
        </>
    )
}

export default Simcard;