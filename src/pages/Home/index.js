import React from "react";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Box } from "@mui/system";
import { Typography } from "@mui/material";
import Carousel from "./components/Carousel";
import Services from "./components/Services";
import Calendar from "./components/Calendar";

const sliderContent = [
  {
    id: "image01",
    image: "alangasi1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "image02",
    image: "alangasi1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
  {
    id: "image03",
    image: "alangasi1.jpg",
    description:
      "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
  },
];
const icons = ["contacts", "projects", "vr", "gallery"];

const Home = () => {
  return (
    <Box>
      <Typography
        variant="h4"
        align="center"
        textTransform={"uppercase"}
        m={4}
      >
        Comuna del centro del pueblo de alangasí
      </Typography>
      <Carousel content={sliderContent} />
      <div
        style={{
          display: "flex",
          flexDirection: "row",
          margin: "30px",
        }}
      >
        <Services icons={icons} />
        <Calendar />
      </div>
    </Box>
  );
};

export default Home;
