import firebase from "../../src/commons/firebase/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";

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

const Contents = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 20px;
  font-weight: 500;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const TextWrapper = styled.div`
  padding: 0 20px;
  font-size: 20px;
  font-weight: 500;
`;

const WritePage = () => {
  const router = useRouter();
  const [user] = useAuthState(firebase.auth());

  const logout = async () => {
    await firebase.auth().signOut();
    await router.push("/");
  };

  return (
    <>
      <Wrapper>
        <Title>This is a main page.</Title>
        {user && (
          <Contents>
            <Image src={user?.photoURL} alt="photo" />
            <TextWrapper>
              <div>Current User: {user?.displayName}</div>
              <div>Uid: {user?.uid}</div>
              <div>Email: {user?.email}</div>
              <div>Email Verified: {String(user?.emailVerified)}</div>
            </TextWrapper>
          </Contents>
        )}
        <button onClick={logout}>Log out</button>
      </Wrapper>
    </>
  );
};

export default WritePage;
