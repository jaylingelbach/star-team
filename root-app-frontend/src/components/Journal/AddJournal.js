import React, { useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import { Container, Paper, Button } from "@mui/material";

// SOURCE CODE WITH OTHER EXAMPLES HERE: https://mui.com/material-ui/react-text-field/#form-props

export default function AddJournal() {
  // FOR POST
  // THESE MUST EXACTLY MATCH THE FIELDS CREATED IN THE BACKEND
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");


  // EVENT HANDLER FOR SUBMITTING A JOURNAL TO DATABASE

  const handleJournalSubmission = (e) => {
    e.preventDefault();
    let journal = {
      title,
      body
     };
    // CONSOLE LOG TO CONFIRM THAT DATA IS SAVED TO JSON FORMAT
    console.log(journal);
    fetch("http://localhost:8080/journal/add", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(journal),
    })
      // CONSOLE LOG TO CONFIRM IN CONSOLE THAT JOURNAL IS ADDED
      .then(() => {
        console.log("New journal added");
      })
      // ERROR CATCH
      .catch((error) => {
        console.error("Error adding journal:", error);
      });
  };

  return (
    <Box
      component="form"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <Container>
        <Paper>
          {/* UPDATE MARGINS*/}
          <h1 style={{ padding: 10 }}>ADD JOURNAL</h1>
          <div>
            {/* NAME */}
            <TextField
              required
              id="outlined-required"
              label="Journal Title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            {/* DESCRIPTION */}
            <TextField
              required
              id="outlined-required"
              label="Journal Description"
              helperText="Max of 500 characters"
              value={body}
              onChange={(e) => setBody(e.target.value)}
            />
            
          </div>
          <Button variant="contained" onClick={handleJournalSubmission}>
            SUBMIT
          </Button>
        </Paper>
      </Container>
    </Box>
  );
}
