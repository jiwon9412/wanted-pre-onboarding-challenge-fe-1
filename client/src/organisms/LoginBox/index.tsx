import React, { useState } from "react";
import styled, { css } from "styled-components";
import { Link } from "react-router-dom";

export default function LoginBox() {
  const [focusId, setFocusId] = useState(false);
  const [focusPw, setFocusPw] = useState(false);

  const handleFocus = (e: any) => {
    if (e.target.name === "id") {
      setFocusId(true);
    } else {
      setFocusPw(true);
    }
  };

  const handleBlur = (e: any) => {
    if (e.target.name === "id") {
      setFocusId(false);
    } else {
      setFocusPw(false);
    }
  };

  return (
    <LoginBoxWrap focusId={focusId} focusPw={focusPw}>
      <div className='inputWrap'>
        <span className='idLabel'>이메일</span>
        <LoginBoxInput name='id' onFocus={handleFocus} onBlur={handleBlur} />
      </div>
      <div className='inputWrap'>
        <span className='pwLabel'>비밀번호</span>
        <LoginBoxInput
          name='pw'
          onFocus={handleFocus}
          onBlur={handleBlur}
          type='password'
        />
      </div>
      <div className='checkWrap'>
        <input type='checkbox' className='saveIdCheck'></input>
        <span className='saveId'>아이디 저장</span>
      </div>
      <div className='btnLogin'>
        <a>로그인</a>
      </div>
      <div className='join'>
        <Link to='/join' className='joinLink'>
          회원가입
        </Link>
      </div>
    </LoginBoxWrap>
  );
}

const LoginBoxWrap = styled.div<{ focusId: boolean; focusPw: boolean }>`
  display: flex;
  flex-direction: column;
  align-items: center;

  max-width: 320px;
  height: 200px;
  border: 2px solid #dddedf;
  border-radius: 10px;
  padding: 40px 10px;

  .inputWrap {
    position: relative;

    .idLabel {
      position: absolute;
      top: -7px;
      left: 15px;
      border: 2px solid #fff;
      font-size: 10px;
      font-weight: 1000;
      color: #bcbdbf;
      background-color: #fff;

      ${(props) =>
        props.focusId &&
        css`
          position: absolute;
          top: -7px;
          left: 15px;
          border: 2px solid #fff;
          font-size: 10px;
          font-weight: 1000;
          color: #60abff;
          background-color: #fff;
        `}
    }

    .pwLabel {
      position: absolute;
      top: -7px;
      left: 15px;
      border: 2px solid #fff;
      font-size: 10px;
      font-weight: 1000;
      color: #bcbdbf;
      background-color: #fff;

      ${(props) =>
        props.focusPw &&
        css`
          position: absolute;
          top: -7px;
          left: 15px;
          border: 2px solid #fff;
          font-size: 10px;
          font-weight: 1000;
          color: #60abff;
          background-color: #fff;
        `}
    }
  }

  .btnLogin {
    width: 240px;

    border-radius: 6px;
    padding: 8px 0;
    text-align: center;
    vertical-align: middle;
    color: #fff;
    font-size: 15px;
    font-weight: bold;
    background-color: #60abff;
    cursor: pointer;
    margin-bottom: 10px;

    a {
      display: block;
    }
  }

  .checkWrap {
    display: flex;
    width: 240px;
    height: 20px;
    margin-top: -10px;
    margin-bottom: 20px;

    .saveId {
      font-size: 12px;
      font-weight: 600;
      color: #959697;
      margin-left: 5px;
    }
  }

  .join {
    position: relative;
    width: 240px;

    a {
      position: absolute;
      right: 2px;
      font-size: 12px;
      font-weight: 600;
      color: #959697;
      cursor: pointer;
      text-decoration: none;
    }
  }
`;

const LoginBoxInput = styled.input`
  width: 230px;
  height: 30px;
  border: 2px solid #bcbdbf;
  border-radius: 6px;
  margin-bottom: 20px;

  &:focus {
    outline: none;
    border: 2px solid #60abff;
  }

  &:keyup {
    background-color: #fff;
  }
`;
