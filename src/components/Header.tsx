import { Navbar, Nav, Container } from "react-bootstrap";
import  $  from "jquery";
import React from "react";
import "../styles/Header.scss";
import { Link, Outlet } from "react-router-dom";


function Header() {

  function Menu() {
    $('.nav-small-opened').removeClass('hidden')
  }
  function hideMenu() {
    if (window.outerWidth < 500) {
    $('.nav-small-opened').addClass('hidden')
  }
  }
  $(document).ready(function widthCheck() {
    if (window.outerWidth < 500) {
      $('.filter').addClass('hidden')
      $('.nav-small-opened').addClass('small')
      $('.nav-small-opened').addClass('hidden')
    }
  })

  return (
    <>
    <Container
      style={{
        zIndex: "100",
        position: "fixed",
        margin: "0 auto",
        padding: " 1rem 0",
        top: "0",
        maxWidth: "100%",
        background: "white",
        borderBottom: "2px solid black",
      }}
    >
      <Navbar expand="lg">
        <Container>
          <Link
            to='/'
            style={{ letterSpacing: ".4em", fontSize: "1.7rem" }}
          >
            NEXT HAND
          </Link>
            <Nav className="nav-big">
              <div className="nav-small" onClick={Menu}>
                <div>-</div>
                <div>-</div>
                <div>-</div>
              </div>
              <div className="nav-small-opened">
              <Link className="nav-menu-a" onClick={hideMenu} to='/shop'>
                Shop
              </Link>
              <Link className="nav-menu-a" onClick={hideMenu} to='/basket'>
                Basket
              </Link>
              <Link className="nav-menu-a" onClick={hideMenu} to='/delivery'>
                Delivery
              </Link>
              <Link className="nav-menu-a" onClick={hideMenu} to='/admin'>
                ADMIN
              </Link>
              </div>
            </Nav>
          
        </Container>
      </Navbar>
    </Container>

    <Outlet />
    </>
  );
}

export default  Header ;
