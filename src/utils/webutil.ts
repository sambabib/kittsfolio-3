export const webContainer = "max-w-full";

export const dateFunction = (): string => {
  const timezone: string = "Europe/London";
  const options: object = {
    timeZone: timezone,
    timeStyle: "short",
    hour12: false,
  };
  const newTime = new Date().toLocaleTimeString("en-Us", options);
  return newTime;
};

export const menuItems = [
  {
    item: "Projects",
  },
  {
    item: "Blog",
  },
  {
    item: "Contact",
  },
];
