import styled from "styled-components";
import { ShadowToElement } from "../shared/StyledComponents";

export const CountryCard = styled(ShadowToElement)`
  width: clamp(250px, 20% ,300px);
  aspect-ratio: 1/1.25;
  cursor: pointer;
  background: ${(props) => props.theme.secColor};
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 20px;
  padding-bottom: 3rem;
  overflow: hidden;
  & h3 {
    max-height: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
  }
  & div {
    padding: 0 0.8rem;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 4px;
  }
  img {
    width: 100%;
    height: 166px;
    max-height: 166px;
  }
`;
