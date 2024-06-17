"use client";
import { Avatar, Button, FormControl, Stack, TextField } from "@mui/material";
import { green } from "@mui/material/colors";
import axios from "axios";
import { setCookie } from "cookies-next";
import { useState } from "react";

export default function Login(props) {
    const API_URL = "/members/login2.do"
    
    const [uvo, setUvo] = useState({
        m_id : "",
        m_pw : ""
    })

    function changeUvo(e) {
        setUvo({
            ...uvo,
            [e.target.name] : e.target.value
        });
    }
    
    function login(props) {
        axios.post(
            API_URL, null, {
                params : {m_id : uvo.m_id , m_pw : uvo.m_pw}
            }
        ).then(
            data => {
                console.log(data)
                if (data.data) {
                    // cookie에 사용자 정보를 저장하자
                    setCookie("u_name", data.data.m_name, {maxAge:60*60});
                    location.href = "/";
                }else{
                    alert("아이디나 패스워드가 틀립니다.")
                    return;
                }
            }
        )
    }

    return(
        <div style={{width: '80%', margin: 'auto', paddingTop: '20px', textAlign: 'center'}}>
            <FormControl>
                <Stack direction="column" spacing={1} alignItems='center'>
                    <Avatar sx={{ bgcolor: green[500], marginBottom:'20px'}}/>
                    <TextField type='text' label='ID' name='m_id' fullWidth  onChange={changeUvo} style={{marginBottom:'20px'}}/>
                    <TextField type='password' label='PW' name='m_pw' fullWidth onChange={changeUvo}/>
                    <Button fullWidth variant='contained' onClick={login}>Sign in</Button>
                </Stack>
            </FormControl>
        </div>
    )
}