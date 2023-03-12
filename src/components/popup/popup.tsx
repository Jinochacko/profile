import { useEffect, useState } from "react";
import { Carousal } from "../carousal/carousal";
import {
  Close,
  PopupContainer,
  PopupContentDetails,
  PopupContentTitle,
  PopupMain,
  PopupSidebar,
  PopupSidebarBanner,
  PopupSidebarContent,
  PopupSidebarItem,
  PopupSidebarTitle,
  PopupWrapper,
} from "./popupStyledComponents";

interface PopupProps {
  img?: string;
  sidebarTitle: string;
  sidebarItems?: string[];
  contentTitle?: string;
  content: JSX.Element;
  sliderImages?: string[];
  sliderHeight?: string;
  onClose: (isClose: boolean) => void;
}

export const Popup = ({
  img,
  sidebarTitle,
  sidebarItems,
  contentTitle,
  content,
  sliderImages,
  sliderHeight,
  onClose,
}: PopupProps) => {
  const [isOpened, setIsOpened] = useState(false);
  useEffect(() => {
    setIsOpened(true);
  }, []);

  const close = () => {
    setIsOpened(false);
    setTimeout(() => {
      onClose(false);
    }, 1000);
  };

  return (
    <PopupContainer className={isOpened ? "opened" : ""}>
      <PopupWrapper className={isOpened ? "opened" : ""}>
        <Close onClick={close}>X</Close>
        <PopupSidebar>
          <PopupSidebarBanner>
            <img draggable={false} src={img} alt="Popupsidebar banner" />
          </PopupSidebarBanner>
          <PopupSidebarContent>
            <PopupSidebarTitle>{sidebarTitle}</PopupSidebarTitle>
            {sidebarItems?.length &&
              sidebarItems?.map((item, index) => (
                <PopupSidebarItem key={`sidebaritem${index}`}>
                  {item}
                </PopupSidebarItem>
              ))}
          </PopupSidebarContent>
        </PopupSidebar>
        <PopupMain>
          {contentTitle && (
            <PopupContentTitle>{contentTitle}</PopupContentTitle>
          )}
          <PopupContentDetails>{content}</PopupContentDetails>
          {sliderImages?.length && (
            <Carousal height={sliderHeight} imageList={sliderImages} />
          )}
        </PopupMain>
      </PopupWrapper>
    </PopupContainer>
  );
};
