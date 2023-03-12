import { Dispatch, SetStateAction } from "react";
import { data } from "../../constants/data";
import { MenuItem, MenuWrapper } from "./sidebarStyledComponnets";

interface MenuProps {
  activeMenu: string;
  setActiveMenu: Dispatch<SetStateAction<string>>;
}

/**
 *
 * Component to render the sidebar menu
 * @returns Menu component
 */
export const Menu = ({ activeMenu, setActiveMenu }: MenuProps) => {
  const items = data.menuItems;

  return (
    <MenuWrapper>
      {items.length &&
        items.map((item, index) => (
          <MenuItem
            className={activeMenu === item ? "active-menu" : ""}
            onClick={() => setActiveMenu(item)}
            key={`menu${index}`}
          >
            {item}
          </MenuItem>
        ))}
    </MenuWrapper>
  );
};
