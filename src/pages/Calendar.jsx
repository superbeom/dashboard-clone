import React from "react";
import {
  ScheduleComponent,
  Month,
  Week,
  Day,
  WorkWeek,
  Agenda,
  Resize,
  DragAndDrop,
  Inject,
} from "@syncfusion/ej2-react-schedule";

import { scheduleData } from "../data/dummy";

import { Header } from "../components";

const Calendar = () => {
  return (
    <div className="m-2 md:m-10 mt-24 p-2 md:p-10 bg-white rounded-3xl">
      <Header category="App" title="Calendar" />

      <ScheduleComponent
        height={650}
        eventSettings={{ dataSource: scheduleData }}
      >
        <Inject
          services={[Month, Week, Day, WorkWeek, Agenda, Resize, DragAndDrop]}
        />
      </ScheduleComponent>
    </div>
  );
};

export default Calendar;
