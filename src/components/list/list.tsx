import { ListContainer } from "./listStyledComponents";

interface ListProps {
  items: string[];
}

export const List = ({ items }: ListProps) => {
  return (
    <ListContainer>
      {items.map((item) => (
        <li>{item}</li>
      ))}
    </ListContainer>
  );
};
