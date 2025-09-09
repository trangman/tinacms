import { createClient } from "tinacms/dist/client";
import { queries } from "./types";
export const client = createClient({ url: 'http://localhost:4001/graphql', token: '5ed2cae1079f8a59f5904f53fe0aeefc2313dc8f', queries,  });
export default client;
  