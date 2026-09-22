export const partnershipsMeta = {
  title: "Become NexEco AI Partner",
  description:
    "Join NexEco AI Technology, Referral, or Reseller Partner Program and unlock new revenue opportunities. See more.",
};

export const partnershipsHero = {
  headingBefore: "Partner with ",
  headingAccent: "NexEco AI",
  body: "Let’s grow together. Building integrations, expanding your network, or reselling AI solutions to your clients? Find the right partnership program for you and unlock new revenue streams.",
  cta: { label: "Become a Partner", href: "#form" },
  imageAlt: "partners program hero",
};

export const partnershipsPrograms = {
  heading: "Find your partnership program",
  intro: "There’s a right partnership program for everyone.",
  cta: { label: "Apply now", href: "#form" },
  cards: [
    {
      id: "technology",
      icon: "screens" as const,
      iconBg: "#D9E0FF",
      iconClass: "text-accent",
      title: "Technology partner",
      body: "Build seamless integrations or co-create AI solutions with NexEco AI that your customers will love – and scale at the same time.",
    },
    {
      id: "referral",
      icon: "messages" as const,
      iconBg: "#E3FCEC",
      iconClass: "text-[#0C7E67]",
      title: "Referral partner",
      body: "Earn rewards for qualified leads. You make the intro, we manage the relationship, and you get rewards for successful conversions.",
    },
    {
      id: "reseller",
      icon: "handshake" as const,
      iconBg: "#C0D8FA",
      iconClass: "text-[#2560B3]",
      title: "Reseller partner",
      body: "Drive revenue by reselling NexEco AI to your customers. Benefit from competitive margins, training resources, and co-marketing support.",
    },
  ],
};

export const partnershipsHow = {
  eyebrow: "Technology partner",
  heading: "How we work together",
  cards: [
    {
      id: "integrate",
      image: "integrate" as const,
      alt: "integrate with NexEco AI",
      title: "Integrate with NexEco AI",
      body: "Connect your product with NexEco AI and benefit from AI built for productivity.",
      theme: "dark" as const,
      className: "bg-[linear-gradient(180deg,#262B30_0%,#5938CB_100%)]",
    },
    {
      id: "expand",
      image: "expand" as const,
      alt: "expand your product capabilities",
      title: "Expand your product capabilities",
      body: "Combine your expertise with our AI platform to extend what your product can do.",
      theme: "light" as const,
      className: "bg-[linear-gradient(180deg,#B9B5F5_0%,#EFF4F8_100%)]",
    },
    {
      id: "cocreate",
      image: "cocreate" as const,
      alt: "co create custom AI solutions",
      title: "Co-create custom AI solutions",
      body: "Work with our experts to build and launch solutions for your specific needs.",
      theme: "light" as const,
      className: "bg-muted",
    },
  ],
};

export const partnershipsWhy = {
  eyebrow: "Referral and reseller partners",
  heading: "Why partner with NexEco AI?",
  items: [
    {
      id: "wave",
      icon: "sparkles" as const,
      title: "Ride the AI wave",
      body: "Promote a platform built for team productivity. NexEco AI is where teams go to work smarter – and it’s a product your audience already wants.",
    },
    {
      id: "rewards",
      icon: "trophy" as const,
      title: "Earn program rewards",
      body: "Access attractive commissions and sustained value through our clear partner program with shared wins and collective growth.",
    },
    {
      id: "experts",
      icon: "users" as const,
      title: "Promote top-industry product created by experts",
      body: "NexEco AI was created by the founders of NordVPN and backed by leading investors, powered by years of industry experience.",
    },
    {
      id: "support",
      icon: "megaphone" as const,
      title: "Get marketing and co-selling support",
      body: "Benefit from co-marketing opportunities, sales collateral, and collaborative go-to-market strategies that accelerate your sales cycle.",
    },
  ],
};

export const partnershipsForm = {
  eyebrow: "Become a partner",
  heading: "Want to partner with NexEco AI?",
  body: "Fill out the form, and our Partner Manager will reach out to you.",
  submit: "Submit partner application",
  requiredNote: "* Required",
  fields: [
    {
      name: "fullName",
      label: "Your name*",
      placeholder: "Your name",
      type: "text",
      required: true,
      autoComplete: "name",
    },
    {
      name: "email",
      label: "Your email*",
      placeholder: "email@email.com",
      type: "email",
      required: true,
      autoComplete: "email",
    },
    {
      name: "companyName",
      label: "Company name*",
      placeholder: "Company name",
      type: "text",
      required: true,
      autoComplete: "organization",
    },
    {
      name: "website",
      label: "Website*",
      placeholder: "www.company.com",
      type: "text",
      required: true,
      autoComplete: "url",
    },
    {
      name: "partnershipType",
      label: "How do you want to partner with NexEco AI?",
      placeholder: "How do you want to partner with NexEco AI?",
      type: "text",
      required: false,
      autoComplete: "off",
    },
  ],
  message: {
    name: "message",
    label: "Your message to us (optional)",
    placeholder: "How do you want to partner with NexEco AI?",
  },
} as const;
