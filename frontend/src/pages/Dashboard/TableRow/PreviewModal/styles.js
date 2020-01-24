import styled from "styled-components";

export const Preview = styled.tr`

  .modal-prev > div {
      max-width: 700px;
      width: 100%;
      background-color: #e1f0fd;
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
