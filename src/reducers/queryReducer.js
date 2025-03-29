const initialState = {
  query: '',
  history: [],
  loading: false,
  results: null,
  error: null,
};

const queryReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SUBMIT_QUERY':
      return { ...state, loading: true, query: action.payload, error: null };
    case 'QUERY_SUCCESS':
      return {
        ...state,
        loading: false,
        results: action.payload,
        history: [
          ...state.history,
          { query: state.query, result: action.payload }
        ],
      };
    case 'QUERY_ERROR':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default queryReducer;
