import styled from "styled-components";

export const ShadowToElement = styled.div`
  box-shadow: 0px 0px 20px ${(props) => props.theme.shadowColor};
`;
