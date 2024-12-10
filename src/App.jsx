//import { useState } from "react";

//React router
import { BrowserRouter, Routes, Route } from "react-router-dom";

//Layouts
import DefaultLayout from "./layouts/DefaultLayout";

//Pages
import HomePages from "./pages/Homepages";
import Contacts from "./pages/Contacts";
import Posts from "./pages/Posts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<DefaultLayout />}>
          <Route index Component={HomePages} />
          <Route path="/contacts" Component={Contacts} />
          <Route path="/posts" Component={Posts} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
