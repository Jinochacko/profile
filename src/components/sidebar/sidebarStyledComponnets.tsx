import styled from "@emotion/styled";
import styles from "../../constants/style.module.scss";

export const SidebarConatiner = styled.div`
  display: flex;
  align-items: center;
  flex: 1;
  @media (max-width: 768px) {
    flex: 2;
  }
  @media (max-width: 480px) {
    flex: 1;
  }
`;

export const SidebarWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Avatar = styled.img`
  align-self: center;
  width: 70%;
  border-radius: 50%;
  filter: grayscale(1);
  &:hover {
    filter: grayscale(0);
  }
`;

export const MenuWrapper = styled.ul`
  list-style-type: none;
  padding-left: 0;
`;

export const MenuItem = styled.li`
  color: ${styles.titleColor};
  cursor: pointer;
  padding: 0.7rem;
  border-radius: 0.7rem 0 0 0.7rem;
  text-align: center;
  &:hover {
    background: ${styles.contentBackground};
  }
  &.active-menu {
    background: ${styles.contentBackground};
  }
`;
