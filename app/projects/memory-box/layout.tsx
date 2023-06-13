import ProjectAnalytics from "@/lib/ProjectAnalytics";
import { NavigationMenuDemo } from "./components/Nav";
import "./index.css";

export const metadata = {
  title: "Memory Box",
  description: "Make memories together",
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
        <ProjectAnalytics project="memory-box" />
      </body>
    </html>
  );
}
