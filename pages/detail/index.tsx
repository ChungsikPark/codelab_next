import styled from "@emotion/styled";
import { useRouter } from "next/dist/client/router";
import { useAuthState } from "react-firebase-hooks/auth";
import firebase from "../../src/commons/firebase/firebase";

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
  font-size: 20px;
  font-weight: 500;
`;

const ProfileWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px 0;
  font-size: 15px;
  font-weight: 500;
`;

const Image = styled.img`
  width: 100px;
  height: 100px;
`;

const Profile = styled.div`
  padding-top: 20px;
  font-size: 15px;
  font-weight: 500;
`;

const ButtonWrapper = styled.div`
  display: flex;

  button {
    margin: 0 10px;
    padding: 5px;
  }
`;

const DetailPage = () => {
  const router = useRouter();
  const [user] = useAuthState(firebase.auth());

  const logout = async () => {
    await firebase.auth().signOut();
    await router.push("/");
  };

  const moveToWrite = () => {
    router.push("/write");
  };
  return (
    <Wrapper>
      <Title>DETAIL PAGE</Title>
      <ProfileWrapper>
        <Image src={user?.photoURL} alt="photo" />
        <Profile>
          <div>Current User : {user?.displayName}</div>
          <div>Uid : {user?.uid}</div>
          <div>Email : {user?.email}</div>
          <div>Email Verified : {String(user?.emailVerified)}</div>
        </Profile>
      </ProfileWrapper>
      <ButtonWrapper>
        <button onClick={logout}>Log out</button>
        <button onClick={moveToWrite}>Move to Write Page</button>
      </ButtonWrapper>
    </Wrapper>
  );
};

export default DetailPage;
