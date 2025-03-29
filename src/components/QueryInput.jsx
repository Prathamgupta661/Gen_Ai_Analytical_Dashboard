import React, { useState } from "react";
import { TextField, Button, Box } from "@mui/material";

function QueryInput({ onSubmit }) {
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!query.trim()) return;
    onSubmit(query);
    setQuery("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <Box display="flex" gap={2}>
        <TextField
          fullWidth
          variant="outlined"
          label="Ask your business question..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <Button variant="contained" color="primary" type="submit">
          Submit
        </Button>
      </Box>
    </form>
  );
}

export default QueryInput;
