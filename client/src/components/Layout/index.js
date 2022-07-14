import Navigation from "../Navigation";
import FooterSticky from "../FooterSticky"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col justify-between h-screen">
    <Navigation />
    <main className="mb-auto">{children}</main>
    <FooterSticky />
    </div>
  );
}

export default Layout;