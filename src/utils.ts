import type { Content, FieldData, CategoryData, CategoriesData } from "./types";

// Type guards for safe navigation
export const isField = (item: Content): item is FieldData =>
  item?.type === "field" && !item.isEmpty;

export const isCategory = (item: Content): item is CategoryData =>
  item?.type === "category";

export const isCategoryArray = (item: Content): item is CategoriesData =>
  item?.type === "categories" &&
  Array.isArray((item as CategoriesData).categories);

// Extract field value
export const getFieldValue = (field: Content): string | null => {
  if (!field || field.type !== "field" || field.isEmpty) return null;
  const fieldData = field as FieldData;

  if (typeof fieldData.value === "string") return fieldData.value;
  if (typeof fieldData.value === "number") return fieldData.value.toString();
  if (typeof fieldData.value === "boolean") return fieldData.value.toString();

  if (
    fieldData.value &&
    typeof fieldData.value === "object" &&
    "value" in fieldData.value
  ) {
    const value = (fieldData.value as { value?: string }).value;
    return value || null;
  }

  return null;
};

// Extract category title
export const getCategoryTitle = (category: CategoryData): string => {
  for (const [key, content] of Object.entries(category)) {
    if (content.type === "category") {
      return getCategoryTitle(content as CategoryData);
    }

    if (content.type !== "field" || content.isEmpty) continue;

    const keyLower = key.toLowerCase();
    if (
      keyLower.includes("name") ||
      keyLower.includes("title") ||
      keyLower.includes("label") ||
      keyLower.includes("heading")
    ) {
      const value = getFieldValue(content);
      if (value) {
        return value;
      }
    }
  }

  return `Item ${category.categoryId || "Unknown"}`;
};
