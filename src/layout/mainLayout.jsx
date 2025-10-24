import Header from "../components/Header";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <>
      <Header />
      <main className="container py-4">{children}</main>
      <Footer />
    </>
  );
}

export default MainLayout;