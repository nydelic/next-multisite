import ProjectAnalytics from "@/lib/ProjectAnalytics";

export const metadata = {
  title: "The Pigeons",
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
        <ProjectAnalytics project="the-pigeons" />
      </body>
    </html>
  );
}
