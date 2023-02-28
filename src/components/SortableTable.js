import { GoArrowSmallDown, GoArrowSmallUp } from "react-icons/go";
import Table from "./Table";
import useSort from "../Hooks/use-sort";

function SortableTable(props) {
  const { config, data } = props;
  const { sortOrder, sortBy, sortedData, setSortColumn } = useSort(
    data,
    config
  );

  // update Config
  const updatedConfig = config.map((column) => {
    if (!column.sortValue) {
      return column;
    }
    return {
      ...column,
      header: () => (
        <th
          className="cursor-pointer hover:bg-gray-100"
          onClick={() => setSortColumn(column.label)}
        >
          <div className="flex item-center">
            {getIcons(column.label, sortBy, sortOrder)}

            {column.label}
          </div>{" "}
        </th>
      ),
    };
  });

  // Only8 sort data if sortOrder && sortBy are not null
  // Make a copy of the "data" prop
  // find the correct sortVaue function and use it for sc

  // Sort Logic

  //config prop will be overwritten
  return <Table {...props} data={sortedData} config={updatedConfig} />;
}

function getIcons(label, sortBy, sortOrder) {
  if (label !== sortBy) {
    return (
      <div>
        <GoArrowSmallUp />
        <GoArrowSmallDown />
      </div>
    );
  } else if (sortOrder === "asc") {
    return (
      <div>
        <GoArrowSmallUp />
      </div>
    );
  } else if (sortOrder === "desc") {
    return (
      <div>
        <GoArrowSmallDown />
      </div>
    );
  }
}

export default SortableTable;
