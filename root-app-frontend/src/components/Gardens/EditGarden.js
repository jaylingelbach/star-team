import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import {
  Container,
  Paper,
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
} from "@mui/material";

export default function EditGarden() {
  // GETS GARDENS
  const [gardens, setGardens] = useState([]);
  // THESE ARE USED TO PULL DATA FROM SQL. SEE useEffect FUNCTION BELOW
  const [seedList, setSeedList] = useState([]);
  const [plantList, setPlantList] = useState([]);
  const [soilList, setSoilList] = useState([]);

  // FOR SELECTING A GARDEN TO EDIT
  const [selectedGardenId, setSelectedGardenId] = useState("");

  // FOR PUT
  // THESE MUST EXACTLY MATCH THE FIELDS CREATED IN THE BACKEND
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  // SEED, PLANT AND SOIL OBJECTS
  const [gardenSeeds, setGardenSeeds] = useState([]);
  const [gardenPlants, setGardenPlants] = useState([]);
  const [gardenSoil, setGardenSoil] = useState([]);

  const handleEditGardenSubmission = () => {
    let updatedGarden = {
      name,
      description,
      gardenSeeds,
      gardenPlants,
      gardenSoil,
    };

    // CONSOLE LOG TO CONFIRM THAT DATA IS SAVED TO JSON FORMAT
    console.log(updatedGarden);
    fetch(`http://localhost:8080/gardens/${selectedGardenId}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(updatedGarden),
    })
      // CONSOLE LOG TO CONFIRM IN CONSOLE THAT GARDEN IS UPDATED
      .then(() => {
        console.log("Garden Updated");
      })
      // ERROR CATCH
      .catch((error) => {
        console.error("Error updating Garden:", error);
      });
  };

  // Sets gardens to json
  useEffect(() => {
    fetch("http://localhost:8080/gardens/view-gardens")
      .then((res) => res.json())
      .then((result) => {
        setGardens(result);
      })
      .catch((error) => {
        console.error("Error fetching Garden data:", error);
      });
  }, []);

  // THIS LONG useEffect FUNCTION PULLS DATA FROM SQL
  useEffect(() => {
    // Fetch Seed data
    fetch("http://localhost:8080/seeds/view-seeds")
      .then((res) => res.json())
      .then((result) => {
        setSeedList(result);
      })
      .catch((error) => {
        console.error("Error fetching Seed data:", error);
      });

    // Fetch Plant data
    fetch("http://localhost:8080/plants/view-plants")
      .then((res) => res.json())
      .then((result) => {
        setPlantList(result);
      })
      .catch((error) => {
        console.error("Error fetching Plant data:", error);
      });

    // Fetch Soil data
    fetch("http://localhost:8080/soil/view-soils")
      .then((res) => res.json())
      .then((result) => {
        setSoilList(result);
      })
      .catch((error) => {
        console.error("Error fetching Soil data:", error);
      });
  }, []);
  // END useEffect Function

  return (
    <Box
      component="body"
      sx={{
        "& .MuiTextField-root": { m: 1, width: "25ch" },
      }}
      noValidate
      autoComplete="off"
    >
      <h1 style={{ padding: 10 }}>CHOOSE A GARDEN TO UPDATE</h1>
      <Container>
        <Paper>
          <form>
            <h2>Pick a Garden:</h2>
            <FormControl fullWidth>
              <InputLabel>Select a Garden</InputLabel>
              <Select
                value={selectedGardenId}
                onChange={(e) => setSelectedGardenId(e.target.value)}
              >
                {gardens.map((aGarden) => (
                  <MenuItem key={aGarden.id} value={aGarden.id}>
                    {aGarden.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <div>
              <h2>Enter your garden's new details:</h2>
              {/* NAME */}
              <TextField
                required
                id="outlined-required"
                label="New Garden Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
              {/* DESCRIPTION */}
              <TextField
                required
                id="outlined-required"
                label="New Garden Description"
                helperText="Max of 255 characters"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
              />
            </div>
            <h2>NEW SEEDS</h2>
            <FormControl fullWidth>
              <InputLabel>Select Seeds:</InputLabel>
              <Select
                multiple
                value={gardenSeeds}
                onChange={(e) => setGardenSeeds(e.target.value)}
              >
                {seedList.map((aSeed) => (
                  <MenuItem key={aSeed.id} value={aSeed.id}>
                    {aSeed.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <h2>NEW PLANTS</h2>
            <FormControl fullWidth>
              <InputLabel>Select Plants:</InputLabel>
              <Select
                multiple
                value={gardenPlants}
                onChange={(e) => setGardenPlants(e.target.value)}
              >
                {plantList.map((aPlant) => (
                  <MenuItem key={aPlant.id} value={aPlant.id}>
                    {aPlant.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            -<h2>NEW SOIL</h2>
            <FormControl fullWidth>
              <InputLabel>Select a Soil:</InputLabel>
              <Select
                value={gardenSoil}
                onChange={(e) => setGardenSoil(e.target.value)}
              >
                {soilList.map((aSoil) => (
                  <MenuItem key={aSoil.id} value={aSoil.id}>
                    {aSoil.name}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
            <Button
              variant="contained"
              color="primary"
              onClick={handleEditGardenSubmission}
            >
              Update your Garden
            </Button>
          </form>
        </Paper>
      </Container>
    </Box>
  );
}
