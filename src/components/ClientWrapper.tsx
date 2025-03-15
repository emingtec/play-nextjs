"use client";

import { useEffect, useState } from "react";
import { SessionProvider } from "next-auth/react";
import { ThemeProvider } from "next-themes";
import { NextIntlClientProvider } from "next-intl";
import ToasterContext from "@/app/api/contex/ToasetContex";
import PreLoader from "@/components/Common/PreLoader";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientWrapper({
                                        children,
                                        locale,
                                      }: {
  children: React.ReactNode;
  locale: string;
}) {
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1000);
  }, []);

  return (
    <>
      {loading ? (
        <PreLoader />
      ) : (
        <NextIntlClientProvider locale={locale}>
          <SessionProvider>
            <ThemeProvider attribute="class" enableSystem={false} defaultTheme="light">
              <ToasterContext />
              <Header />
              {children}
              <Footer />
              <ScrollToTop />
            </ThemeProvider>
          </SessionProvider>
        </NextIntlClientProvider>
      )}
    </>
  );
}
