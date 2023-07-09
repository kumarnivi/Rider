import React from 'react';
import './App.css';
import { Navigate, Route, Routes } from 'react-router-dom';
import ListRider from './componets/Rider/ListRider/ListRider';
import AddRider from './componets/Rider/AddRider/AddRider';
import EditRider from './componets/Rider/EditRider/EditRider';
import ViewRider from './componets/Rider/viewRider/ViewRider';
// import NavBar from './componets/navbar/NavBar';

let App = () => {
  return (
    <div className="App">
      <React.Fragment>
<Routes>
{/* <Route path="/" element={<NavBar />} /> */}
  <Route path="/" element={<Navigate to="/Rider" />} />
          <Route path="/Rider" element={<ListRider />} />
          <Route path="/Rider/add" element={<AddRider />} />
          <Route path="/Rider/View/:Id" element={<ViewRider />} />
          <Route path="/Rider/Edit/:Id" element={<EditRider />} />
</Routes>

      </React.Fragment>

     
    </div>
  );
}

export default App;
