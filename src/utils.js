export const colors = {
  primary: 'red',
};

export const setupBorder = ({ width, type = 'solid', color }) => {
  return `${width}px ${type} ${color}`;
};
