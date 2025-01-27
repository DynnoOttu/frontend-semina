import debounce from "debounce-promise";
import { getData } from "../../utils/fetch";
import {
  ERROR_FETCHING_TALENTS,
  START_FETCHING_TALENTS,
  SUCCESS_FETCHING_TALENTS,
} from "./constans";

let debouncedFetchTalents = debounce(getData, 1000);

export const startFetchingTalents = () => {
  return {
    type: START_FETCHING_TALENTS,
  };
};

export const successFetchingTalents = ({ talents }) => {
  return {
    type: SUCCESS_FETCHING_TALENTS,
    talents,
  };
};

export const errorFetchingTalents = () => {
  return {
    type: ERROR_FETCHING_TALENTS,
  };
};

export const fetchTalents = () => {
  return async (dispatch) => {
    dispatch(startFetchingTalents());

    try {
      // setTimeout(() => {
      //   dispatch(clearNotif());
      // }, 3000);

      let res = await debouncedFetchTalents("/cms/talents");
      console.log("res reduex talents", res);

      res.data.data.forEach((res) => {
        res.avatar = res.image.name;
      });

      dispatch(
        successFetchingTalents({
          talents: res.data.data,
        })
      );
    } catch (error) {
      dispatch(errorFetchingTalents());
    }
  };
};
