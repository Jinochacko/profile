import { ReactJSXElement } from "@emotion/react/types/jsx-namespace";
import {
  Banner,
  BannerImage,
  CardContainer,
  CardDetails,
  CardWrapper,
  DetailsWrapper,
  SubTitle,
  Title,
} from "./cardStyledComponents";

interface CardProps {
  index: number;
  imgSrc: string;
  title: string;
  subTitle?: string;
  details: ReactJSXElement;
  onClick?: (index: number) => void;
}

export const Card = ({
  index,
  title,
  subTitle,
  imgSrc,
  details,
  onClick,
}: CardProps) => {
  return (
    <CardContainer
      onClick={() => {
        onClick?.(index);
      }}
      style={{ cursor: onClick ? "pointer" : "normal" }}
    >
      <CardWrapper>
        <Banner>
          <BannerImage draggable={false} src={imgSrc} />
        </Banner>
        <DetailsWrapper>
          <Title>{title}</Title>
          {subTitle && <SubTitle>{subTitle}</SubTitle>}
          <CardDetails>{details}</CardDetails>
        </DetailsWrapper>
      </CardWrapper>
    </CardContainer>
  );
};
