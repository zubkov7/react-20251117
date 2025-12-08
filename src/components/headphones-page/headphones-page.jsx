import { useState } from "react";
import { Headphone } from "../headphone/headphone";
import { Button } from "../button/button";
import { Tabs } from "../tabs/tabs";
import { HeadphoneContainer } from "../headphone/headphone-container";
import { useSelector } from "react-redux";
import { selectHeadphonesIds } from "../../redux/entities/headphone/slice";
import { HeadphoneTab } from "../headphone-tab/headphone-tab";

export const HeadphonesPage = () => {
  const headphonesIds = useSelector(selectHeadphonesIds);

  const [activeHeadphoneId, setActiveHeadphoneId] = useState(headphonesIds[0]);

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
          <HeadphoneTab
            key={id}
            headphoneId={id}
            onClick={() => handleSetActiveHeadphoneId(id)}
            disabled={id === activeHeadphoneId}
          />
        ))}
      </Tabs>

      {activeHeadphoneId && (
        <HeadphoneContainer
          key={activeHeadphoneId}
          headphoneId={activeHeadphoneId}
        />
      )}
    </div>
  );
};

// [1, 2, 3, 4];
// [2, 1, 3, 4];
// [{'1': 'data1',}, {'2': 'data2',}, {'3': 'data3',}, {'4': 'data4',}];

// {
//   '1': 'data1',
//   '2': 'data2',
//   '3': 'data3',
//   '4': 'data4',
// }
