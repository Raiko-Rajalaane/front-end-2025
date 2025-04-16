import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

function NavigationBar() {
  const { t, i18n } = useTranslation();

  const changeLang = (newLang) => {
    i18n.changeLanguage(newLang);
    localStorage.setItem('language', newLang)
  }

  // href --> HTMLs. Teeb refreshi. Väliste URLde jaoks
  // Link to="" --> HTMLs. Reacti siseseks kasutamiseks
  // window.location.href ---> JavaScriptis väliste URLde jaoks
  // const nav = useNavigate();  nav("URL") ---> JavaScriptis, Reactis

  return (
    <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
      <Container>
        <Navbar.Brand as={Link} to="/">
          {t('navbar.home')}
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/admin">
              {t('navbar.admin')}
            </Nav.Link>
            <Nav.Link as={Link} to="/cart">
              {t('navbar.cart')}
            </Nav.Link>
            <Nav.Link as={Link} to="/contact">
            {t('navbar.contact')}
            </Nav.Link>
            <Nav.Link as={Link} to="/shops">
            {t('navbar.shops')}
            </Nav.Link>
          </Nav>
          <Nav>
            <img onClick={() => changeLang("en")} className='icon' src="/english.png" alt="" />
            <img onClick={() => changeLang("et")} className='icon' src="/estonian.png" alt="" />
            <img onClick={() => changeLang("ru")} className='icon' src="/russian.png" alt="" />
            <img onClick={() => changeLang("es")} className='icon' src="/spanish.png" alt="" />
            <Nav.Link as={Link} to="/login">
              Login
            </Nav.Link>
            <Nav.Link as={Link} to="/signup">
              Signup
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
