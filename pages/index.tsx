import firebase from "../src/commons/firebase/firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";
import styled from "@emotion/styled";

const uiConfig = {
  signInFlow: "popup",
  signInSuccessUrl: "/write",
  signInOptions: [
    firebase.auth.GoogleAuthProvider.PROVIDER_ID,
    firebase.auth.FacebookAuthProvider.PROVIDER_ID,
    firebase.auth.GithubAuthProvider.PROVIDER_ID,
  ],
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 0 20px;
  background: linear-gradient(
    180deg,
    rgba(238, 174, 202, 1) 0%,
    rgba(148, 187, 233, 1) 100%
  );
`;

const Title = styled.div`
  padding-bottom: 20px;
  font-size: 20px;
  font-weight: 500;
`;

const Footer = styled.div`
  padding-top: 20px;
  font-size: 15px;
  font-weight: 500;
`;

const LoginPage = () => {
  return (
    <Wrapper>
      <Title>LOGIN PAGE</Title>
      <StyledFirebaseAuth uiConfig={uiConfig} firebaseAuth={firebase.auth()} />
      <Footer>
        &copy; {new Date().getFullYear()} Chungsik Firebase Practice
      </Footer>
    </Wrapper>
  );
};

export default LoginPage;
