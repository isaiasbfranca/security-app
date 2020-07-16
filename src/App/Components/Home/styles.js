import styled from "styled-components";

import home from "../../../assets/home.jpg";

export const Container = styled.div`
  background: transparent;

  width: 100%;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContTest = styled.div`
  background: url(${home}) no-repeat;
  background-size: cover;
  background-attachment: fixed;
  -webkit-font-smoothing: antialiased !important;
  width: 100%;
  margin-top: 50px;
  border-radius: 4px;
  padding: 30px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
