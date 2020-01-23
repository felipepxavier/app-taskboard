import styled from "styled-components";

export const Preview = styled.tr`

  .preview-task:hover {
    background-color: inherit;
  }

  .prev-description-icon {
    display: flex;
    align-items: flex-end;
    color: #0e1c28;

    & svg {
      padding-right: 5px;
    }
  }

  .prev-date {
    display: flex;
    align-items: flex-end;

    > strong {
      padding-right: 5px;
    }

    & svg {
      padding-right: 5px;
    }
  }



`;
