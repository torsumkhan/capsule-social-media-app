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

export const updateCapsule = (id, capsule) => async (dispatch) => {
  try {
    const { data } = await api.updateCapsule(id, capsule);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};

export const deleteCapsule = (id) => async (dispatch) => {
  try {
    await api.deleteCapsule(id);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error.message);
  }
};

export const likeCapsule = (id) => async (dispatch) => {
  try {
    const { data } = await api.likeCapsule(id);
    dispatch({ type: "UPDATE", payload: data });
  } catch (error) {
    console.log(error.message);
  }
};
