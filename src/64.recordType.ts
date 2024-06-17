type Persons = Record<string, { name: String; age: number }>;

const persons: Persons = {};
persons["1"] = {
  name: "x",
  age: 1,
};

type personsVerbose = { [key: string]: { name: String; age: number } };

type roles = "admin" | "owner";

let pplWithRoles: Record<roles, string[]> = {
  admin: ["q", "w"],
  owner: ["s"],
};

//////////////////////////////
type PageInfo = {
  id: string;
  title: string;
};
type PagesVerbose = {
  home: PageInfo;
  services: PageInfo;
  about: PageInfo;
  contact: PageInfo;
};
type Pages = Record<
  "home" | "services" | "about" | "contact",
  {
    id: string;
    title: string;
  }
>;
