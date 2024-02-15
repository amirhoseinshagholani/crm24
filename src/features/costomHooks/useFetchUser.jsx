import { useEffect, useState } from "react";
import { httpService } from "../../services/http-service";

const useFetchUser = () => {
    const sessionName = localStorage.getItem('sessionName');
    const userId = localStorage.getItem('userId');
    const [currentUser, setCurrentUser] = useState([]);

    const fetchUser = async () => {
        const response = await httpService.get('/webservice.php?operation=query&sessionName=' + sessionName + '&query=SELECT * FROM Contacts where id=' + userId + ';');

        if (response) {
            setCurrentUser(response.data.result[0]);
        } else {
            return false;
        }
    }

    useEffect(() => {
        fetchUser();
    }, []);

    return currentUser;
}

export default useFetchUser;