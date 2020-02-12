import styled from 'styled-components';

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

  .btn-sort {
    border: none;
    color: white;
  }

  th h1 {
	  font-weight: bold;
	  font-size: 1.2em;
    text-align: center;
    color: #fff;
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



`;
