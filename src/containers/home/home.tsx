import { Arrow } from "../../components/common/arrow";
import { dateDiffInYears } from "../../utils/general";
import {
  ContentWrapper,
  Description,
  Experience,
  HomeContainer,
  HomeContent,
  HomeProfileImage,
  Name,
  SubTitle,
} from "./homeStyledComponents";

/**
 *
 * Container for home page
 * @returns Compoenent
 */
export const Home = () => {
  return (
    <HomeContainer className="full-size" id="home-container" role="home">
      <HomeProfileImage data-testid="home-profile-image" />
      <HomeContent>
        <ContentWrapper>
          <Name data-testid="name">Jino Chacko</Name>
          <SubTitle data-testid="home-subtitle">
            Frontend and Hybrid Mobile App Developer
          </SubTitle>
          <Experience data-testid="home-experience">
            {dateDiffInYears(new Date("09/05/2012"), new Date())}+ Years
          </Experience>
          <Description data-testid="home-description">
            HTML5, CSS3, JavaScript, Typescript, React JS, React Native
          </Description>
        </ContentWrapper>
      </HomeContent>
      <Arrow id="page-container" />
    </HomeContainer>
  );
};
