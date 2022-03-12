import styled from "styled-components";
import { filterContainer } from "./type";

export const SearchInput = styled.label`
  display: block;
  background-color: ${(props) => props.theme.secColor};
  width: clamp(300px, 100%, 350px);
  border-radius: 5px;
  padding: 0.5rem 2rem;
  box-shadow: 0px 0px 20px ${(props) => props.theme.shadowColor};

  form {
    display: flex;
    align-items: center;
    gap: 1rem;
  }

  input[type="search"] {
    width: 80%;
    color: ${(props) => props.theme.placeHolderColor};
    padding: 0.5rem 0;
    font-weight: 600;
    background-color: transparent;
    ::placeholder {
      color: ${(props) => props.theme.placeHolderColor};

      opacity: 1;
    }

    :-ms-input-placeholder {
      color: ${(props) => props.theme.placeHolderColor};
    }

    ::-ms-input-placeholder {
      color: ${(props) => props.theme.placeHolderColor};
    }
  }

  svg {
    color: ${(props) => props.theme.placeHolderColor};
    * {
      color: ${(props) => props.theme.placeHolderColor};
    }
  }
`;

export const FilterContainer = styled.div<filterContainer>`
  position: relative;
  width: clamp(200px, 60%, 250px);
  box-shadow: 0px 0px 20px ${(props) => props.theme.shadowColor};
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${(props) => props.theme.secColor};
  cursor: pointer;
  border-radius: 5px;
  padding: 1rem;
  ul {
    position: absolute;
    top: -300%;
    left: 0;
    width: 100%;
    list-style: none;
    display: flex;
    flex-direction: column;
    border-radius: 5px;
    opacity: 0;
    visibility: hidden;
    background-color: ${(props) => props.theme.secColor};
    transition: all ease-out 150ms;
    pointer-events: none;
    li {
      padding: 0.5rem 1rem;
      &:hover {
        background-color: #95959529;
      }
    }
  }
  svg {
    color: ${(props) => props.theme.placeHolderColor};
    transform: rotate(-180deg);
    transition: transform ease-out 150ms;
    * {
      color: ${(props) => props.theme.placeHolderColor};
    }
  }
  ${(props) =>
    props.opened === true &&
    `
    ul {
      visibility: visible;
      opacity: 1;
      top: 120%;
      pointer-events: all;
      transition: all ease-in 250ms;
    }
    svg {
      transform: rotate(0deg);
      transition: transform ease-in 250ms;
    }
  `}
`;

export const OptionContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 95%;
  flex-wrap: wrap;
  row-gap: 2rem;
`;

export const CountriesCardsContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 5%;
  row-gap: 3.5rem;
  width: 95%;
`;
