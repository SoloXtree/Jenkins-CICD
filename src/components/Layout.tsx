import { ReactNode } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = ({ children }: { children: ReactNode }) => (
  <div className="min-h-screen flex flex-col">
    <Navbar />
    <main className="flex-1 pt-14">{children}</main>
    <Footer />
  </div>
);

export default Layout;
