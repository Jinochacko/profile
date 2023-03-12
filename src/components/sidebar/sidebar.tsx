import {
  Avatar,
  SidebarConatiner,
  SidebarWrapper,
} from "./sidebarStyledComponnets";
import profilePic from "../../assets/images/profile-pic-thumb.jpg";
import { Menu } from "./menu";
import { Dispatch, SetStateAction } from "react";

interface SidebarProps {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
}

/**
 *
 * @param param0
 * @returns
 */
export const Sidebar = ({ activeMenu, setActiveMenu }: SidebarProps) => {
  return (
    <SidebarConatiner>
      <SidebarWrapper>
        <Avatar src={profilePic} />
        <Menu activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
      </SidebarWrapper>
    </SidebarConatiner>
  );
};
