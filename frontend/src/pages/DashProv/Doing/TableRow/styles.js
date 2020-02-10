import styled from "styled-components";

export const Task = styled.tr`
  transition: background .1s ease-in-out;
  background: #ffffff;

  td {
    padding-top: 2px!important;
    padding-bottom: 2px!important;
  }

  .btn-commit {
    color: #fff;
    background-color: #6ce6e6;
    cursor: pointer;
  }

  &:hover {
    background: #E4E4E4;
  }

  &:hover td:first-child{
    border-left: 7px solid #e84b4b;
  }

  `
