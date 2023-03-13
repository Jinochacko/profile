import styled from "@emotion/styled";
import styles from "../../constants/style.module.scss";

interface EllipsedTextProps {
  numberOfLines: number;
}

export const EllipsedText = styled.label<EllipsedTextProps>`
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: ${(props) => props.numberOfLines};
  overflow: hidden;
`;

export const Cursor = styled.div`
  width: 25px;
  height: 25px;
  border: 2px solid #a01ebd;
  border-radius: 50%;
  color: #a01ebd;
  display: flex;
  justify-content: center;
  align-items: center;
  font-family: cursive;
  position: absolute;
`;

export const ArrowContainer = styled.div`
  position: absolute;
  bottom: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  @media only screen and (max-width: 960px) {
    bottom: 100%;
    top: 1rem;
  }
`;

export const ArrowWrapper = styled.div`
  animation: arrow-bounce 0.4s infinite alternate ease-out;
`;

export const ArrowElement = styled.div`
  border: 2px solid ${styles.white};
  border-top: 0;
  border-left: 0;
  cursor: pointer;
  height: 1.5rem;
  margin-bottom: 1.25rem;
  transform: rotate(45deg);
  width: 1.5rem;
  &.up {
    margin-bottom: 0;
    transform: rotate(-135deg);
  }
  &.right {
    transform: rotate(-45deg);
    @media (max-width: 768px) {
      margin-left: -0.5rem;
    }
  }
`;
