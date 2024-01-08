import { gql } from "@apollo/client";
import { getClient } from "@faustwp/experimental-app-router";
import Link from "next/link";
import "@/faust.config.js";
import { FaustProvider } from "@faustwp/experimental-app-router/ssr";
export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <FaustProvider>{children}</FaustProvider>
      </body>
    </html>
  );
}
