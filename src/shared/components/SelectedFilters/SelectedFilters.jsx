import { useState, useEffect } from "react";
import icon from "../../../images/icons.svg";
import {
  SelectedFiltersList,
  SelectedFiltersItem,
} from "./SelectFilters.styles.js";

const SelectedFilters = ({ filters = [], setFollow }) => {
  const [selectedFilters, setSelectedFilters] = useState(filters);
  useEffect(() => {
    setSelectedFilters(filters);
  }, [filters]);

  const handleRemove = (value) => {
    let updatedFilters = selectedFilters.filter(
      (filter) => filter.value !== value
    );

    if (value === "show all" || value === "follow" || value === "followings") {
      setFollow(null);
    }
    setSelectedFilters(updatedFilters);
  };

  return (
    <SelectedFiltersList>
      {selectedFilters.map((filter, index) => (
        <SelectedFiltersItem key={`${filter.value}-${index}`}>
          <span>{filter.label}</span>
          <svg>
            <use
              href={`${icon}#cross-small`}
              onClick={() => handleRemove(filter.value)}
            ></use>
          </svg>
        </SelectedFiltersItem>
      ))}
    </SelectedFiltersList>
  );
};

export default SelectedFilters;
