import {
  QueryClient,
  QueryClientProvider,
  HydrationBoundary,
} from "@tanstack/react-query";
import "@/styles/globals.css";

import type { AppProps } from "next/app";
import { RecoilRoot } from "recoil";
import RootLayout from "@/components/layout/RootLayout";
import React, { useState } from "react";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";

export default function App({ Component, pageProps }: AppProps) {
  const [queryClient] = useState(new QueryClient());

  let LayoutComponent = RootLayout;

  switch (pageProps.layout) {
    case "login": {
      LayoutComponent = React.Fragment;
      break;
    }
    case "signup": {
      LayoutComponent = React.Fragment;
      break;
    }
  }

  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <HydrationBoundary state={pageProps.dehydratedProps}>
          <LayoutComponent>
            <Component {...pageProps} />
          </LayoutComponent>
        </HydrationBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
