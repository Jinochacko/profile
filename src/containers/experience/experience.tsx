import { useState } from "react";
import { Card } from "../../components/card/card";
import { EllipsedText } from "../../components/common/styled";
import { List } from "../../components/list/list";
import { Popup } from "../../components/popup/popup";
import { data } from "../../constants/data";

export const Experience = () => {
  const [show, setShow] = useState(false);
  const [experienceItem, setExperienceItem] =
    useState<typeof data.experience[0]>();
  const onCardClick = (index: number) => {
    setExperienceItem(data.experience.at(index));
    setShow(true);
  };

  return (
    <>
      {data.experience.map((item, index) => (
        <Card
          index={index}
          onClick={onCardClick}
          imgSrc={item.img}
          title={item.company}
          subTitle={item.role}
          details={<EllipsedText numberOfLines={2}>{item.skills}</EllipsedText>}
          key={`experience${index}`}
        />
      ))}
      {show && (
        <Popup
          img={experienceItem?.img}
          sidebarItems={
            [
              experienceItem?.role,
              experienceItem?.location,
              experienceItem?.period,
            ] as string[]
          }
          sidebarTitle={experienceItem?.company as string}
          sliderImages={experienceItem?.sliderImages}
          contentTitle="Roles and responsibilities"
          content={
            <List
              items={experienceItem?.rolesAndResponsibilities as string[]}
            />
          }
          onClose={setShow}
        />
      )}
    </>
  );
};
