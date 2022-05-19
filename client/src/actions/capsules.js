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

export const getCapsule = (id) => async (dispatch) => {
  try {
    const { data } = await api.getDetail(id);
    console.log("This is data", data);
    dispatch({ type: "FETCH_POST", payload: { post: data } });
  } catch (error) {
    console.log(error);
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
  console.log("This is capsule", capsule);
  try {
    const { data } = await api.updateCapsule(id, capsule);
    console.log("This is Data", data);
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
