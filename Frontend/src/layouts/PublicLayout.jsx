/**
 * @module src/layouts/PublicLayout
 * @responsibility Estructura pública con navegación y enlaces legales.
 * @requirements RNF-06
 */
import Navbar from '../components/layout/Navbar.jsx';
import Footer from '../components/layout/Footer.jsx';

export default function PublicLayout({ children }) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      <Footer />
    </>
  );
}