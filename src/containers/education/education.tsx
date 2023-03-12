import { Card } from "../../components/card/card";
import { EllipsedText } from "../../components/common/styled";
import { data } from "../../constants/data";

export const Education = () => {
  return (
    <>
      {data.education.map((item, index) => (
        <Card
          index={index}
          imgSrc={item.img}
          title={item.title}
          subTitle={item.institute}
          details={<EllipsedText numberOfLines={3}>{item.period}</EllipsedText>}
          key={`skill${index}`}
        />
      ))}
    </>
  );
};
