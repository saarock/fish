
import { BackToTop, Footer, Header } from "./components";
import { Outlet } from "react-router";


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
