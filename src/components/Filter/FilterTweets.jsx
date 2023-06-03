import { useState, useEffect, useRef } from "react";
import Button from "../../shared/components/Button";
import { FilterContainer, FilterOptions } from "./FilterTweets.styles";
import Filter from "../../shared/components/Filter/Filter";

const FilterTweets = ({ onFilterOpenChange, follow, setFollow }) => {
  const containerRef = useRef(null);
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!containerRef.current.contains(event.target)) {
        setIsFilterOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const handleFilterClick = () => {
    setIsFilterOpen(!isFilterOpen);
  };

  const handleFollowChange = (options) => {
    setFollow(options[0] ?? null);
  };

  const followFilterItems = [
    { label: "show all", option: "show-all" },
    { label: "follow", option: "follow" },
    { label: "followings", option: "followings" },
  ];

  useEffect(() => {
    onFilterOpenChange && onFilterOpenChange(isFilterOpen);
  }, [isFilterOpen, onFilterOpenChange]);

  return (
    <FilterContainer ref={containerRef}>
      {isFilterOpen ? (
        <Button onClick={handleFilterClick} type="button">
          Mask
        </Button>
      ) : (
        <Button onClick={handleFilterClick} type="button">
          Filter
        </Button>
      )}
      {isFilterOpen && (
        <FilterOptions>
          <Filter
            filters={followFilterItems}
            selectedOptions={[follow]}
            name="follow"
            isSingleSelection={true}
            onChange={handleFollowChange}
          ></Filter>
        </FilterOptions>
      )}
    </FilterContainer>
  );
};

export default FilterTweets;
