
import { useEffect } from 'react';
import { useState } from 'react';
import { httpService } from '@services/http-service';
import { md5 } from '@services/md5';

const useSessionName = () => {
    const [accessKey, setAccessKey] = useState();
    const [sessionName, setSessionName] = useState();

    const getToken = async () => {
        await httpService.post('/webservice.php?operation=getchallenge&username=birashk@outlook.com')
        .then(response=>{
            const str = response.data.result.token + "SilbiFn0g0jZs5Ln";
            const key = md5(str);
            setAccessKey(key);
        })
    }

    const getSessionName = async () => {  
        await httpService.post('/webservice.php',new URLSearchParams({
            'operation': 'login',
            'username': 'birashk@outlook.com',
            'accessKey': accessKey
        }),{
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
            } 
        }).then(response=>{
            response.data.success && setSessionName(response.data.result.sessionName)
        });
    }

    useEffect(() => {
        getToken();
    }, []);

    useEffect(() => {
        getSessionName(); 
    }, [accessKey]);
    console.log(sessionName);
    localStorage.setItem('sessionName',sessionName);
    return sessionName;
}

export default useSessionName;