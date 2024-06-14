//Interface Merging merges all the interfaces with same name

// Express Base
export interface Request {
  body: any;
}
// Express JSON
export interface Request {
  json: any;
}
// Our App
function handleRequest(req: Request) {
  req.body;
  req.json;
}

const req: Request = {
  body: "sd",
  json: "",
};
