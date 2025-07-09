import React, { useEffect } from "react";
import { Box } from "@mui/material";

import type {
  CategoryData,
  CategoryMultiAccordionProps,
  PageData,
  CategoriesData,
} from "../types";
import RecursiveCategoryAccordion from "./RecursiveCategoryAccordion";

const CategoryMultiAccordion: React.FC<CategoryMultiAccordionProps> = ({
  item,
  contentPath,
  isAllExpanded = false,
  searchTerm,
}) => {
  const page = item.page;

  const requestedPath = contentPath;
  const actualPath = Object.keys(page).find(
    (key) => key.toLowerCase() === requestedPath?.toLowerCase()
  );
  const categoriesData = actualPath
    ? (page[actualPath] as CategoriesData)
    : undefined;

  useEffect(() => {
    if (categoriesData?.categories?.length > 0) {
      console.log("Categories loaded:", categoriesData.categories.length);
    }
  }, [categoriesData?.categories?.length]);

  if (!categoriesData?.categories?.length) {
    return (
      <Box sx={{ p: 2, textAlign: "center", color: "text.secondary" }}>
        No categories found
      </Box>
    );
  }

  return (
    <Box>
      <RecursiveCategoryAccordion
        categories={categoriesData.categories}
        isAllExpanded={isAllExpanded}
        searchTerm={searchTerm}
      />
    </Box>
  );
};

export default CategoryMultiAccordion;
