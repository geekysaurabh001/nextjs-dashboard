import { hedvigLettersSans } from "@/app/ui/fonts";
import "@/app/ui/global.css";

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${hedvigLettersSans.className} antialiased`}>{children}</body>
    </html>
  );
}
