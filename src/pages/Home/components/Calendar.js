import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import esLocale from "@fullcalendar/core/locales/es";
import React from "react";
import { Typography } from "@mui/material";
import "../style/index.css";
const Calendar = () => {
  return (
    <div style={{ width: "50%", padding: "10px" }}>
      <div
        style={{
          width: "100%",
          textAlign: "center",
          textTransform: "uppercase",
          fontSize: "25px",
        }}
      >
        <Typography variant="h5" marginBottom={10}>
          Calendario
        </Typography>
      </div>
      <div>
        <div>
          <FullCalendar
            plugins={[dayGridPlugin]}
            initialView="dayGridMonth"
            locale={esLocale}
            events={[
              { title: "Event 1", date: "2023-06-01" },
              { title: "Event 2", date: "2023-06-05" },
              { title: "Event 3", date: "2023-06-10" },
            ]}
          />
        </div>
      </div>
    </div>
  );
};

export default Calendar;
