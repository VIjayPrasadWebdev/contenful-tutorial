import * as contentful from "contentful";
export let client = contentful.createClient({
  space: process.env.SPACE_ID,
  accessToken: process.env.ACCESS_TOKEN,
});
