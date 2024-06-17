"use client"
import { Button, FormControl, Stack, TextField } from "@mui/material";
import axios from "axios";
import { useState } from "react"

export default function Join(props) {
    const API_URL = "/members/join.do"
    const[userInfo, setUserInfo] = useState({
        m_id : "",
        m_pw : "",
        m_name : "",
        m_age : ""
    })
    function changeUvo(e) {
        setUserInfo({
            ...userInfo,
            [e.target.name] : e.target.value
        });
    }

    function join(props) {
        axios.post(
            API_URL, null, {
                params : {
                    m_id : userInfo.m_id , 
                    m_pw : userInfo.m_pw,
                    m_name : userInfo.m_name,
                    m_age : userInfo.m_age
                }
            }
        ).then(
            data => {
                console.log(data)
                if (data.data) {
                    location.href = "/";
                }else{
                    alert("빈칸을 채워주세요.")
                    return;
                }
            }
        )
    }

    return(
        <div style={{width: '80%', margin: 'auto', paddingTop: '20px', textAlign: 'center'}}>
            <FormControl>
                <Stack direction="column" spacing={1} alignItems='center'>
                    <TextField type='text' label='ID' name='m_id' fullWidth  onChange={changeUvo}/>
                    <TextField type='password' label='PW' name='m_pw' fullWidth onChange={changeUvo}/>
                    <TextField type='text' label='이름' name='m_name' fullWidth onChange={changeUvo}/>
                    <TextField type='text' label='나이' name='m_age' fullWidth onChange={changeUvo}/>
                    <Button fullWidth variant='contained' onClick={join}>회원가입</Button>
                </Stack>
            </FormControl>
        </div>
    )
}