import React from "react";
import { useRecoilState } from "recoil";
import { minuteState, hourSelector } from "./atoms";

function App() {
  // 2. Use the atom
  const [minutes, setMinutes] = useRecoilState(minuteState);

  // 4. Use the selectorå
  // This selector will be used to convert minutes to hours
  const [hours, setHours] = useRecoilState(hourSelector);
  const onMinutesChange = (event: React.FormEvent<HTMLInputElement>) => {
    setMinutes(+event.currentTarget.value);
  };
  const onHoursChange = (event: React.FormEvent<HTMLInputElement>) => {
    setHours(+event.currentTarget.value);
  };
  return (
    <div>
      <input
        value={minutes}
        onChange={onMinutesChange}
        type="number"
        placeholder="Minutes"
      />
      <input
        onChange={onHoursChange}
        value={hours}
        type="number"
        placeholder="Hours"
      />
    </div>
  );
}

export default App;
