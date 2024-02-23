
import { useEffect, useState } from "react";
import { httpService } from "@services/http-service";

const useFetchEspesiallyTickets = (ticketId) => {
    const sessionName = localStorage.getItem('sessionName');
    const userId = localStorage.getItem('userId');
    const sinaToken = localStorage.getItem('sinaToken');
    const [spesiallyTicket, setSpesiallyTicket] = useState();

    const fetchSpesiallyTickets = async () => {

        // const response_for_ticketId = await httpService.get('/webservice.php?operation=query&sessionName=' + sessionName + '&query=SELECT * FROM HelpDesk where id=' + ticketId + ';');
        const response_for_ticketId = await httpService.post('/API/NetExpert/GetCRMQueries', {
            sessionName: sessionName,
            operation: `SELECT * FROM HelpDesk where id=` + `${ticketId};`,
            CrmRequestType: 1
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": sinaToken
            }
        });

        if (response_for_ticketId) {
            console.log(response_for_ticketId.data.result[0]);
            setSpesiallyTicket(response_for_ticketId.data.result[0]);
        } else {
            return false;
        }
    }

    useEffect(() => {
        fetchSpesiallyTickets();
    }, []);


    return spesiallyTicket;
}

export default useFetchEspesiallyTickets;