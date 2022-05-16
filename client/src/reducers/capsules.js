export default (capsules = [], action) => {
  switch (action.type) {
    case "DELETE":
      return capsules.filter((capsule) => capsule._id !== action.payload);
    case "UPDATE":
      return capsules.map((capsule) =>
        capsule._id === action.payload._id ? action.payload : capsule
      );
    case "FETCH_ALL":
      return action.payload;
    case "CREATE":
      return [...capsules, action.payload];

    default:
      return capsules;
  }
};
