import React from "react";
import {
  Typography,
  TextField,
  Grid,
  Button,
} from "@mui/material";
import { Box } from "@mui/system";

const Contact = () => {
  return (
    <Box
      m={5}
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4">CONTACTO</Typography>
      <Box m={5} p={5} sx={{ backgroundColor: "white", borderRadius: "10px" }}>
        <Grid container spacing={2} direction="column">
          <Grid item xs={12} sm={6}>
            <TextField
              label="Nombre y Apellido"
              placeholder="Ingrese su nombre y apellido"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Correo"
                  placeholder="Ingrese su correo"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  label="Teléfono"
                  placeholder="Ingrese su teléfono"
                  fullWidth
                  variant="outlined"
                />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Asunto"
              placeholder="Ingrese el asunto"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <TextField
              label="Mensaje"
              placeholder="Mensaje"
              fullWidth
              variant="outlined"
            />
          </Grid>
          <Grid item xs={12}>
            <Button variant="contained" color="primary" fullWidth>
              Enviar
            </Button>
          </Grid>
        </Grid>
      </Box>
      <Typography variant="h4">UBICACIÓN</Typography>
      <Box m={5}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d63836.213814682706!2d-78.43153900000001!3d-0.30072725000000006!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91d5bd785bf021cf%3A0x193e22ed2846177f!2sAlangasi!5e0!3m2!1ses!2sec!4v1687524178532!5m2!1ses!2sec"
          width="600"
          title="ubicacion"
          height="450"
          allowfullscreen=""
          loading="lazy"
          referrerpolicy="no-referrer-when-downgrade"
        ></iframe>
      </Box>
    </Box>
  );
};

export default Contact;
