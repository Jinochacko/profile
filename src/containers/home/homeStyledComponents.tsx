import styled from "@emotion/styled";
import profileImage from "../../assets/images/profile-pic-full.jpg";
import styles from "../../constants/style.module.scss";

export const HomeContainer = styled.div`
  display: flex;
  position: relative;
`;

export const HomeProfileImage = styled.div`
  background-image: ${styles.gradient}, url("${profileImage}");
  background-size: cover;
  height: 100%;
  width: 40%;
`;

export const HomeContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 3rem;
  text-align: center;
  width: 60%;
`;

export const ContentWrapper = styled.div`
  width: 100%;
`;

export const Name = styled.h1`
  color: ${styles.white};
  font-size: 3rem;
  font-weight: normal;
`;

export const SubTitle = styled.div`
  color: ${styles.titleColor};
  font-size: 2rem;
  margin-bottom: 0.3rem;
`;

export const Experience = styled.div`
  font-style: italic;
  color: ${styles.titleColor};
  font-size: 1.5rem;
`;

export const Description = styled.div`
  color: ${styles.homeDescription};
  font-size: 1.5rem;
  padding: 0 4rem;
`;
