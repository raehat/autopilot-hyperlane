import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home";
import DeployHW from "./DeployHW"
import DeployWarpRoutes from "./DeployWarpRoutes";
import DeployWebApp from "./DeployWebApp"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
          <Route index element={<Home />} />
          {/* <Route path="blogs" element={<Blogs />} /> */}
          {/* <Route path="contact" element={<Contact />} /> */}
          {/* <Route path="*" element={<NoPage />} /> */}
          <Route path="deployhyperlaneandwarp" element={<DeployHW/>}/>
          <Route path="deploywarproutes" element={<DeployWarpRoutes/>}/>
          <Route path="deploywebappforroute" element={<DeployWebApp/>}/>
          deploywebappforroute
      </Routes>
    </BrowserRouter>
  );
}

export default App  