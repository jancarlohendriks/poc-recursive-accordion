import React, { useEffect, useState } from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Typography,
} from "@mui/material";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";

import type { CategoryData, RecursiveCategoryAccordionProps } from "../types";
import { isField, isCategory, isCategoryArray } from "../utils";
import { getCategoryTitle } from "../utils";
import FieldRenderer from "./FieldRenderer";

const RecursiveCategoryAccordion: React.FC<RecursiveCategoryAccordionProps> = ({
  categories,
  level = 0,
  isAllExpanded,
  searchTerm,
}) => {
  const [expandedAccordions, setExpandedAccordions] = useState<Set<number>>(
    new Set()
  );

  // Auto-expand when isAllExpanded changes
  useEffect(() => {
    if (isAllExpanded) {
      const allIds = new Set<number>();
      const collectIds = (category: CategoryData) => {
        if (category.categoryId !== undefined) {
          allIds.add(category.categoryId);
        }
        Object.entries(category).forEach(([, val]) => {
          if (isCategoryArray(val) && val.categories) {
            val.categories.forEach((childCategory: CategoryData) => {
              collectIds(childCategory);
            });
          }
        });
      };
      categories.forEach(collectIds);
      setExpandedAccordions(allIds);
    } else {
      setExpandedAccordions(new Set());
    }
  }, [isAllExpanded, categories]);

  const handleToggleAccordion = (categoryId: number) => {
    setExpandedAccordions((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categoryId)) {
        newSet.delete(categoryId);
      } else {
        newSet.add(categoryId);
      }
      return newSet;
    });
  };

  if (!categories || categories.length === 0) return null;

  return (
    <>
      {categories.map((category, index) => {
        const title = getCategoryTitle(category);
        const categoryId = category.categoryId || index;
        const isExpanded = expandedAccordions.has(categoryId);

        return (
          <Accordion
            key={categoryId}
            expanded={isExpanded}
            onChange={() => handleToggleAccordion(categoryId)}
          >
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography variant="subtitle2">{title}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              {/* Render fields from the current category */}
              {Object.entries(category).map(([, val]) =>
                isField(val) ? (
                  <FieldRenderer key={`field-${val.names[0]}`} field={val} />
                ) : null
              )}

              {/* Render fields from direct categories */}
              {Object.values(category)
                .filter(isCategory)
                .map((category) =>
                  Object.values(category)
                    .filter(isField)
                    .map((field) => (
                      <FieldRenderer
                        key={`nested-field-${field.names[0]}`}
                        field={field}
                      />
                    ))
                )}

              <Box sx={{ mt: 1 }}>
                {/* Render accordions for category's categories */}
                {Object.entries(category).map(([key, val]) =>
                  isCategoryArray(val)
                    ? val.categories.map((child: CategoryData, idx: number) => (
                        <RecursiveCategoryAccordion
                          key={`${key}-${idx}`}
                          categories={[child]}
                          level={level + 1}
                          isAllExpanded={isAllExpanded}
                          searchTerm={searchTerm}
                        />
                      ))
                    : null
                )}
              </Box>
            </AccordionDetails>
          </Accordion>
        );
      })}
    </>
  );
};

export default RecursiveCategoryAccordion;
