import {
  ERROR_FETCHING_TALENTS,
  START_FETCHING_TALENTS,
  SUCCESS_FETCHING_TALENTS,
} from "./constans";

const statusList = {
  idle: "idle",
  process: "process",
  success: "success",
  error: "error",
};

const initialState = {
  data: [],
  status: statusList.idle,
};

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case START_FETCHING_TALENTS:
      return { ...state, status: statusList.process };
    case ERROR_FETCHING_TALENTS:
      return {
        ...state,
        status: statusList.error,
      };
    case SUCCESS_FETCHING_TALENTS:
      return { ...state, status: statusList.success, data: action.talents };
    default:
      return state;
  }
}
