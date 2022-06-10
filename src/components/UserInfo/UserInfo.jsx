import React, { useContext } from "react";
import styled from "styled-components";

import { auth } from "../../firebase/config";
import { AuthContext } from "../../Context/AuthProvider";

const WrapperStyled = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
  padding: 12px 16px;

  .info-user {
    align-items: center;
    display: flex;
    justify-content: center;
  }

  .img-user {
    border-radius: 100%;
    width: 32px;
  }

  .username {
    color: white;
    font-size: 16px;
    margin: 0 5px;
  }
`;

const UserInfo = () => {
  const {
    user: { displayName, photoURL },
  } = useContext(AuthContext);

  return (
    <WrapperStyled>
      <div className="info-user">
        <img className="img-user" src={photoURL} alt="hihi"></img>
        <p className="username">{displayName}</p>
      </div>
      <button
        type="button"
        className="btn btn-outline-warning"
        onClick={() => {
          auth.signOut();
        }}
      >
        Đăng xuất
      </button>
    </WrapperStyled>
  );
};

export default UserInfo;
