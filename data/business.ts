export type MenuItem = {
  name: string;
  price: string;
  description?: string;
  note?: string;
  verify?: boolean;
};

export type MenuCategory = {
  title: string;
  items: MenuItem[];
};

export const business = {
  name: "Radhe Pani Puri",
  cuisine: "Pani puri and Kachori chaat",
  city: "Etobicoke",
  region: "Toronto",
  neighborhood: "Albion Road",
  address: "1753 Albion Rd UNIT 6A, Etobicoke, ON M9V 1C3",
  phoneDisplay: "+1 (647) 615-0176",
  phoneHref: "tel:+16476150176",
  hours: [
    { day: "Monday", hours: "3:00 PM - 12:00 AM" },
    { day: "Tuesday", hours: "3:00 PM - 12:00 AM" },
    { day: "Wednesday", hours: "3:00 PM - 12:00 AM" },
    { day: "Thursday", hours: "3:00 PM - 12:00 AM" },
    { day: "Friday", hours: "3:00 PM - 12:00 AM" },
    { day: "Saturday", hours: "3:00 PM - 12:00 AM" },
    { day: "Sunday", hours: "3:00 PM - 12:00 AM" },
  ],
  directionsUrl: "https://maps.app.goo.gl/nt9c3mRM2Lzf2op46",
  instagramUrl: "https://www.instagram.com/radhe_panipuri.ca?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==",
  whatsappUrl: "",
  deliveryLinks: [],
  priceRange: "$",
  description:
    "Radhe Pani Puri serves pani puri, chaat, and vegetarian Indian street food in Etobicoke, Toronto. ",
  homeH1: "Pani Puri and Chaat in Etobicoke, Toronto",
  meta: {
    siteUrl: "https://example.com",
    defaultTitle: "Radhe Pani Puri | Pani Puri & Chaat in Etobicoke, Toronto",
    defaultDescription:
      "Radhe Pani Puri serves pani puri, chaat, and vegetarian Indian street food in Etobicoke, Toronto. View the menu, check hours, call, and get directions.",
  },
  images: {
    logo: "/images/logo.png",
    menuBoard: "/images/menu-board.png",
    gallery: [],
  },
  menuCategories: [
    {
      title: "Radhe's Signature",
      items: [
        {
          name: "Pani Puri (8 pcs)",
          price: "$6.00",
          description:
            "Indian style crispy puris served with your choice of two fillings: Aloo/Potato and Hot Ragda.",
          note:
            "Includes 5 signature flavored waters: Regular, Tika Mitha, Tikha, Garlic, and Mitha.",
        },
      ],
    },
    {
      title: "Takeout",
      items: [
        {
          name: "Pani Puri (15 pcs)",
          price: "$11.00",
          note:
            "Choose one filling: Potato or Hot Ragda. Choose any two waters: Regular, Tika Mitha, Tikha, Garlic, or Mitha.",
        },
      ],
    },
    {
      title: "Chaats",
      items: [
        { name: "Dahi Puri (8 pcs)", price: "$8.00", 
          description: "Crispy puris filled with potato and chana, topped with cooling yogurt (dahi), sweet-tangy and spicy chutney and sprinkled with sev, and coriander."
        },
        { name: "Ragda Puri (8 pcs)", price: "$6.00", 
          description: "Crispy puris topped with savory ragda (yellow peas curry), sweet-tangy and spicy chutneys, onion, and  finished with layer of fine sev."
        },
        { name: "Papdi Chat", price: "$8.00", 
          description: "Crunchy papdi layered with boiled potatoes, chickpeas, yogurt, and a drizzle of assorted chutneys, topped with sev, and special chat masala and corriander."
        },
        { name: "Sev Puri (8 pcs)", price: "$7.00", 
          description:"Crispy puris topped with potatoes, sweet-tangy chutneys, onion, and finished with a heavy layer of fine sev."
        },
        { name: "Masala Puri (8 pcs)", price: "$5.00", 
          description: "Crispy puris filled with potato filling, onion, coriander, and special chaat masala."
        },
        { name: "Raj Kachori", price: "$9.00", 
          description:"King of chaats! Large crispy deep-fried puri filled with lentils, potatoes, chickpeas, curd and a mix of sweet and spicy chutneys, topped with sev, and special chat masala and coriander."
        },
        { name: "Churma Plate", price: "$5.00", 
          description:"Crushed crispy puris mixed with green and red spice chutneys, aloo, onion, lemon, coriander, and special chat masala."
        },
        { name: "Ragda Bhel", price: "$8.00", 
          description:"Savory, tangy, and spicy mix of crushed papdi, chutneys, onion, and topped with hot, flavorful ragda."
         },
      ],
    },
    {
      title: "Special Drinks",
      items: [{ name: "COCO", price: "$5.00" }],
    },
  ] as MenuCategory[],
  notes: [
    "Takeout is available for everything.",
    "Pani puri takeout includes a selection of any 2 signature flavored waters.",
    "Onions are free upon request.",
  ],
  seoTargets: [
    "Radhe Pani Puri",
    "pani puri in Etobicoke",
    "chaat in Etobicoke",
    "Indian street food in Etobicoke",
    "vegetarian snacks in Etobicoke",
    "pani puri in Toronto",
  ],
};
