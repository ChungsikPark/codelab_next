import styled from "@emotion/styled";

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

const MainPage = () => {
  return (
    <Wrapper>
      <Title>This is a main page.</Title>
      <button>Logout</button>
    </Wrapper>
  );
};

export default MainPage;
