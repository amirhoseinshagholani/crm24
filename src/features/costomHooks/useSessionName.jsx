
import { useEffect } from 'react';
import { useState } from 'react';
import { httpService } from '@services/http-service';
import { md5 } from '@services/md5';

const useSessionName = () => {
    // const [accessKey, setAccessKey] = useState();//
    const [sinaToket, setSinaToken] = useState();
    const [crmToken, setCrmToken] = useState();
    const [sessionName, setSessionName] = useState();

    const getSinaToken = async () => {
        await httpService.post('/api/Authentication/LoginAsync', {
            username: "NetXpert",
            password: "@NetXpert#26200!551@"
        },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            }
        )
            .then(response => {
                console.log(response.data);
                localStorage.setItem('sinaToken', response.data);
                setSinaToken(response.data);
                // const str = response.data.result.token + "SilbiFn0g0jZs5Ln";//
                // const key = md5(str);//
                // setAccessKey(key);//
            })
    }

    const getCrmToken = async () => {
        await httpService.post('/API/NetExpert/GetCRMToken',{}, {
            headers: {
                Authorization: sinaToket
            }
        }).then((response) => {
            // console.log(response.data.result.token);
            setCrmToken(response.data.result.token);
            // localStorage.setItem('crmToken',response.data)
        })
    }

    const getSessionName = async () => {
        await httpService.post('/API/NetExpert/GetCRMSessionName', {token:crmToken}, {
            headers: {
                'Content-Type': 'application/json',
                Authorization: sinaToket

            }
        }).then(response => {
            // setSessionName(response.data.result.sessionName);
            response.data.success && setSessionName(response.data.result.sessionName)
        });
    }

    useEffect(() => {
        getSinaToken();
    }, []);

    useEffect(()=>{
        getCrmToken();
    },[sinaToket])

    useEffect(() => {
        getSessionName();
    }, [crmToken]);

    console.log(sessionName);
    localStorage.setItem('sessionName', sessionName);
    return sessionName;
}

export default useSessionName;