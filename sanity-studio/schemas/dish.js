const dish = {
  title: "Gericht",
  name: "dish",
  type: "document",
  fields: [
    {
      title: "Name",
      name: "name",
      type: "string",
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Gang",
      name: "course",
      type: "string",
      options: {
        list: [
          { title: "Vorspeise", value: "starter" },
          { title: "Hauptgang", value: "main" },
          { title: "Dessert", value: "dessert" },
        ],
        layout: "radio",
      },
      validation: (Rule) => Rule.required(),
    },
    {
      title: "Foto",
      name: "image",
      type: "image",
    },
    {
      title: "Rezept",
      name: "recipe",
      type: "url",
    },
  ],
};

export default dish;
