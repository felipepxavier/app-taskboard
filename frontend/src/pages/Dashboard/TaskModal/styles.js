
import styled from 'styled-components';

export const Container = styled.div`

  >button {
    width: 60px;
    height: 60px;
    padding: 5px;
   }

  i.mt-plus {
    color: white;
    font-size: 50px;
  }

  ul#select-field-task-menu-options {
    width: 100%;
}

  .selectFieldTask {
    padding-top: 10px;
    width: 100%;
  }

  .barTask {
    background-color: #172f43;
  }

  .css-1pahdxg-control {
    border-color: #cccccc!important;
    box-shadow: none!important;
  }

  .selPriority {
    border: solid 2px #e84b4b;
    box-shadow: none;
    border-radius: 4px;
  }

  .selPriority .css-yk16xz-control, .selPriority .css-1pahdxg-control {
    border-color:transparent!important;
  }


/**AJUSTES DIALOG */

  #modal-task {
    width: 100%!important;
    max-width: 750px;
    padding: 30px;
    background-color: #fff;
  }

  .content-task {
    display: flex;
    justify-content: center;
  }

  .part-one {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid #ccc;

    /* align-items: flex-start; */
  }

  #selectPri {
    margin-top: 50px;
    width: 200px;
    max-height: 100%;
    margin-bottom: 50px;
  }

  .block-file{
    width: 400px;
    padding-top:50px;
  }

  .d-flex-column{
    display: flex;
    flex-direction: column;
    /* justify-content: center;
    align-items: center; */
  }

  .block-flex .md-text-field-container{
    width: 250px;
    margin-right: 50px;
  }

  /* .md-picker-container.content-date {
    padding: 30px;
  } */
`;

export const Content = styled.div`

  width: 100%;
  /* max-width: 200px; */
  background: #efefef;
  border-radius: 4px;
  padding: 20px;

`;
