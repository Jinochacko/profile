import { useState } from "react";
import { Card } from "../../components/card/card";
import { EllipsedText } from "../../components/common/styled";
import { Popup } from "../../components/popup/popup";
import { data } from "../../constants/data";
import { Details } from "./projectsStyledComponents";

export const Projects = () => {
  const [show, setShow] = useState(false);
  const [project, setProject] = useState<typeof data.projects[0]>();

  return (
    <>
      {data.projects.map((item, index) => (
        <Card
          index={index}
          onClick={() => {
            setShow(true);
            setProject(item);
          }}
          imgSrc={item.img}
          title={item.title}
          subTitle={item.company}
          details={<EllipsedText numberOfLines={2}>{item.type}</EllipsedText>}
          key={`experience${index}`}
        />
      ))}
      {show && (
        <Popup
          img={project?.img}
          sidebarItems={[project?.type, project?.company] as string[]}
          sidebarTitle={project?.title as string}
          sliderImages={project?.sliderImages}
          contentTitle="Details"
          content={<Details>{project?.description}</Details>}
          onClose={setShow}
        />
      )}
    </>
  );
};
