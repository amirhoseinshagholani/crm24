
import { useEffect, useState } from "react";
import { httpService } from "@services/http-service";

const useFetchComments = (ticketId) => {
    const sessionName = localStorage.getItem('sessionName');
    const userId = localStorage.getItem('userId');
    const sinaToken = localStorage.getItem('sinaToken');
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        // const response = await httpService.get('/webservice.php?operation=query&sessionName=' + sessionName + '&query=SELECT * FROM ModComments where related_to=' + ticketId + ';');
        
        const response = await httpService.post('/API/NetExpert/GetCRMQueries', {
            sessionName: sessionName,
            operation: `SELECT * FROM ModComments where related_to=` + `${ticketId};`,
            CrmRequestType: 1
        }, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": sinaToken
            }
        });
        
        if (response) {
            // console.log(response.data);
            setComments(response.data);
        } else {
            return false;
        }
    }

    useEffect(() => {
        fetchComments();
    }, []);

    return comments;
}

export default useFetchComments;