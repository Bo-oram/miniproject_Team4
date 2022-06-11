import axios from "axios";
import React, { useEffect, useState } from "react";
import styled from "styled-components"

const Register = () => {

  const email = React.useRef();
  const password = React.useRef();
  const password_confirm = React.useRef();
  const name = React.useRef();


    //회원가입 post 요청 (Axios)
    const registerUser = () => {
        
        //1. 사용자가 입력한 값 DB에 POST 요청
        const currentUser = {
        "email": email.current.value,
        "password": password.current.value,
        "username": name.current.value
        }
        
        console.log(currentUser)
        axios.post("http://localhost:5001/users", {...currentUser}).then(respose => {console.log(respose)})

        //2. 해당 데이터 리덕스에 저장
    }

    return (
        <Containter>  
        <h1>회원가입 페이지</h1>
        <input placeholder="email" ref={email}/> <br/>
        <input placeholder="password" type="password" ref={password}/> <br/>
        <input placeholder="password confirm" type="password"/> <br/>
        <input placeholder="이름" ref={name}/> <br/>
        <button onClick={registerUser} type="submit">회원가입</button>
        </Containter>
    )
}

const Containter = styled.div`
width: 80vw;
margin: auto;
display: block;
`



export default Register;