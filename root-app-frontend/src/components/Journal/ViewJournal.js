import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { Container, Paper } from "@mui/material";

export default function ViewJournal() {
  // Initializes state to an empty array
  const [journals, setJournals] = useState([]);

  // Sets journal to json
  useEffect(() => {
    fetch("http://localhost:8080/journal/view-journal")
      .then((res) => res.json())
      .then((result) => {
        setJournals(result);
      })
      .catch((error) => {
        console.error("Error fetching Journal data:", error);
      });
  }, []);

  return (
    <Box
      component="body"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h1>JOURNAL DATABASE</h1>
      <Container>
        <Paper>
          <h1>Journal</h1>
          {journals.map((journal) => (
            <Paper key={journal.id}>
              Id: {journal.id} <br />
              Title: {journal.title} <br />
              Description: {journal.body} <br />
              
            </Paper>
          ))}
        </Paper>
      </Container>
    </Box>
  );
}
