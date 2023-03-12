import styled from "@emotion/styled";
import styles from "../../constants/style.module.scss";

interface PercentageWrapperProp {
  percentage: string;
}

interface PercentageProp {
  width: string;
}

export const ProgressContainer = styled.div`
  background: ${styles.progressThumbDisabled};
  border-radius: 0.3rem;
  height: 0.5rem;
  position: relative;
  width: 100%;
`;

export const PercentageProgressWrapper = styled.div<PercentageWrapperProp>`
  border-radius: 0.3rem;
  height: 100%;
  overflow: hidden;
  position: absolute;
  width: ${(props) => props.percentage};
`;

export const PercentageProgress = styled.div<PercentageProp>`
  background: ${styles.progressThumb};
  height: 100%;
  width: ${(props) => props.width};
`;
