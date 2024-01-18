import React, { useState } from "react";
import Box from "@mui/material/Box";
import { Container, Paper, Button } from "@mui/material";
import TextField from "@mui/material/TextField";

// API KEY ANDREW WOODCOCK: O18vFRDTyjGn0jwdAIbQ9aFVdGMZY3kN

export default function AccuWeather() {
  // Initializes state to an empty array
  const [weather, setWeather] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  const handleSearchSubmission = (e) => {
    e.preventDefault();
    fetch(`http://localhost:8080/weather/forecast?q=${searchQuery}`, {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    })
      .then((res) => res.json())
      .then((result) => {
        setWeather(result);
      })
      // CONSOLE LOG TO CONFIRM IN CONSOLE THAT A GARDEN WAS SEARCHED FOR
      .then(() => {
        console.log("Pulled weather data for area code " + searchQuery);
      })
      // ERROR CATCH
      .catch((error) => {
        console.error("Error searching for weather:", error);
      });
  };

  return (
    <Box
      component="body"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{ padding: 10 }}>FORECAST</h1>
      <Container>
        <Paper>
          <h1>Enter your ZIP Code</h1>
          <form>
            <TextField
              required
              id="outlined-required"
              label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button
              variant="contained"
              color="primary"
              onClick={handleSearchSubmission}
            >
              Get the Five Day Forecast
            </Button>
          </form>
          <div>
            {weather.five_day &&
              weather.five_day.map((day) => (
                <Paper key={day.EpochDate}>
                  Date: {day.Date} <br />
                  Weather: {day.Day.IconPhrase} <br />
                  Temperature: Between {day.Temperature.Minimum.Value} and{" "}
                  {day.Temperature.Maximum.Value} Degrees Fahrenheit
                  <br />
                  <br />
                </Paper>
              ))}
          </div>
        </Paper>
      </Container>
    </Box>
  );
}
