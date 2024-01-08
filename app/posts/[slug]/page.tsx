import React from "react";
import { gql } from "@apollo/client";
import { getClient } from "@faustwp/experimental-app-router";

export default async function Page() {
  const client = getClient();

  const { data } = await client.query({
    query: gql`
      query GetPostBySlug($slug: String!) {
        postBy(slug: $slug) {
          title
          content
        }
      }
    `,
  });

  return <div>{data.title}</div>;
}
