export const fetchData = () => {
  // here is the thunk
  return async (dispatch) => {
    dispatch(fetchDataRequest());

    try {
      const response = await fetch(
        "https://jsonplaceholder.typicode.com/todos"
      );
      const data = await response.json();
      dispatch(fetchDataSuccess(data));
    } catch (error) {
      dispatch(fetchDataFailure(error));
    }
  };
};

export const FETCH_DATA_REQUEST = "FETCH_DATA_REQUEST";
export const fetchDataRequest = () => ({
  type: FETCH_DATA_REQUEST,
});

export const FETCH_DATA_SUCCESS = "FETCH_DATA_SUCCESS";
export const fetchDataSuccess = (data) => ({
  type: FETCH_DATA_SUCCESS,
  payload: data,
});

export const FETCH_DATA_FAILURE = "FETCH_DATA_FAILURE";
export const fetchDataFailure = (error) => ({
  type: FETCH_DATA_FAILURE,
  payload: error,
});
