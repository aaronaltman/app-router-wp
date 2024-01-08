import { gql } from "@apollo/client";
import { getClient } from "@faustwp/experimental-app-router";
import Link from "next/link";
import React from "react";

export default async function HeaderA() {
  const client = await getClient();

  const { data } = await client.query({
    query: gql`
      query GetLayout {
        generalSettings {
          title
          description
        }
        primaryMenuItems: menuItems(where: { location: PRIMARY }) {
          nodes {
            id
            label
            uri
          }
        }
        footerMenuItems: menuItems(where: { location: FOOTER }) {
          nodes {
            id
            label
            uri
          }
        }
      }
    `,
  });
  return (
    <header>
      <ul>
        {data.primaryMenuItems.nodes.map((node) => (
          <li>
            <Link href={node.uri}>{node.label}</Link>
          </li>
        ))}
      </ul>
    </header>
  );
}
