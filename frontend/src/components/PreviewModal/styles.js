import styled from "styled-components";

export const Preview = styled.tr`

  .modal-prev > div {
      max-width: 700px;
      width: 100%;
      background-color: #e1f0fd;
  }

  .notImages {
    border-radius: 4px;
    margin: 10px;
    padding: 10px;
    text-align: center;

    border: solid 2px #c7deec;
    border-style: dashed;
      p {
        font-weight: bold;
        color: #1b2a36;
      }
  }

  .block-images {
    background-color: rgba(133, 175, 191, 0.28);
    border-radius: 4px;
    margin: 10px;
    padding: 10px;

    > div {
      display: flex;
      align-items: flex-end;

      > svg{
        padding-right: 5px;
      }
    }
  }

  .block-images img {
    margin: 10px;
    border-radius: 4px;
    max-width: 100px;
    max-height: 100%;
  }

  h2#modal-preview-title {
    margin: 10px;
    color: #0e1c28;
    font-weight: bold;
  }

  .preview-task:hover {
    background-color: inherit;
  }

  .block-flex {
    display: flex;
  }

  .block-prev-data {
    width: 100%;
  }

  .block-prev-description {
    padding: 10px;
    margin: 10px;
    min-height: 150px;
    width: 100%;
    border-radius: 4px;
    background-color: rgba(133, 175, 191, 0.28);
  }

  .prev-description-icon {
    display: flex;
    align-items: flex-end;
    color: #0e1c28;

    & svg {
      padding-right: 5px;
    }
  }

  .prev-icon {
    display: flex;
    align-items: flex-end;
    border-radius: 4px;
    padding: 10px;
    margin: 10px;
    background-color: rgba(133, 175, 191, 0.28);

    > strong {
      padding-right: 5px;
    }

    & svg {
      padding-right: 5px;
    }
  }



`;
