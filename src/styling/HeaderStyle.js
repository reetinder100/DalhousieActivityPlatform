import styled from "styled-components";

export const HeaderContainer = styled.div`
  position: fixed;
  height: 80px;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  padding: 15px 20px;
  background: rgba(255, 255, 255, 0.1);

  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
  border-bottom: 1px solid rgba(255, 255, 255, 0.1);
  width: 100%;
  z-index: 1000;
  box-sizing: border-box;
`;

export const HeaderSpacer = styled.div`
  height: 80px;
  width: 100%;
`;
