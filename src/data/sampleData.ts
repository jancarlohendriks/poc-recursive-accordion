import type { PageData } from "../types";

export const sampleData: PageData = {
  page: {
    content: {
      type: "categories",
      names: ["Content"],
      categories: [
        {
          type: "category",
          names: ["Product Categories"],
          categoryId: 1,
          name: {
            type: "field",
            names: ["Name"],
            value: "Product Categories",
            isEmpty: false,
          },
          description: {
            type: "field",
            names: ["Description"],
            value: "Main product categories for our store",
            isEmpty: false,
          },
          subcategories: {
            type: "categories",
            names: ["Subcategories"],
            categories: [
              {
                type: "category",
                names: ["Electronics"],
                categoryId: 2,
                name: {
                  type: "field",
                  names: ["Name"],
                  value: "Electronics",
                  isEmpty: false,
                },
                description: {
                  type: "field",
                  names: ["Description"],
                  value: "Electronic devices and accessories",
                  isEmpty: false,
                },
                items: {
                  type: "categories",
                  names: ["Items"],
                  categories: [
                    {
                      type: "category",
                      names: ["Smartphones"],
                      categoryId: 3,
                      name: {
                        type: "field",
                        names: ["Name"],
                        value: "Smartphones",
                        isEmpty: false,
                      },
                      price: {
                        type: "field",
                        names: ["Price Range"],
                        value: "$200 - $1200",
                        isEmpty: false,
                      },
                      brands: {
                        type: "field",
                        names: ["Popular Brands"],
                        value: "Apple, Samsung, Google",
                        isEmpty: false,
                      },
                    },
                    {
                      type: "category",
                      names: ["Laptops"],
                      categoryId: 4,
                      name: {
                        type: "field",
                        names: ["Name"],
                        value: "Laptops",
                        isEmpty: false,
                      },
                      price: {
                        type: "field",
                        names: ["Price Range"],
                        value: "$500 - $3000",
                        isEmpty: false,
                      },
                      brands: {
                        type: "field",
                        names: ["Popular Brands"],
                        value: "Dell, HP, Lenovo, Apple",
                        isEmpty: false,
                      },
                    },
                    {
                      type: "category",
                      names: ["Accessories"],
                      categoryId: 5,
                      name: {
                        type: "field",
                        names: ["Name"],
                        value: "Accessories",
                        isEmpty: false,
                      },
                      price: {
                        type: "field",
                        names: ["Price Range"],
                        value: "$10 - $200",
                        isEmpty: false,
                      },
                      types: {
                        type: "field",
                        names: ["Types"],
                        value: "Cases, Chargers, Cables",
                        isEmpty: false,
                      },
                    },
                  ],
                },
              },
              {
                type: "category",
                names: ["Clothing"],
                categoryId: 6,
                name: {
                  type: "field",
                  names: ["Name"],
                  value: "Clothing",
                  isEmpty: false,
                },
                description: {
                  type: "field",
                  names: ["Description"],
                  value: "Fashion and apparel",
                  isEmpty: false,
                },
                items: {
                  type: "categories",
                  names: ["Items"],
                  categories: [
                    {
                      type: "category",
                      names: ["Men's Wear"],
                      categoryId: 7,
                      name: {
                        type: "field",
                        names: ["Name"],
                        value: "Men's Wear",
                        isEmpty: false,
                      },
                      price: {
                        type: "field",
                        names: ["Price Range"],
                        value: "$20 - $500",
                        isEmpty: false,
                      },
                      styles: {
                        type: "field",
                        names: ["Styles"],
                        value: "Casual, Formal, Sportswear",
                        isEmpty: false,
                      },
                    },
                    {
                      type: "category",
                      names: ["Women's Wear"],
                      categoryId: 8,
                      name: {
                        type: "field",
                        names: ["Name"],
                        value: "Women's Wear",
                        isEmpty: false,
                      },
                      price: {
                        type: "field",
                        names: ["Price Range"],
                        value: "$25 - $600",
                        isEmpty: false,
                      },
                      styles: {
                        type: "field",
                        names: ["Styles"],
                        value: "Casual, Formal, Evening Wear",
                        isEmpty: false,
                      },
                    },
                    {
                      type: "category",
                      names: ["Children's Wear"],
                      categoryId: 9,
                      name: {
                        type: "field",
                        names: ["Name"],
                        value: "Children's Wear",
                        isEmpty: false,
                      },
                      price: {
                        type: "field",
                        names: ["Price Range"],
                        value: "$15 - $100",
                        isEmpty: false,
                      },
                      ages: {
                        type: "field",
                        names: ["Age Groups"],
                        value: "0-2 years, 3-6 years, 7-12 years",
                        isEmpty: false,
                      },
                    },
                  ],
                },
              },
            ],
          },
        },
      ],
    },
  },
};
