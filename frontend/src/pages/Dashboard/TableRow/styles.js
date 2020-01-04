import styled from "styled-components";

export const Task = styled.tr`
  transition: background .1s ease-in-out;
  background: #ffffff;

  td {
    padding-top: 2px!important;
    padding-bottom: 2px!important;
  }

  &:hover {
    background: #E4E4E4;
  }

  &:hover td:first-child{
    border-left: 7px solid #e84b4b;
  }

  &:hover .btn-action{
    background-color: #ffffff;
  }

  .avatar-prov img{
    vertical-align: middle;
  }

  img {
    width: auto;
    max-height: 40px;
    border-radius: 50%;
    padding: 0;
  }
`;
