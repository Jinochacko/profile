import { switchPages } from "../../utils/general";
import { ArrowContainer, ArrowElement, ArrowWrapper } from "./styled";

interface ArrowProps {
  id?: string;
  className?: string;
}

/**
 *
 * Page up and down navigation arrows
 * @param id Page id
 * @param className CSS class names for arrow
 * @returns Compoenent
 */
export const Arrow = ({ id, className }: ArrowProps) => {
  const onArrowClick = () => {
    if (id) switchPages(id);
  };

  return (
    <ArrowContainer data-testid="down-arrow">
      <ArrowWrapper>
        <ArrowElement
          onClick={onArrowClick}
          className={className}
        ></ArrowElement>
      </ArrowWrapper>
    </ArrowContainer>
  );
};
