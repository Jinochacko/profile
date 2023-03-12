/**
 *
 * Function to register a custom cursor
 */
export const registerCustomCursor = () => {
  const cursorRounded = document.getElementById("custom-cursor") as HTMLElement;
  const moveCursor = (e: MouseEvent) => {
    const mouseY = e.clientY - 12.5;
    const mouseX = e.clientX + 2;

    cursorRounded.style.transform = `translate3d(${mouseX}px, ${mouseY}px, 0)`;
  };

  window.addEventListener("mousemove", moveCursor);
};

/**
 *
 * Funtion to switch between the pages with smooth animation
 * @param id Page id
 */
export const switchPages = (id: string) => {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
};

/**
 * Function to calculate the number of years between 2 given dates
 * @param dateFrom Start date
 * @param dateTo Latest date
 * @returns Year difference in number
 */
export const dateDiffInYears = (dateFrom: Date, dateTo: Date): number => {
  let diff = (dateTo.getTime() - dateFrom.getTime()) / 1000;
  diff /= 60 * 60 * 24;

  return Math.abs(Math.floor(diff / 365.25));
};
