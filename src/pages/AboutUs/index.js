import { Grid, Paper, Typography } from "@mui/material";
import InformationCard from "./components/InformationCard";

const loremIpsum = "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."

const AboutUs = () => {
  return (
    <Grid
      m={5}
      spacing={2}
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column"
      }}
    >
      <Typography variant="h4" height="100px" >
        Quienes Somos
      </Typography>
      <InformationCard 
        title={"Historia"} 
        description={loremIpsum} 
        image={"alangasi1.jpg"}
      />
      <InformationCard 
        title={"Nuestra misión"} 
        description={loremIpsum} 
        image={"alangasi1.jpg"}
        flexDirection={"row-reverse"}
      />
      
    </Grid>
  );
};

export default AboutUs;
