import { NavigationMenuDemo } from "./components/Nav";
import "./index.css";

export const metadata = {
  title: "Memory Box",
  description:
    "the pigeons in Pixel and Bytes. Durchstöbere die Webseite unserer vierköpfigen Band «the pigeons»",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html>
      <body>
        {children}
        <NavigationMenuDemo />
      </body>
    </html>
  );
}
