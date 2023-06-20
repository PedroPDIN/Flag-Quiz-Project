export const ADD_DATA = "ADD_DATA";
export const ADD_RESULT = "ADD_RESULT";

export const addData = (number, flags) => ({
  type: "ADD_DATA",
  number,
  flags,
});

export const addResult = (hits, wrong) => ({
  type: "ADD_RESULT",
  hits,
  wrong,
});
