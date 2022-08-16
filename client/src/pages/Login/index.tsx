import React from "react";
import styled from "styled-components";

import LoginBox from "../../organisms/LoginBox";

export default function Login() {
  return (
    <LoginWrap>
      <LoginBox />
    </LoginWrap>
  );
}

const LoginWrap = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 10%;
  width: 100vw;
  height: 100vh;
`;
