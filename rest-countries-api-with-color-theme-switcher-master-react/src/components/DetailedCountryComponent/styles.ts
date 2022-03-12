import styled from "styled-components";
import Container from "@/components/shared/StyledComponents/Container";

export const DetailedCountryContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 3rem;
  margin-top: 4rem;
  margin-bottom: 4rem;
  img {
    width: clamp(343px, 50%, 640px);
    aspect-ratio: 1.5/1;
  }
  div {
    display: flex;
    gap: 2rem;
    flex-direction: column;
    & .infoList {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      width: 100%;
      gap: 2rem;
      label {
        font-weight: 600;
      }
      ul {
        list-style: none;
        li {
          margin-bottom: 1rem;
        }
      }
      div {
        display: flex;
        flex-direction: row;
        gap: 1rem;
        flex-wrap:wrap ;
        max-width:400px ;
      }
    }
  }
`;

export const SingleDetailedCountryContainer = styled(Container)`
  a,
  button {
    box-shadow: 0px 0px 20px ${(props) => props.theme.shadowColor};
    padding: 0.45rem 2rem;
    background-color: ${(props) => props.theme.primeColor};
    display: flex;
    gap: 1rem;
    justify-content: center;
    align-items: center;
    text-decoration:none ;
    cursor: pointer;
  }
`;
