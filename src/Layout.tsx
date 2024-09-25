
import { Footer, Header } from "./components";
import { Outlet } from "react-router";
import BackToTop from "./components/backToTop/BackToTop";

const Layout = () => {
  return (
    <>
      <header>
        <Header />
      </header>
      <main>
        {<Outlet />}
        <BackToTop/>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Layout;
