import styled from 'styled-components';

export const Container = styled.div`
  background: #172f43;
  padding: 0 30px;
`;

export const Content = styled.div`



  height: 75px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  nav {
    display: flex;
    align-items: center;

    img {
      max-height: 20px;
      margin-right: 20px;
      padding-right: 20px;
      border-right: 1px solid #fff;
    }

    .active {
      color: #efc758;
    }

    a {
      text-transform: uppercase;
      font-weight: bold;
      color: #fff;

      & + a {
        padding-left: 20px;
      }
    }
  }

  aside {
    display: flex;
    align-items: center;
  }
`;

export const Profile = styled.div`
  display: flex;
  align-items: center;
  margin-left: 20px;
  padding-left: 20px;
  border-left: 1px solid #fff;

  div {
    text-align: right;
    margin-right: 10px;

    strong {
      display: block;
      color: #fff;
    }

    a {
      display: block;
      margin-top: 2px;
      font-size: 12px;
      color: #a4abb1;
    }
  }

  img {
    width: 45px;
    height: 45px;
    border-radius: 50%;
  }
`;
