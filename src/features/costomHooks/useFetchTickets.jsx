
import { useEffect, useState } from "react";
import { httpService } from "@services/http-service";

const useFetchTickets = () => {
    const sessionName = localStorage.getItem('sessionName');
    const userId = localStorage.getItem('userId');
    const [tickets, setTickets] = useState([]);

    const fetchTickets = async () => {
        const response = await httpService.get('/webservice.php?operation=query&sessionName=' + sessionName + '&query=SELECT * FROM HelpDesk where contact_id=' + userId + ';');
        if (response) {
            console.log(response.data);
            setTickets(response.data);
        } else {
            return false;
        }
    }

    useEffect(() => {
        fetchTickets();
    }, []);

    return tickets;
}

export default useFetchTickets;