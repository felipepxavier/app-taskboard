import styled from "styled-components";

export const Container = styled.div`
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .container {
	  text-align: center;
	  overflow: hidden;
	  width: 55%;
	  margin: 0 auto;
    display: table;
    padding: 0 0 8em 0;
  }

  .container td, .container th {
	  padding-bottom: 2%;
	  padding-top: 2%;
  }

  .container th {
      background-color: #0e1e2b;
  }

  .container td:first-child {
    border-left: 7px solid #bdbdbd;
    padding-left: 5%;
    padding-right: 5%;
    text-align: left;
  }

  .btn-action{
    width: 50px;
  }

  .btn-action td {
    border: none!important;
  }

  td.baixa{
    background: #DBCC90;
    color: #fff;
  }

  td.media{
    background: #E8A457;
    color: #fff;
  }

  td.alta{
    background: #E84B4B;
    color: #fff;
  }

  @media (max-width: 800px) {
  .container td:nth-child(4),
  .container th:nth-child(4) { display: none; }
  }


  th h1 {
	  font-weight: bold;
	  font-size: 1.2em;
    text-align: center;
    color: #fff;
  }

   img {
     width: 100%;
   }

`;


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
