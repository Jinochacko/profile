import { useState } from "react";
import { Arrow } from "../../components/common/arrow";
import { Sidebar } from "../../components/sidebar/sidebar";
import { data } from "../../constants/data";
import { Education } from "../education/education";
import { Experience } from "../experience/experience";
import { Projects } from "../projects/projects";
import { Skills } from "../skills/skills";
import {
  MainContentContainer,
  MainContentWrapper,
  PageContainerStyled,
} from "./pageStyledComponents";

/**
 *
 * Container for main pages
 * @returns Compoenent
 */
export const PageContainer = () => {
  const [activeMenu, setActiveMenu] = useState("Experience");

  return (
    <PageContainerStyled className="full-size" id="page-container" role="pages">
      <Sidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      <MainContentContainer>
        <MainContentWrapper>
          {data.menuItems[0] === activeMenu && <Experience />}
          {data.menuItems[1] === activeMenu && <Skills />}
          {data.menuItems[2] === activeMenu && <Projects />}
          {data.menuItems[3] === activeMenu && <Education />}
        </MainContentWrapper>
      </MainContentContainer>
      <Arrow id="home-container" className="up" />
    </PageContainerStyled>
  );
};
