import React, { useContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { useUserAuthentication } from "../../context/userContext"

function Chat() {
  const navigate = useNavigate();
  const [redirect, setRedirect] = useState(false)
  const [datas, setDatas] = useState("dafault")
  const { isAuthenticatedUser, setIsAuthenticatedUser } = useUserAuthentication();
  const getHome = async () => {
    fetch("http://localhost:3000/").then(response => response.json()).then(data => {
      console.log(data);
      setDatas(data.msg);
    })
  }
  useEffect(() => {
    getHome();
    setTimeout(() => {
      if (!isLoggedIn) {
        setRedirect(true);
        console.log("chat user", currentUser);
      }
    }, 1000);
  }, [isLoggedIn])
  if (redirect && !isLoggedIn) {
    navigate('/');
  }
  const capitalLetter = (text) => { return text.toUpperCase(); }
  const component = isLoggedIn ? <p>Hello! {capitalLetter(currentUser.name)} </p> : <p>Loggin firstly</p>;
  return (
    <div className='text-4xl text-white'>
      {component} {datas}
    </div>
  )
}

export default Chat