import type { Metadata } from "next";

import "./globals.css";



export const metadata: Metadata = {
  title: "RM Event Peokorraldus",
  description: "RM Event Peokorraldus, usaldusväärne partner meeldejäävate ürituste loomisel.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
