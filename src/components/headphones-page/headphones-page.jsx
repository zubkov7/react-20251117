import { useState, useMemo } from "react";
import { headphones } from "../../constants/mock";
import { Headphone } from "../headphone/headphone";
import { Tab } from "../tab/tab";

export const HeadphonesPage = ({ title }) => {
  const filteredHeadphones = useMemo(() => headphones.filter(() => true), []); // сложные вычисления

  const [activeHeadphoneId, setActiveHeadphoneId] = useState(
    () =>
      filteredHeadphones.find(({ name }) => {
        console.log("iterate");
        return name === "Shure AONIC 5";
      }).id
  );

  const activeHeadphone = headphones.find(({ id }) => id === activeHeadphoneId);

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>{title}</h1>

      {filteredHeadphones.map(({ name, id }) => (
        <Tab
          key={id}
          title={name}
          onClick={() => handleSetActiveHeadphoneId(id)}
          isActive={id === activeHeadphoneId}
        />
      ))}

      {activeHeadphone && (
        <Headphone
          name={activeHeadphone.name}
          brand={activeHeadphone.brand}
          reviews={activeHeadphone.reviews}
          codecs={activeHeadphone.codecs}
        />
      )}
    </div>
  );
};
