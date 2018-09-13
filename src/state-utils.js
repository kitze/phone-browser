export const toggleInArray = (stateKey, id) => state => {
  const newArray = state[stateKey].includes(id)
    ? state[stateKey].filter(f => f !== id)
    : [...state[stateKey], id];
  return { [stateKey]: newArray };
};
