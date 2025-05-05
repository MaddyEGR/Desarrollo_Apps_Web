//import store from "../store";

const logger = (store) => (next) => (action) => {
  console.group(action);
  console.log("Action: ", action);
  const result = next(action);
  console.log("New State: ", store.getState());
  console.groupEnd();
  return result;
};

export default logger;