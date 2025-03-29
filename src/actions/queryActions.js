export const submitQuery = (query) => ({
  type: 'SUBMIT_QUERY',
  payload: query,
});

export const querySuccess = (data) => ({
  type: 'QUERY_SUCCESS',
  payload: data,
});

export const queryError = (error) => ({
  type: 'QUERY_ERROR',
  payload: error,
});
