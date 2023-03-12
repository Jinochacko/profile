import styled from "@emotion/styled";
import styles from "../../constants/style.module.scss";

export const CardContainer = styled.article`
  float: left;
  margin-bottom: 1rem;
  padding: 0 1rem;
  width: 33.3%;
`;

export const CardWrapper = styled.div`
  border: 1px solid ${styles.titleColor};
  background: ${styles.cardBackground};
`;

export const Banner = styled.div`
  height: 25vh;
  width: 100%;
  align-items: center;
  display: flex;
  padding: 1rem;
  justify-content: center;
`;

export const BannerImage = styled.img`
  max-width: 100%;
  max-height: 100%;
`;

export const DetailsWrapper = styled.div`
  background: #000;
  display: flex;
  flex-direction: column;
  height: 25vh;
  justify-content: center;
  padding: 1rem;
`;

export const Title = styled.h3`
  color: ${styles.titleColor};
  font-size: 1.5rem;
  margin: 0;
`;

export const SubTitle = styled.h5`
  color: ${styles.subTitleColor};
  margin: 0;
  padding: 0.5rem 0;
`;

export const CardDetails = styled.div`
  color: ${styles.cardDescription};
`;
