import { createClient } from "urql";

export const client = createClient({
    url: "https://vercel.saleor.cloud/graphql/",
});


