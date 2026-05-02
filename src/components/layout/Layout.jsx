import Navbar from "./Navbar.jsx";
import Footer from "./Footer.jsx";
import { RegistrationModalProvider } from "../common/RegistrationModal.jsx";

export default function Layout({ children }) {
  return (
    <RegistrationModalProvider>
      <div className="min-h-screen overflow-hidden bg-fia-black text-white selection:bg-fia-purple selection:text-white">
        <Navbar />
        <main>{children}</main>
        <Footer />
      </div>
    </RegistrationModalProvider>
  );
}
