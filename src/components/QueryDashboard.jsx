import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { submitQuery, querySuccess, queryError } from "../actions/queryActions";
import QueryInput from "./QueryInput";
import QueryHistory from "./QueryHistory";
import ChartComponent from "./ChartComponent";
import { Box, CircularProgress, Alert } from "@mui/material";

function QueryDashboard() {
  const dispatch = useDispatch();
  const { results, loading, error, history } = useSelector(
    (state) => state.query
  );

  const handleQuerySubmit = (queryValue) => {
    dispatch(submitQuery(queryValue));

    setTimeout(() => {
      if (Math.random() > 0.2) {
        const mockData = {
          labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
          datasets: [
            {
              label: "Sales",
              data: [12, 19, 3, 5, 2, 3],
              backgroundColor: "rgba(75, 192, 192, 0.6)",
            },
          ],
        };
        dispatch(querySuccess(mockData));
      } else {
        dispatch(queryError("Failed to fetch data. Please try again."));
      }
    }, 1500);
  };

  return (
    <Box>
      <QueryInput onSubmit={handleQuerySubmit} />
      {loading && (
        <Box display="flex" justifyContent="center" my={2}>
          <CircularProgress />
        </Box>
      )}
      {error && <Alert severity="error">{error}</Alert>}
      {results && (
        <Box my={4}>
          <ChartComponent data={results} />
        </Box>
      )}
      <QueryHistory history={history} />
    </Box>
  );
}

export default QueryDashboard;
