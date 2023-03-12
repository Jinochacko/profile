import { useEffect, useRef, useState } from "react";
import {
  ProgressContainer,
  PercentageProgress,
  PercentageProgressWrapper,
} from "./progressStyledComponents";

interface ProgressProps {
  percentage: string;
}

export const Progress = ({ percentage }: ProgressProps) => {
  const [width, setWidth] = useState(0);
  const progressRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    setWidth(progressRef.current?.offsetWidth as number);
  }, []);

  return (
    <div style={{ display: "flex", alignItems: "center" }}>
      <ProgressContainer ref={progressRef}>
        <PercentageProgressWrapper percentage={percentage}>
          <PercentageProgress width={`${width}px`} />
        </PercentageProgressWrapper>
      </ProgressContainer>
      <label style={{ paddingLeft: "0.25rem" }}>{percentage}</label>
    </div>
  );
};
