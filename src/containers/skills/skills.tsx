import { Card } from "../../components/card/card";
import { Progress } from "../../components/progress/progress";
import { data } from "../../constants/data";

export const Skills = () => {
  return (
    <>
      {data.skills.map((item, index) => (
        <Card
          index={index}
          imgSrc={item.img}
          title={item.title}
          subTitle={item.experience}
          details={<Progress percentage={item.rating} />}
          key={`skill${index}`}
        />
      ))}
    </>
  );
};
