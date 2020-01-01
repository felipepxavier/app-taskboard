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
	  width: 60%;
	  margin: 0 auto;
    display: table;
    padding: 0 0 8em 0;
  }

  .container td, .container th {
	  padding-bottom: 2%;
	  padding-top: 2%;
  }

  .container tr:nth-child(odd) {
	  background-color: #fff;
  }

  .container th {
      background-color: #0e1e2b;
  }

  .container td:first-child {
    border-left: 4px solid #E84B4B;
    padding-left: 3%;
    padding-right: 3%;
    text-align: left;
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
  opacity: .8;
  transition: opacity .2s ease-in-out;

  &:hover {
    opacity: 1;
  }
`;
