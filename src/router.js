import { BrowserRouter, Route, Routes } from "react-router-dom";
import Layout from "./layout";

export default function Router() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<p>Home</p>} />
          <Route path="blogs" element={<p>Blogs</p>} />
          <Route path="contact" element={<p>contact</p>} />
          <Route path="*" element={<p>Notfome</p>} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
