import styled from "@emotion/styled";
import styles from "../../constants/style.module.scss";

export const PageContainerStyled = styled.div`
  display: flex;
  position: relative;
`;

export const MainContentContainer = styled.div`
  background: ${styles.contentBackground};
  flex: 3;
  padding: 2rem;
  justify-content: center;
  align-items: center;
  @media (max-width: 960px) {
    padding: 2.5rem 0;
  }
`;

export const MainContentWrapper = styled.div`
  max-height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
`;
