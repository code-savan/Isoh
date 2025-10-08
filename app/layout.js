import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "800", "900"],
});

export const metadata = {
  title: "P.A. ISOH LEGAL CONSULTANTS | Precious Amaka Isoh",
  description: "Professional legal services by Precious Amaka Isoh. Expert legal consultation and representation for individuals and businesses.",
  image: "/logo.png",
  icons: {
    icon: "/logo.png",
  },
  keywords: "lawyer, legal consultant, legal services, Precious Amaka Isoh, P.A. ISOH LEGAL CONSULTANTS",
  authors: [{ name: "Precious Amaka Isoh" }],
  openGraph: {
    title: "P.A. ISOH LEGAL CONSULTANTS",
    description: "Professional legal services by Precious Amaka Isoh",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
