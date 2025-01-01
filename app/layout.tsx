import { hedvigLettersSans } from "@/app/ui/fonts";
import "@/app/ui/global.css";

import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    template: "%s | Acme Dashboard",
    default: "Acme Dashboard",
  },
  description: "The official Next.js Course Dashboard, built with App Router.",
  metadataBase: new URL("https://learnnextapp.vercel.app"),
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${hedvigLettersSans.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
