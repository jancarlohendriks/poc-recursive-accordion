# Recursive Accordion Component POC

This is a proof of concept demonstrating a recursive accordion component that can handle deeply nested data structures. The component automatically extracts titles from nested fields and provides an interactive interface for exploring hierarchical data.

## Features

- **Recursive Rendering**: Handles unlimited levels of nesting
- **Smart Title Extraction**: Automatically finds meaningful titles from field names
- **Expand/Collapse Controls**: Individual accordion control and global expand/collapse
- **Type Safety**: Full TypeScript support with type guards
- **Material-UI Integration**: Clean, modern UI components

## Data Structure

The component expects data in this format:

```typescript
{
  page: {
    content: {
      type: "categories",
      names: ["Content"],
      categories: [
        {
          type: "category",
          names: ["Category Name"],
          categoryId: 1,
          name: {
            type: "field",
            names: ["Name"],
            value: "Category Title",
            isEmpty: false
          },
          // ... more fields and nested categories
        }
      ]
    }
  }
}
```

## Key Components

### `CategoryMultiAccordion`

- Main entry point component
- Handles data path resolution
- Calls the recursive component

### `RecursiveCategoryAccordion`

- Recursive component that renders accordion items
- Manages expansion state
- Handles nested categories

### `FieldRenderer`

- Renders individual field values
- Handles different data types

## Usage

```tsx
import CategoryMultiAccordion from "./components/CategoryMultiAccordion";

<CategoryMultiAccordion
  item={yourData}
  contentPath="content"
  isAllExpanded={false}
/>;
```

## Getting Started

1. Install dependencies:

   ```bash
   npm install
   ```

2. Start the development server:

   ```bash
   npm run dev
   ```

3. Open [http://localhost:5173](http://localhost:5173) to view the demo

## Demo Data

The POC includes sample data showing a product catalog structure:

- Product Categories
  - Electronics
    - Smartphones
    - Laptops
    - Accessories
  - Clothing
    - Men's Wear
    - Women's Wear
    - Children's Wear

## Technical Implementation

- **Type Guards**: Safe navigation through nested data
- **State Management**: Efficient expansion state using Sets
- **Performance**: Conditional rendering and optimized re-renders
- **Accessibility**: Proper ARIA attributes and keyboard navigation

## Customization

You can easily customize the component by:

- Modifying the title extraction logic in `getCategoryTitle()`
- Adding custom field renderers
- Implementing search functionality
- Adding animations or transitions

## CodeSandbox

This POC is designed to be easily uploaded to CodeSandbox.io for demonstration purposes.
