import Header from "../components/Header";
import Footer from "../components/Footer";
import "./layout.css"; // make sure this file exists

function MainLayout({ children }) {
  return (
    <div className="layout-wrapper" style={{ backgroundColor: "#9379c5ff" }}>
      <Header />
      <main className="container py-4 layout-content">
        {children}
      </main>
      <Footer />
    </div>
  );
}

export default MainLayout;