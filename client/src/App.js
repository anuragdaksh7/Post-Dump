import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LandingPage } from "./pages/landingPage";
import { NewPost } from "./pages/createPost";
import { HeadComp } from "./components/Header";


function App() {
  return (
    <>
      <BrowserRouter>
        <HeadComp />
        <Routes >
          <Route path="/" element={<LandingPage />} />
          <Route path="/createpost" element={<NewPost />} />
        </Routes> 
      </BrowserRouter>
    </>
  );
}

export default App;
