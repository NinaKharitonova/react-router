//import { useState } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import HomePages from "./pages/Homepages";
import Contacts from "./pages/Contacts";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" Component={HomePages} />
        <Route path="/contacts" Component={Contacts} />
        <Route path="/posts" Component={Posts} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
