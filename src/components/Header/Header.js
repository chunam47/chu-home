import React from "react";

import styled from "styled-components";
import UserInfo from "../UserInfo";

const HeaderStyled = styled.div`
  background: #d58080;
  height: 200px;
  width: 100%;

  .header__out {
    display: flex;
    justify-content: end;
    margin: 0 auto;
    max-width: 1302px;
  }

  .header_sigOut {
    margin-top: 30px;
  }
`;

const Header = () => {
  return (
    <HeaderStyled>
      <div className="header__out">
        <UserInfo />
      </div>
    </HeaderStyled>
  );
};

export default Header;
