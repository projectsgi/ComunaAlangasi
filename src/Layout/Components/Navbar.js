import { AppBar, Toolbar, Typography } from "@mui/material";
import React from "react";
import ButtonNavbar from "./ButtonNavbar";

const NavBar = () => {
  return (
    <AppBar position="static" style={{ backgroundColor: 'rgba(25, 118, 210, 0.5)' }}>
      <Toolbar>
          <img src="logo/logoALangasi.png" alt="Logo" style={{ width: "80px" }} />
          <div style={{ marginLeft: 'auto' }}>
            <Typography variant="p" fontFamily="JuliusSansOne" style={{ display: 'inline', marginRight: '40px'}}>
              <ButtonNavbar to="/" name={"Inicio"} />
            </Typography>
            <Typography variant="p" fontFamily="JuliusSansOne" style={{ display: 'inline', marginRight: '40px' }}>
              <ButtonNavbar to="/about" name={"Quienes Somos"} />
            </Typography>
            <Typography variant="p" fontFamily="JuliusSansOne" style={{ display: 'inline', marginRight: '40px' }}>
              <ButtonNavbar to="/galeria" name={"Galería"} />
            </Typography>
            <Typography variant="p" fontFamily="JuliusSansOne" style={{ display: 'inline', marginRight: '40px' }}>
              <ButtonNavbar to="/recorrido" name={"Recorrido virtual"} />
            </Typography>
            <Typography variant="p" fontFamily="JuliusSansOne" style={{ display: 'inline', marginRight: '40px' }}>
              <ButtonNavbar to="/contacto" name={"Contacto"} />
            </Typography>
            <Typography variant="p" fontFamily="JuliusSansOne" style={{ display: 'inline' }}>
              <ButtonNavbar to="/proyectos" name={"Proyectos"} />
            </Typography>
          </div>
            
      </Toolbar>
    </AppBar>
  );
}


export default NavBar;
