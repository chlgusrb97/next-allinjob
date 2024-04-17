import "@/styles/globals.css";
import {
  HydrationBoundary,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import BottomAppBar from "@/components/BottomAppBar";
import RootLayout from "@/components/layout/RootLayout";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import type { AppProps } from "next/app";
import React, { useState } from "react";
import { RecoilRoot } from "recoil";

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
            <>
              <Component {...pageProps} />
              <BottomAppBar />
            </>
          </LayoutComponent>
        </HydrationBoundary>
        <ReactQueryDevtools initialIsOpen={false} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}
