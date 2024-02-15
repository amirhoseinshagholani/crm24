
import { useEffect, useState } from "react";
import { httpService } from "../../services/http-service";

const useFetchSimcard = () => {
    const sessionName = localStorage.getItem('sessionName');
    const userId = localStorage.getItem('userId');
    const [simcards, setSimcards] = useState([]);

    const fetchSimcard = async () => {
        const response = await httpService.get('/webservice.php?operation=query&sessionName=' + sessionName + '&query=SELECT * FROM vtcmTerminals where cf_1409=' + userId + ';');

        if (response) {
            // console.log(response.data);
            setSimcards(response.data);
        } else {
            return false;
        }
    }

    useEffect(() => {
        fetchSimcard();
    }, []);

    return simcards;
}

export default useFetchSimcard;