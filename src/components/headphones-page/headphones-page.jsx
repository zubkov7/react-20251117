import { useState } from "react";
import { Tabs } from "../tabs/tabs";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphones/slice";
import { HeadphoneContainer } from "../headphone/headphone-container";
import { HeadphoneTabContainer } from "../headphone-tab/headphone-tab-container";

export const HeadphonesPage = () => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  const [activeHeadphoneId, setActiveHeadphoneId] = useState(
    headphonesIds?.[0]
  );

  const handleSetActiveHeadphoneId = (id) => {
    if (activeHeadphoneId === id) {
      return;
    }

    setActiveHeadphoneId(id);
  };

  return (
    <div>
      <h1>Headphones Page</h1>

      <Tabs>
        {headphonesIds.map((id) => (
          <HeadphoneTabContainer
            key={id}
            id={id}
            onClick={() => handleSetActiveHeadphoneId(id)}
            isActive={id === activeHeadphoneId}
          />
        ))}
      </Tabs>

      {activeHeadphoneId && <HeadphoneContainer id={activeHeadphoneId} />}
    </div>
  );
};
