import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import RootLayout from "@/components/layout/RootLayout";
import React from "react";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppProps) {
  let LayoutComponent = RootLayout;

  switch (pageProps.layout) {
    case "login": {
      LayoutComponent = React.Fragment;
      break;
    }
  }

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <LayoutComponent>
          <Component {...pageProps} />
        </LayoutComponent>
      </QueryClientProvider>
    </RecoilRoot>
  );
}
