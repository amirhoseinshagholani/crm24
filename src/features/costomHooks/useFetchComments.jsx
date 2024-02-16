
import { useEffect, useState } from "react";
import { httpService } from "@services/http-service";

const useFetchComments = (ticketId) => {
    const sessionName = localStorage.getItem('sessionName');
    const userId = localStorage.getItem('userId');
    const [comments, setComments] = useState([]);

    const fetchComments = async () => {
        const response = await httpService.get('/webservice.php?operation=query&sessionName=' + sessionName + '&query=SELECT * FROM ModComments where related_to=' + ticketId + ';');
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