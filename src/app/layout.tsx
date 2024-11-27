import type { Metadata } from "next";
import "./globals.css";
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import { Container } from "@mui/material";
import { NavLinks } from "./ui/nav-links";

export const metadata: Metadata = {
  title: "SFP",
  description: "Sistema Folha Pagamento",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (

    <html lang="en">
      <body>
        
        <AppRouterCacheProvider>
        <NavLinks/>
          <Container maxWidth="lg" >
            {children}
          </Container>
        </AppRouterCacheProvider>

      </body>
    </html>
  );
}
