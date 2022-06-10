import React from "react";

import styled from "styled-components";
import { auth } from "../../firebase/config";
import {
  FacebookAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { addDocument, generateKeywords } from "../../firebase/services";

const fbProvider = new FacebookAuthProvider();
const googleProvider = new GoogleAuthProvider();
const ButtonStyled = styled.button`
  align-items: center;
  background: transparent;
  color: #03e9f4;
  display: flex;
  font-size: 16px;
  justify-content: center;
  margin-bottom: 5px;
  margin-top: 40px;
  letter-spacing: 4px;
  padding: 32px;
  position: relative;
  text-decoration: none;
  text-transform: uppercase;
  overflow: hidden;
  transition: 0.5s;
  width: 100%;

  &&&:hover {
    background: #03e9f4;
    color: #fff;
    border-radius: 5px;
    box-shadow: 0 0 5px #03e9f4, 0 0 25px #03e9f4, 0 0 50px #03e9f4,
      0 0 100px #03e9f4;
  }
  span {
    position: absolute;
    display: block;
  }
  span:nth-child(1) {
    top: 0;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #03e9f4);
    animation: btn-anim1 1s linear infinite;
  }

  @keyframes btn-anim1 {
    0% {
      left: -100%;
    }
    50%,
    100% {
      left: 100%;
    }
  }

  span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #03e9f4);
    animation: btn-anim2 1s linear infinite;
    animation-delay: 0.25s;
  }

  @keyframes btn-anim2 {
    0% {
      top: -100%;
    }
    50%,
    100% {
      top: 100%;
    }
  }

  span:nth-child(3) {
    bottom: 0;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #03e9f4);
    animation: btn-anim3 1s linear infinite;
    animation-delay: 0.5s;
  }

  @keyframes btn-anim3 {
    0% {
      right: -100%;
    }
    50%,
    100% {
      right: 100%;
    }
  }

  span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #03e9f4);
    animation: btn-anim4 1s linear infinite;
    animation-delay: 0.75s;
  }

  @keyframes btn-anim4 {
    0% {
      bottom: -100%;
    }
    50%,
    100% {
      bottom: 100%;
    }
  }
`;
const RowStyled = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 15px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgb(0 0 0 / 60%);
  border-radius: 10px;

  h2 {
    color: #fff;
    text-align: center;
  }
`;

const Login = () => {
  const handleLogin = async (provider) => {
    const { additionalUserInfo, user } = await signInWithPopup(auth, provider);

    if (additionalUserInfo?.isNewUser) {
      addDocument("users", {
        displayName: user.displayName,
        email: user.email,
        photoURL: user.photoURL,
        uid: user.uid,
        providerId: additionalUserInfo.providerId,
        keywords: generateKeywords(user.displayName?.toLowerCase()),
      });
    }
  };

  return (
    <div>
      <RowStyled>
        <h2>Login</h2>
        <ButtonStyled onClick={() => handleLogin(fbProvider)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Facebook
        </ButtonStyled>
        <ButtonStyled onClick={() => handleLogin(googleProvider)}>
          <span></span>
          <span></span>
          <span></span>
          <span></span>
          Google
        </ButtonStyled>
      </RowStyled>
    </div>
  );
};

export default Login;
