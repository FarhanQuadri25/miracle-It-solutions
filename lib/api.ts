import ky from "ky";

const api = ky.create({
  prefix: "/api",
});

export { api };
