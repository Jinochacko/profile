import { useRef, useState } from "react";
import { ArrowElement } from "../common/styled";
import {
  Next,
  PopupImageCarousal,
  PopupImageCarousalItem,
  PopupImageCarousalWrapper,
  Prev,
} from "./carousalStyledComponents";

interface CarousalProps {
  imageList: string[];
  height?: string;
}

interface CalculateWidth {
  carousalContainerWidth: number;
  carousalInnerWidth: number;
}

export const Carousal = ({ imageList, height }: CarousalProps) => {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const [translation, setTranslation] = useState(0);

  const calculateWidth = (): CalculateWidth => {
    const children = wrapperRef?.current?.children;
    const childrenLength = children ? children?.length : 0;
    let carousalTotalWidth = 0;
    if (childrenLength) {
      for (let i = 0; i < childrenLength; ++i) {
        const child = children?.[i] as HTMLElement;
        carousalTotalWidth += child?.offsetWidth;
      }
    }

    return {
      carousalContainerWidth: wrapperRef?.current?.offsetWidth as number,
      carousalInnerWidth: carousalTotalWidth,
    };
  };

  const next = () => {
    const { carousalContainerWidth, carousalInnerWidth } = calculateWidth();
    const offset = carousalInnerWidth - carousalContainerWidth + translation;

    if (offset > 0) {
      if (offset <= carousalContainerWidth) {
        setTranslation(-(carousalInnerWidth - carousalContainerWidth));
      } else {
        setTranslation(-(carousalContainerWidth - translation));
      }
    }
  };

  const prev = () => {
    const { carousalContainerWidth } = calculateWidth();
    const offset = carousalContainerWidth + translation;

    if (offset > 0) {
      setTranslation(0);
    } else {
      setTranslation(offset);
    }
  };

  return (
    <PopupImageCarousal height={height}>
      <Prev onClick={prev}>
        <ArrowElement className="right" />
      </Prev>
      <PopupImageCarousalWrapper
        translation={translation}
        ref={wrapperRef}
        height={height}
      >
        {imageList.length &&
          imageList.map((item, index) => (
            <PopupImageCarousalItem key={`carousal${item}${index}`}>
              <img draggable={false} src={item} alt="Carousal item" />
            </PopupImageCarousalItem>
          ))}
      </PopupImageCarousalWrapper>
      <Next onClick={next}>
        <ArrowElement className="right" />
      </Next>
    </PopupImageCarousal>
  );
};
