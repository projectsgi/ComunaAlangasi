import { Box, Grid, Paper, Typography } from '@mui/material'
import React from 'react'

const InformationCard = ({title, description,image, flexDirection}) => {
  return (
    <Grid
        container
        sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: flexDirection
        }}
        mb={2}
    >
        <Grid item xs={12} sm={5}>
        <Paper style={{ padding: 20 }}>
          <Typography variant="h5" gutterBottom>
            {title}
          </Typography>
          <Typography variant="body1">
            {description}
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={5}>
        <img
          src={image}
          alt="Imagen 1"
          style={{ width: "100%", height: "auto" }}
        />
      </Grid>
    </Grid>
  )
}

export default InformationCard