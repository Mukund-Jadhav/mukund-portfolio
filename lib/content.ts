export const site = {
  name: "Mukund Jadhav",
  role: "Product Designer, AI and mobility",
  location: "Nashik, India",
  photo: "/mukundJ.png", // e.g. "/mukund.jpg" (put the file in /public)
  cv: "/Mukund_Jadhav_CV.pdf", // add this PDF to /public once the final resume is done
  email: "mukundrajput7@gmail.com",
  // Check these two match your live profiles exactly
  linkedin: "https://www.linkedin.com/in/mukundsingh-jadhav-b2892892",
  behance: "https://www.behance.net/Mukundsinghjadhav",
};

export type Section = { heading: string; body: string[] };
export type Project = {
  slug: string;
  short: string;
  category: string;
  result: string;
  title: string;
  tagline: string;
  status: string;
  role: string;
  platform: string;
  image?: string; // e.g. "/sia-hero.png" placed in /public
  sections: Section[];
};

// Anything in [square brackets] is a note to yourself. Replace it before publishing.
export const projects: Project[] = [
  {
    slug: "sia-conversational-booking",
    result: "Company-reported 25% rise in AI-driven bookings",
    short: "SIA",
    category: "AI car rental booking",
    title: "SIA: booking a rental car by chatting",
    tagline:
      "I designed the chat-based booking flow for SelfDrive, the UAE's first multilingual conversational AI car rental system.",
    status: "Live in production",
    role: "UI/UX design, Figma to live UI fixes",
    platform: "Web, PWA, mobile",
    sections: [
      {
        heading: "The problem",
        body: [
          "Booking a rental car meant a long form: duration, car, dates, locations, services, payment, deposit, billing and KYC. Sales and support kept hearing where customers got stuck.",
          "I work from India and the product runs in the UAE, so I didn't interview users myself. The CTO and project manager passed me what sales and support were hearing, and I designed from those briefs.",
        ],
      },
      {
        heading: "What I designed",
        body: [
          "A guided chat that asks for one thing at a time and shows rich components inside the conversation: car carousels, insurance comparison cards, an in-chat personal details form, a milestone tracker and a booking summary.",
          "I mapped the existing journey into seven conversational stages and designed every screen and state in Figma.",
        ],
      },
      {
        heading: "Decisions I made",
        body: [
          "[Add: why chat instead of a shorter form]",
          "[Add: why a milestone tracker instead of a percentage bar]",
          "[Add: one request from the CTO or PM you pushed back on, and what you did instead]",
        ],
      },
      {
        heading: "My role",
        body: [
          "I designed the full flow in Figma, start to end. A developer built it in React using Claude Code from my designs. I fixed UI issues myself by adjusting Tailwind CSS in the code, and guided the developer to match components to the design.",
        ],
      },
      {
        heading: "Outcome",
        body: [
          "SelfDrive reported a 25% increase in AI-driven bookings since SIA's soft launch. SIA supports 40+ languages and was trained on more than 2.5 million user sessions. These are company figures from published coverage, not my results alone. Exact booking numbers are confidential.",
          "SelfDrive was also named Best Mobility App of the Year 2025 at the Total Fleet Awards. [Confirm this wording against the award page before publishing]",
        ],
      },
      {
        heading: "What I'd do differently",
        body: [
          "Set up a direct feedback loop with UAE users instead of relying only on relayed feedback.",
          "Write a design QA checklist for AI-generated code, since I was catching drift by hand.",
          "Document how each conversation intent maps to a UI component, so handoffs don't depend on memory.",
        ],
      },
    ],
  },
  {
    slug: "ride-hailing-mvp",
    result: "MVP ready, not yet launched",
    short: "Ride-hailing app",
    category: "0 to 1 MVP",
    title: "A ride-hailing app, designed from zero",
    tagline:
      "SelfDrive wanted its own ride-hailing app for the UAE. I researched the market and designed the MVP.",
    status: "MVP ready, not yet launched",
    role: "Research, wireframes, UI design",
    platform: "Android, iOS",
    sections: [
      {
        heading: "The brief",
        body: [
          "There was no earlier version to improve. I researched how ride-hailing works in the UAE, using AI tools such as ChatGPT and Perplexity, and used that to shape the product.",
        ],
      },
      {
        heading: "What I designed",
        body: [
          "The core booking flow, business profiles and account management. [Add 3 or 4 screens and one decision you made on each]",
        ],
      },
      {
        heading: "Status",
        body: [
          "The MVP is ready to ship and hasn't launched yet, so I'm not claiming usage numbers.",
        ],
      },
    ],
  },
  {
    slug: "sahyadri-packaging-and-brand",
    result: "30+ product SKUs, 13 retail outlets",
    short: "Sahyadri Farms",
    category: "Packaging and brand",
    title: "Packaging and brand for a farmer-owned company",
    tagline:
      "Packaging, retail branding and print for Sahyadri Farms, one of India's largest grape exporters.",
    status: "Shipped",
    role: "Graphic design",
    platform: "Print, retail, digital",
    sections: [
      {
        heading: "The work",
        body: [
          "I updated the design across 30+ product SKUs, designed the seed-to-market journey for produce such as banana, pomegranate and grapes, and created branding for 13 retail outlets.",
          "I also produced daily offer pamphlets, standees, banners, the in-house magazine and the company's code of conduct, and worked with an outside agency to keep the brand consistent.",
        ],
      },
      {
        heading: "Pieces to show",
        body: ["[Add 6 to 8 images, grouped as packaging, retail and print, with one line of context each]"],
      },
    ],
  },
];

export const summary =
  "Product designer with 20 years across publishing, graphic design, teaching and digital products. I designed SIA, a conversational booking system live in the UAE, and I work in the code so what ships matches the design.";

// Years only for now. Add the earlier-career dates after HDFC and Tool-e-byte are confirmed.
export const experience = [
  { years: "2023 - Now", company: "SelfDrive", place: "Nashik", title: "Senior UI/UX and Web Designer",
    bullets: [
      "Designed SIA, the conversational booking flow, live in the UAE",
      "Redesigned the car rental app and designed a ride-hailing MVP from zero",
      "Led a 9-country website redesign with new admin tools for extensions, CRM and credit",
      "Built the design system and fix UI in code with Tailwind CSS",
    ] },
  { years: "2022 - 2023", company: "Virtual Construction Solution | iFieldSmart", place: "Nashik", title: "Senior UI/UX Designer",
    bullets: [
      "Designed dashboards, icons and product flows for a construction and BIM platform",
      "Researched US construction workflows to improve BIM modelling usability",
      "Built the designs in HTML and CSS",
    ] },
  { years: "2021 - 2022", company: "Sahyadri Farms", place: "Nashik", title: "Senior Graphic Designer",
    bullets: [
      "Updated packaging across 30+ product SKUs",
      "Created branding for 13 retail outlets",
      "Produced daily offer pamphlets, standees, banners and the in-house magazine",
    ] },
  { years: "2019 - 2021", company: "Arena Animation", place: "Pune", title: "Graphic and Web Design Faculty",
    bullets: [
      "Taught graphic design, web design and UI/UX to batches of 20 to 30 students",
      "Completed 100 online classes in 2020 and received Arena's Centurions certificate",
    ] },
  { years: "Earlier career", company: "Datamatics and Tool-e-byte", place: "Nashik", title: "Publishing and web production lead",
    bullets: [
      "Built XML and ePub pipelines for publishers including Sage Publications and LexisNexis",
      "Led teams of four to five and cut one 6-month project to 3 months",
    ] },
];

export const howIWork = [
  { label: "Whole flow", text: "I design every screen and state in Figma before a developer starts, so nobody has to guess." },
  { label: "Checked in code", text: "I read the code, fix CSS myself and show developers where the build drifted from the design." },
  { label: "AI with review", text: "I use AI to speed up research and code, then check the result against the design and the user's task." },
];

export const skills = [
  { label: "Design", text: "Figma, design systems, prototyping, UX research, wireframing" },
  { label: "Code", text: "HTML, CSS, Tailwind CSS, JavaScript, reading and fixing React UI" },
  { label: "AI workflow", text: "Claude, Cursor, ChatGPT, Perplexity, v0, Lovable" },
  { label: "Visual", text: "Photoshop, Illustrator, CorelDRAW" },
];

export const education = [{ years: "2005", title: "Bachelor of Commerce", school: "University of Mumbai" }];

export const certifications = [
  { years: "2023", title: "UX Design Mastercamp (Cohort II)", school: "Masters' Union" },
  { years: "2025", title: "Ethics in the Age of Generative AI", school: "LinkedIn Learning" },
];

export const languages = "English (fluent), Hindi (native), Marathi (native)";