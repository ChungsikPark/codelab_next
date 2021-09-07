// 파이어베이스 설정을 한 파일을 불러오기
import firebase from "../src/commons/firebase/firebase";
// [react-firebaseui] 파이어베이스 인증 기능에서 소셜 로그인 버튼을 쉽게 생성해주는 라이브러리
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styled from "@emotion/styled";

// [react-firebaseui] 라이브러리 설정 부분
const uiConfig = {
  signInFlow: "popup", // 팝업 방식으로 로그인 설정
  signInSuccessUrl: "/write", // 로그인 후 이동할 페이지 설정
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ], // 로그인에 이용하고자 하는 소셜 로그인 제공업체 설정
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background: linear-gradient(
    180deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

const Title = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const Footer = styled.div`
  font-size: 20px;
  font-weight: 500;
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <Title>This is a login page</Title>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <Footer>
        &copy; {new Date().getFullYear()} Chungsik Firebase Practice
      </Footer>
    </Wrapper>
  );
};

export default LoginPage;
