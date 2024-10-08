import React, { useCallback, useMemo, useRef, useState } from "react";
import "./style.css";
import useOnClickOutside from "./useOnClickOutside";

type FilterDropdownProps<T> = {
  data: T[];
  labelKey: keyof T;
  valueChange: (selectedValue: T) => void;
  placeholder?: string;
};

const FilterDropdown = <T extends { id: number }>({
  data,
  labelKey,
  valueChange,
  placeholder,
}: FilterDropdownProps<T>) => {
  const [inputValue, setInputValue] = useState<string>("");
  const [isShowDropdown, setIsShowDropdown] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const onClickOutside = useCallback(() => {
    setIsShowDropdown(false);
  }, [setIsShowDropdown]);

  useOnClickOutside(dropdownRef, onClickOutside);

  const filteredData = useMemo<T[]>(() => {
    const lowercaseInput = inputValue.toLowerCase();
    return data.filter((item) =>
      String(item[labelKey]).toLowerCase().includes(lowercaseInput)
    );
  }, [inputValue, data, labelKey]);

  const handleSelect = (item: T) => {
    setInputValue(String(item[labelKey]));
    setIsShowDropdown(false);
    valueChange(item);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValue(e.target.value);
    setIsShowDropdown(true);
  };

  const highlightMatch = (text: string) => {
    const regex = new RegExp(`(${inputValue})`, "gi");
    const parts = text.split(regex);

    return parts.map((part, index) =>
      part.toLowerCase() === inputValue.toLowerCase() ? (
        <b key={index}>{part}</b>
      ) : (
        part
      )
    );
  };

  return (
    <div className="filter-dropdown" ref={dropdownRef}>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        onFocus={() => setIsShowDropdown(true)}
        placeholder={placeholder}
      />
      <div className="result">
        {isShowDropdown && filteredData.length > 0 && (
          <ul className="dropdown-list">
            {filteredData.map((item) => (
              <li key={item.id} onClick={() => handleSelect(item)}>
                {highlightMatch(String(item[labelKey]))}
              </li>
            ))}
          </ul>
        )}
        {isShowDropdown && filteredData.length === 0 && (
          <div className="no-results">No results found</div>
        )}
      </div>
    </div>
  );
};

export default FilterDropdown;
