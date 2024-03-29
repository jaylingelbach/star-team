import "./App.css";
// import RootAppBar from "./components/AppBar";
import AddSeed from "./components/Seeds/AddSeed";
import ViewSeed from "./components/Seeds/ViewSeed";
import AddPlant from "./components/Plants/AddPlant";
import ViewPlant from "./components/Plants/ViewPlant";
import AddSoil from "./components/Soils/AddSoil";
import ViewSoil from "./components/Soils/ViewSoil";
import AddGarden from "./components/Gardens/AddGarden";
import ViewGarden from "./components/Gardens/ViewGarden";
import Login from "./components/Login";
import Register from "./components/Register";
import DeleteGarden from "./components/Gardens/DeleteGarden";
import EditGarden from "./components/Gardens/EditGarden";
import AccuWeather from "./components/Weather/AccuWeather";
import { Link, Routes, Route } from "react-router-dom";
import AddJournal from "./components/Journal/AddJournal";
import ViewJournal from "./components/Journal/ViewJournal";
// import Home from "./components/Home";

function App() {
  return (
    // Reminder: <> is fragment within which the <ROUTES> Hooks are wrapped.
    <>

    <div class name ="App">
      <h1> The garden builder application </h1>
    </div>

      <nav>
        <h2>Menu</h2>
        <ul>
  {/*Link is like an anchor tag <a>, and to= is like href*/}
          {/* <li>
            <Link to="/home">Home</Link>
          </li> */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/register">Register</Link>
          </li>
          <li>
           <Link to="/seeds/add">Add Seeds</Link>
          </li>

          <li>
            <Link to="/seeds/view-seeds">View Seeds</Link>
          </li>
          <li>
             <Link to="/journal/add">Add Journal</Link>
          </li>
          <li>
            <Link to="/journal/view-journal">View Journal</Link>
          </li>
          <li>
            <Link to="/plants/add">Add Plants</Link>
          </li>
          <li>
            <Link to="/plants/view-plants">View Plants</Link>
          </li>
          <li>
            <Link to="/soil/add">Add Soil</Link>
          </li>
          <li>
            <Link to="/soil/view-soils">View Soils</Link>
          </li>
          <li>
            <Link to="/gardens/add">Add Garden</Link>
          </li>
          <li>
            <Link to="/gardens/view-gardens">View Gardens</Link>
          </li>
          <li>
            <Link to="/gardens/delete">Delete a Garden</Link>
          </li>
          <li>
            <Link to="gardens/edit">Update a Garden</Link>
          </li>
        </ul>
        <AccuWeather />
      </nav>
      <Routes>
        {/* path determinds the URL, element determins which Hook is used. */}
        {/* <Route path="/home" element={<Home />} /> */}

        <Route path="/login" element={<Login />} />

        <Route path="/register" element={<Register />} />

        <Route path="/seeds/add" element={<AddSeed />} />

        <Route path="/seeds/view-seeds" element={<ViewSeed />} />

        <Route path="/journal/add" element={<AddJournal />} />

        <Route path="/journal/view-journal" element={<ViewJournal />} />

        <Route path="/plants/add" element={<AddPlant />} />

        <Route path="/plants/view-plants" element={<ViewPlant />} />

        <Route path="/soil/add" element={<AddSoil />} />

        <Route path="/soil/view-soils" element={<ViewSoil />} />

        <Route path="/gardens/add" element={<AddGarden />} />

        <Route path="/gardens/view-gardens" element={<ViewGarden />} />

        <Route path="/gardens/delete" element={<DeleteGarden />} />

        <Route path="/gardens/edit" element={<EditGarden />} />
      </Routes>
    </>

    // <div>
    //   <header>
    //     <RootAppBar />
    //   </header>
    //   <body>
    //   </body>
    // </div>
  );
}

export default App;