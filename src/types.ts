// Base content interface
export interface Content {
  type: string;
  names: string[];
  isEmpty?: boolean;
}

// Field data structure
export interface FieldData extends Content {
  type: "field";
  value: string | number | boolean | object;
  definition?: {
    id: number;
    dataTypeCode: number;
    name: string;
  };
}

// Category data structure
export interface CategoryData extends Content {
  type: "category";
  categoryId?: number;
  [key: string]: any; // Allow additional properties
}

// Categories array structure
export interface CategoriesData extends Content {
  type: "categories";
  categories: CategoryData[];
}

// Page data structure
export interface PageData {
  page: {
    [key: string]: any;
  };
}

// Props for the main component
export interface CategoryMultiAccordionProps {
  item: PageData;
  contentPath?: string;
  title?: string;
  isAllExpanded?: boolean;
  searchTerm?: string;
}

// Props for the recursive component
export interface RecursiveCategoryAccordionProps {
  categories: CategoryData[];
  level?: number;
  isAllExpanded: boolean;
  searchTerm?: string;
}
