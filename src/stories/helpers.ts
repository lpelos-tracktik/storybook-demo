/**
 * Workaround to get the canvas element due to a known bug.
 * @see https://github.com/storybookjs/storybook/issues/18663
 */
export const getCanvasElement = async (id = "#root") => {
  const canvasElement = document.querySelector(id) as HTMLElement;
  await new Promise((resolve) => setTimeout(resolve, 0));
  return canvasElement;
};

export const sleep = (time: number) =>
  new Promise((resolve) => setTimeout(resolve, time));
