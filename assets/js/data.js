// Site content. Edit this file to update the website.
//
// HOW TO ADD A PROJECT: copy one object in the "projects" array below and change it.
//   id          unique, lowercase-with-dashes
//   title, description
//   highlights  optional list of short bullet points
//   category    list of labels; the project filter buttons are built from these
//   techStack   list of tech tags
//   art         "code" | "generic"  (placeholder illustration)
//   image       optional screenshot path, e.g. "assets/img/projects/my-site.jpg" (replaces the illustration)
//   links       optional { "live": "https://...", "code": "https://..." }
window.CV = {
  "profile": {
    "name": "Aljoša Dmitrović",
    "initials": "AD",
    "title": "Backend / .NET Developer",
    "location": "Novi Sad, Serbia",
    "yearsOfExperience": "7+",
    "summary": "I am an experienced back-end developer with over 7 years of experience and a passion for software functionality. I enjoy solving complex problems.",
    "hobbies": [
      "OCR races",
      "Rubik's cubes",
      "Chess"
    ],
    "languages": [
      "Serbian",
      "English"
    ],
    "workStatus": {
      "citizenship": "EU Citizen"
    },
    "photo": "assets/img/profile.jpg"
  },
  "theme": {
    "name": "Deep Teal & Amber",
    "light": {
      "bg": "#F6F9F9",
      "surface": "#FFFFFF",
      "text": "#0F1E24",
      "muted": "#4E6168",
      "primary": "#0B6E6D",
      "secondary": "#9A5414"
    },
    "dark": {
      "bg": "#0B1417",
      "surface": "#13222A",
      "text": "#E6F0F0",
      "muted": "#94A8AE",
      "primary": "#2EC4B6",
      "secondary": "#F4A259"
    }
  },
  "links": {
    "email": "dmitrovicaljosa@gmail.com",
    "linkedin": "https://www.linkedin.com/in/aljosad/"
  },
  "experience": [
    {
      "id": "sterling",
      "company": "Sterling Trading Tech",
      "product": "Next Generation Platform",
      "role": "Senior Software Developer",
      "start": "2024-06",
      "end": null,
      "domain": "Trading",
      "context": "Modular trading platform built as independently deployable .NET microservices.",
      "bullets": [
        "Built and maintained REST APIs for the core trading service, with real-time updates via SignalR and mobile push notifications via Firebase",
        "Developed the configuration and administration API, integrating Keycloak for identity, roles and access management (OIDC/JWT)",
        "Containerized and deployed services with Docker Compose and Ansible through GitLab CI/CD pipelines, backed by xUnit tests",
        "Worked within a microservices architecture powering stock trading workflows in a regulated, high-reliability environment"
      ],
      "techStack": [
        ".NET 9/10",
        "C#",
        "ASP.NET Core Web API",
        "Entity Framework Core",
        "Keycloak",
        "MySQL",
        "Serilog",
        "xUnit",
        "Docker",
        "Ansible",
        "GitLab CI/CD",
        "RBAC",
        "Firebase",
        "SignalR"
      ],
      "bulletsCv": [
        "Built and maintained REST APIs for the core trading service, including mobile push notifications via Firebase and real-time updates with SignalR",
        "Developed a configuration and administration API integrated with Keycloak for identity, roles, and access management (OIDC/JWT)",
        "Containerized and deployed services using Docker Compose and Ansible, with GitLab CI/CD pipelines and xUnit test coverage",
        "Worked within a microservices architecture supporting stock trading workflows in a regulated, high-reliability environment"
      ],
      "companyInitials": "ST",
      "employer": "TIAC"
    },
    {
      "id": "vega-iwg",
      "company": "Vega IT",
      "product": "International Workspace Group",
      "role": "Software Developer",
      "start": "2021-07",
      "end": "2024-05",
      "domain": "Booking",
      "context": "Backend services behind search, availability and bookings across International Workspace Group's workspace products.",
      "bullets": [
        "Contributed to scalable backend services for high-volume search, availability queries and booking orchestration across multiple workspace products",
        "Supported end-to-end booking flows, including generation of legally binding agreements and contracts",
        "Worked on distributed backend components integrated with search and cloud infrastructure"
      ],
      "techStack": [
        ".NET Core",
        "C#",
        "Azure Functions",
        "GraphQL",
        "Elasticsearch",
        "Azure Cloud Services",
        "REST",
        "Azure DevOps CI/CD"
      ],
      "bulletsCv": [
        "Contributed to scalable backend services for high-volume search, availability queries, and booking orchestration across multiple workspace products",
        "Supported end-to-end booking flows, including generation of legally binding agreements and contracts",
        "Worked on distributed backend components integrated with search and cloud infrastructure"
      ],
      "companyInitials": "VIT"
    },
    {
      "id": "vega-internal",
      "company": "Vega IT",
      "product": "Internal project",
      "role": "Software Developer",
      "start": "2023-09",
      "end": "2023-12",
      "domain": "Internal tooling",
      "context": "Internal workforce management platform covering onboarding, access control and HR notifications.",
      "bullets": [
        "Implemented employee onboarding, role-based access control and organizational role management",
        "Designed RESTful APIs and the persistence layer for internal workforce management",
        "Automated email notifications for HR events: account creation, role changes and status updates"
      ],
      "techStack": [
        "Java",
        "Spring Boot",
        "Spring Security",
        "Spring Data JPA",
        "Hibernate",
        "MySQL",
        "REST",
        "Maven",
        "SMTP"
      ],
      "bulletsCv": [
        "Implemented employee onboarding, role-based access control, and organizational role management",
        "Built automated email notifications for HR events (account creation, role changes, status updates)",
        "Designed RESTful APIs and persistence layer for internal workforce management"
      ],
      "companyInitials": "VIT"
    },
    {
      "id": "fsd",
      "company": "FSD",
      "product": "Savacoop & Dr Techno",
      "role": "Software Developer",
      "start": "2021-03",
      "end": "2021-07",
      "domain": "Retail",
      "context": "Reporting, data processing and database work for the business units of Savacoop & Dr Techno.",
      "bullets": [
        "Optimized SQL, stored procedures and database design for more reliable data flow between services and the database",
        "Developed and maintained backend and database layers for multi-unit retail operations",
        "Implemented reporting, data processing and operational workflows across business units",
        "Also contributed as product manager and business analyst, working on requirements and delivery"
      ],
      "techStack": [
        ".NET",
        "MariaDB",
        "PL/SQL",
        "REST",
        "Stored procedures",
        "SQL optimization",
        "Database design"
      ],
      "bulletsCv": [
        "Developed and maintained backend and database layers for multi-unit retail operations",
        "Implemented reporting, data processing, and operational workflows across business units",
        "Optimized SQL, stored procedures, and database design to improve reliability and data flow between services and the database",
        "Also contributed as product manager and business analyst on requirements and delivery"
      ],
      "companyInitials": "FSD"
    },
    {
      "id": "fma",
      "company": "FMA – First Media Advanced",
      "product": "Inery",
      "role": "Team Lead, Software Developer",
      "start": "2020-02",
      "end": "2021-01",
      "domain": "Blockchain",
      "context": "Core blockchain logic and decentralized storage in the EOS-based Inery ecosystem.",
      "bullets": [
        "Led development of decentralized storage and cryptographic data handling",
        "Contributed to core blockchain logic and smart data handling in an EOS-based ecosystem",
        "Worked on immutable data write/read flows across a distributed peer-to-peer network"
      ],
      "techStack": [
        "C++",
        "EOS",
        "Smart contracts",
        "Distributed systems",
        "P2P architecture"
      ],
      "bulletsCv": [
        "Contributed to core blockchain logic and smart data handling in an EOS-based ecosystem",
        "Worked on immutable data write/read flows across a distributed peer-to-peer network",
        "Led development efforts on decentralized storage and cryptographic data handling"
      ],
      "companyInitials": "FMA"
    },
    {
      "id": "nf-innova",
      "company": "NF Innova",
      "product": "iBanking (Raiffeisen, Societe, Halk, Aik, uBank)",
      "role": "Software Developer",
      "start": "2019-06",
      "end": "2019-09",
      "domain": "Banking",
      "context": "Backend development for digital banking services at five banks.",
      "bullets": [
        "Worked on authentication, authorization and secure handling of sensitive financial data",
        "Implemented RESTful APIs and database integration focused on reliability and banking workflow optimization",
        "Contributed to backend development for multi-bank digital banking services"
      ],
      "techStack": [
        ".NET (C#)",
        "ASP.NET",
        "SQL Server",
        "Entity Framework",
        "REST",
        "Stored procedures"
      ],
      "bulletsCv": [
        "Contributed to backend development for multi-bank digital banking services",
        "Worked on authentication, authorization, and secure handling of sensitive financial data",
        "Implemented RESTful APIs and database integration with focus on reliability and banking workflow optimization"
      ],
      "companyInitials": "NFI"
    }
  ],
  "education": [
    {
      "degree": "Bachelor of Software Engineering",
      "institution": "Faculty of Technical Sciences",
      "start": "2016",
      "end": "2020"
    },
    {
      "degree": "Informatics",
      "institution": "Gimnazija Svetozar Marković",
      "start": "2012",
      "end": "2016"
    }
  ],
  "other": [
    "Developed software for a bowling competition",
    "SQL demonstrator",
    "Managed freelance projects for two years",
    "Technology mentor, including the Student Mentorship Program"
  ],
  "projects": [
    {
      "id": "bowling",
      "title": "Bowling Center Management System",
      "description": "In-house system for a bowling center. Built the UI for the lane TV displays and the control TVs. All lane and scoring data was exchanged over an RS-485 serial bus, bridged to the PC through an RS-485-to-USB converter.",
      "highlights": [
        "Lane TV display UI",
        "Control TV UI for operators",
        "RS-485 serial data link via RS-485-to-USB bridge"
      ],
      "category": [
        "Hardware integration",
        "Full-stack"
      ],
      "techStack": [
        ".NET",
        "React",
        "RS-485",
        "Serial communication"
      ],
      "links": {},
      "year": null,
      "art": "code"
    },
    {
      "id": "blackjack021",
      "title": "Black Jack 021 Barbershop",
      "description": "Website for a premium barbershop in Novi Sad: service menu, appointment booking and the shop's location, in Serbian and responsive on every device.",
      "highlights": [
        "Service menu with one-tap booking via WhatsApp",
        "Embedded Google Maps location and contact details",
        "Links to the shop's iOS and Android booking app"
      ],
      "category": [
        "Frontend",
        "Client work"
      ],
      "techStack": [
        "React",
        "Vite",
        "Radix UI"
      ],
      "art": "barber",
      "links": {
        "live": "https://www.blackjack021.com/"
      },
      "image": "assets/img/projects/blackjack021.jpg"
    },
    {
      "id": "freelance",
      "title": "Freelance Projects",
      "description": "Owned and ran my own company for two years, working as an IT consultant.",
      "category": [
        "Freelance"
      ],
      "techStack": [
        "Project Management",
        "IT Consulting",
        "Business Analysis",
        "Requirements Gathering",
        "Client Communication"
      ],
      "links": {},
      "art": "code"
    },
    {
      "id": "premium-gaming-b2b",
      "title": "Premium Gaming B2B Portal",
      "description": "B2B ordering portal for Premium Gaming's business partners: companies browse the catalog, manage carts and place orders, while admins import products from Excel and review account change requests.",
      "highlights": [
        "Catalog with categories, subcategories and search",
        "Multiple carts per company and order history",
        "Excel product import with import history and admin panel"
      ],
      "category": [
        "Full-stack"
      ],
      "techStack": [
        "NestJS",
        "Prisma",
        "PostgreSQL",
        "React",
        "Vite",
        "Tailwind CSS"
      ],
      "art": "code",
      "image": "assets/img/projects/premium-gaming-b2b.jpg",
      "links": {}
    }
  ],
  "skills": {
    "Languages": [
      "C#",
      "Java",
      "C++",
      "SQL",
      "PL/SQL"
    ],
    "Frameworks": [
      "ASP.NET Core",
      "ASP.NET",
      "Entity Framework Core",
      "Spring Boot",
      "Spring Security",
      "Spring Data JPA",
      "Hibernate",
      "React",
      "SignalR",
      "xUnit",
      "Serilog"
    ],
    "Data": [
      "SQL Server",
      "MySQL",
      "MariaDB",
      "Elasticsearch",
      "Stored procedures",
      "SQL optimization",
      "Database design"
    ],
    "Cloud & DevOps": [
      "Azure Functions",
      "Azure Cloud Services",
      "Azure DevOps CI/CD",
      "Docker",
      "Docker Compose",
      "Ansible",
      "GitLab CI/CD",
      "Firebase"
    ],
    "Security & Identity": [
      "Keycloak",
      "OIDC",
      "JWT",
      "RBAC",
      "Authentication & authorization"
    ],
    "Architecture": [
      "Microservices",
      "REST",
      "GraphQL",
      "Distributed systems",
      "P2P architecture",
      "Blockchain (EOS)",
      "RS-485 hardware integration"
    ]
  },
  "about": {
    "paragraphs": [
      "I'm a backend developer with 7+ years of experience and a passion for software that simply works. I enjoy untangling complex problems: designing APIs, shaping data flows and keeping distributed systems reliable.",
      "I've built software for regulated stock trading, multi-bank digital banking, workspace booking, retail operations and blockchain storage, mostly on .NET, with detours into Java and C++."
    ],
    "offline": "Away from the keyboard I run OCR (obstacle course) races, solve all kinds of Rubik's cubes and play a lot of chess."
  },
  "stats": [
    {
      "value": "7+",
      "label": "years in backend development"
    },
    {
      "value": "6",
      "label": "roles across 5 companies"
    },
    {
      "value": "5",
      "label": "industries: trading, banking, booking, retail, blockchain"
    }
  ],
  "expertise": [
    {
      "icon": "api",
      "title": "Backend & APIs",
      "description": "REST and GraphQL APIs, real-time updates and clean service boundaries on modern .NET.",
      "tech": [
        ".NET",
        "C#",
        "ASP.NET Core",
        "REST",
        "GraphQL",
        "SignalR"
      ]
    },
    {
      "icon": "cloud",
      "title": "Cloud, DevOps & Distributed Systems",
      "description": "Microservices that are containerized, automated and deployed through CI/CD pipelines.",
      "tech": [
        "Microservices",
        "Azure Functions",
        "Docker",
        "Ansible",
        "GitLab CI/CD",
        "Azure DevOps"
      ]
    },
    {
      "icon": "shield",
      "title": "Data & Security",
      "description": "Well-designed data layers and secure identity and access management for sensitive domains.",
      "tech": [
        "EF Core",
        "SQL Server",
        "MySQL",
        "Elasticsearch",
        "Keycloak",
        "OIDC / JWT"
      ]
    }
  ],
  "careerHighlights": [
    {
      "title": "Regulated trading",
      "text": "Senior developer on a stock trading platform built as .NET microservices"
    },
    {
      "title": "5 banks",
      "text": "Backend development for digital banking at Raiffeisen, Societe, Halk, Aik and uBank"
    },
    {
      "title": "Team lead",
      "text": "Led decentralized storage and cryptographic data handling at Inery"
    },
    {
      "title": "Mentor",
      "text": "Technology mentor in the Student Mentorship Program and SQL demonstrator"
    }
  ]
};
