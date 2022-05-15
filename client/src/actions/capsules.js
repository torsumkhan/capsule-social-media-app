import * as api from "../api";

//action creators: action creators are functions that return actions
//action is a type and a payload
//since it is an asynv function, we use async and instead of returning it, we use dispatch

export const getCapsules = () => async (dispatch) => {
  try {
    const { data } = await api.fetchPosts();
    dispatch({ type: "FETCH_ALL", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const createCapsule = (capsule) => async (dispatch) => {
  try {
    const { data } = await api.createCapsule(capsule);
    dispatch({ type: "CREATE", payload: data });
  } catch (error) {
    console.log(error);
  }
};
