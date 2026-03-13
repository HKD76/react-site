import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";

export default function Layout() {
  return (
    <div className="page-wrapper">
      <main className="main-wrapper light-teal">
        <Navbar />
        <Outlet />
        <Footer />
      </main>
    </div>
  );
}
