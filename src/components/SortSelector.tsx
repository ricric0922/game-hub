import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import React from "react";
import { BsChevronBarDown } from "react-icons/bs";

const SortSelector = () => {
  const sorts = [
    "Relevance",
    "Date added",
    "Name",
    "Release date",
    "Popularity",
    "Average rating",
  ];
  return (
    <Menu>
      <MenuButton as={Button} rightIcon={<BsChevronBarDown />}>
        Order by:
      </MenuButton>
      <MenuList>
        {sorts.map((sort) => (
          <MenuItem key={sort}>{sort}</MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default SortSelector;
