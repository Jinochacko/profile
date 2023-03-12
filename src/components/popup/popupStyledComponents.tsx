import styled from "@emotion/styled";
import styles from "../../constants/style.module.scss";

export const PopupContainer = styled.div`
  align-items: center;
  display: flex;
  height: 100%;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  z-index: 1;
  &.opened {
    background: ${styles.popupBgTransparent};
  }
`;

export const PopupWrapper = styled.div`
  background: ${styles.popupBackground};
  display: flex;
  height: 80%;
  position: relative;
  width: 60%;
  transform: scale(0);
  &.opened {
    transform: scale(1);
  }

  -webkit-box-shadow: 0px 0px 71px 0px rgba(0, 0, 0, 0.75);
  -moz-box-shadow: 0px 0px 71px 0px rgba(0, 0, 0, 0.75);
  box-shadow: 0px 0px 71px 0px rgba(0, 0, 0, 0.75);
`;

export const Close = styled.div`
  align-items: center;
  background: ${styles.popupMainBackground};
  color: ${styles.closeIconColor};
  cursor: pointer;
  display: flex;
  font-size: 1.5rem;
  height: 2rem;
  justify-content: center;
  position: absolute;
  right: -2rem;
  top: 0;
  width: 2rem;
`;

export const PopupSidebar = styled.aside`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const PopupMain = styled.section`
  background: ${styles.popupMainBackground};
  display: flex;
  flex-direction: column;
  flex: 2;
  justify-content: center;
  padding: 1rem;
  width: 60%;
`;

export const PopupSidebarBanner = styled.div`
  align-items: center;
  background: ${styles.cardBackground};
  display: flex;
  height: 50%;
  justify-content: center;
  padding: 0 1rem;
  img {
    max-width: 100%;
  }
`;

export const PopupSidebarContent = styled.div``;

const Heading = styled.h3`
  color: ${styles.titleColor};
  margin: 0;
  padding: 1rem;
`;

export const PopupSidebarTitle = styled(Heading)``;

export const PopupSidebarItem = styled.h5`
  background: ${styles.popupSidebarItemBg};
  border-bottom: 0.1rem solid ${styles.popupMainBackground};
  font-weight: 500;
  margin: 0;
  padding: 0.5rem 1rem;
`;

export const PopupContentTitle = styled(Heading)`
  color: ${styles.white};
  padding: 0;
`;

export const PopupContentDetails = styled.section`
  padding: 0 1rem;
`;
