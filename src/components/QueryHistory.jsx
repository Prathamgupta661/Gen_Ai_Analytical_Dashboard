import React from "react";
import { List, ListItem, ListItemText, Typography, Box } from "@mui/material";

function QueryHistory({ history }) {
  return (
    <Box my={4}>
      <Typography variant="h6" gutterBottom>
        Query History
      </Typography>
      {history.length === 0 ? (
        <Typography variant="body1">No queries yet.</Typography>
      ) : (
        <List>
          {history.map((item, index) => (
            <ListItem key={index} divider>
              <ListItemText
                primary={`Q: ${item.query}`}
                secondary={`Result: ${JSON.stringify(
                  item.result.datasets[0].data
                )}`}
              />
            </ListItem>
          ))}
        </List>
      )}
    </Box>
  );
}

export default QueryHistory;
