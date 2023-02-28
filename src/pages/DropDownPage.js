import { useState } from "react";
import Dropdown from "../components/Dropdown";
function DropDownPage() {
  const [optionSelected, setOptionSelected] = useState(null);

  const handleOptionClick = (option) => {
    // setIsOpen(false);
    setOptionSelected(option);
    // what option did the use click on?
  };
  const options = [
    { label: "Red", value: "red" },
    { label: "Green", value: "green" },
    { label: "Blue", value: "blue" },
  ];
  return (
    <div className="flex">
      <Dropdown
        options={options}
        value={optionSelected}
        onChange={handleOptionClick}
      />
    </div>
  );
}
export default DropDownPage;
