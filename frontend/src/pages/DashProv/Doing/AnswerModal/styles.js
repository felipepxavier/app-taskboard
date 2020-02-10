
import styled from 'styled-components';

export const Container = styled.div`

  >button {
    width: 100%;
    padding: 5px;
   }

   .md-divider {
    background: #ccd2d8;
   }

  i.mt-plus {
    color: white;
    font-size: 30px;
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
    box-shadow: none;
  }

  .css-1pahdxg-control {
    border-color: #cccccc!important;
    box-shadow: none!important;
  }


/**AJUSTES DIALOG */

  #modal-task {
    width: 100%!important;
    max-width: 750px;
    padding: 30px;
    color: #fff;
    background-color: #0d1821;

     input, div, p, i, hr, label{
      color: #ccd2d8;
    }
  }

  .input-text, textarea {
    background: rgba(23, 47, 67, 0.67);
    border: solid 2px #54616b96;
    border-radius: 4px;
    height: 44px;
    padding: 0 15px;
    color: #fff;
    font-weight: bold;
    margin: 0 0 10px;

    &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
  }

  .text-description {
    padding-top: 12px;
    min-height: 90px;
    height: 100%;
    font-size: 14px;
  }

  .content-task {
    display: flex;
    justify-content: center;
  }

  .part-one {
    padding-right: 20px;
    margin-right: 20px;
    border-right: 1px solid #263847;
  }



  .block-file{
    width: 400px;
    padding-top: 20px;

  }

  .d-flex-column{
    display: flex;
    flex-direction: column;
  }

  .block-flex .md-text-field-container{
    width: 250px;
    margin-right: 50px;
  }
`;
