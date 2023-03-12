import styled from "@emotion/styled";
import styles from "../../constants/style.module.scss";

interface PopupImageCarousalProps {
  height?: string;
  translation?: number;
}

export const PopupImageCarousal = styled.section<PopupImageCarousalProps>`
  background: ${styles.popupSidebarItemBg};
  height: ${(props) => (props.height ? props.height : "8rem")};
  overflow: hidden;
  position: relative;
  width: 100%;
`;

export const PopupImageCarousalWrapper = styled.div<PopupImageCarousalProps>`
  height: ${(props) => (props.height ? props.height : "8rem")};
  transform: translateX(
    ${(props) => (props.translation ? `${props.translation}px` : "0")}
  );
  width: auto;
  white-space: nowrap;
`;

export const PopupImageCarousalItem = styled.div`
  display: inline-block;
  height: 100%;
  padding: 0.5rem;
  img {
    background: ${styles.white};
    height: 100%;
  }
`;

const DirectionCommon = styled.aside`
  align-items: center;
  background-image: ${styles.fullLengthGradient};
  cursor: pointer;
  display: flex;
  height: 100%;
  justify-content: center;
  position: absolute;
  top: 0;
  width: 10%;
  z-index: 1;
  div {
    margin-top: 1.5rem;
  }
`;

export const Next = styled(DirectionCommon)`
  right: 0;
`;

export const Prev = styled(DirectionCommon)`
  left: 0;
  transform: rotate(180deg);
`;
