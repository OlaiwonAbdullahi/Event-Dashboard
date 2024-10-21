import home from "../assets/home.svg";
import event from "../assets/event.svg";
import speaker from "../assets/speaker.svg";
import report from "../assets/report.svg";
import notification from "../assets/notification.svg";
import setting from "../assets/setting.png";
import collapse from "../assets/collapse.svg";
import { useState } from "react";

const Sidebar = () => {
  const [active, setActive] = useState("Home");

  const menuItems = [
    { icon: home, label: "Home" },
    { icon: event, label: "Events" },
    { icon: speaker, label: "Speakers" },
    { icon: report, label: "Report" },
    { icon: notification, label: "Notifications" },
    { icon: setting, label: "Settings" },
    { icon: collapse, label: "Collapse" },
  ];

  return (
    <div className="bg-white border-r-select border-r-2 w-44 h-screen flex flex-col gap-2">
      <div className=" text-xl font-semibold text-center">Logo</div>
      <ul className=" flex flex-col text-primarySelect">
        {menuItems.map((item) => (
          <li
            key={item.label}
            className={`flex items-center gap-2 text-sm/6 p-1 m-2 rounded-lg ${
              active === item.label
                ? "text-primary bg-select"
                : "hover:text-primary hover:bg-select"
            }`}
            onClick={() => setActive(item.label)}
          >
            <img
              src={item.icon}
              alt={`${item.label} Icon`}
              className="h-5 w-5"
            />
            {item.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
