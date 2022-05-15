export default (capsules = [], action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...capsules, action.payload];

    default:
      return capsules;
  }
};
