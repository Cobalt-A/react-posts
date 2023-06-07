import React, { FC } from "react";
import Container from "react-bootstrap/Container";
import { Nav, Navbar, Offcanvas } from "react-bootstrap";
import { Link } from "react-router-dom";
import styles from "./Header.module.sass";

const MainHeader: FC = () => {
  return (
    <Navbar variant="dark" bg="dark" expand="xxl" className="mb-3">
      <Container>
        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-lg`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-lg`}
          aria-labelledby={`offcanvasNavbarLabel-expand-lg`}
          placement="start"
          bg="dark"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-lg`}>
              React-posts
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="flex-grow-1 pe-3">
              <Link className={styles.link} to="/">
                Главная
              </Link>
              <Link className={styles.link} to="/about">
                Обо мне
              </Link>
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};

export default MainHeader;
