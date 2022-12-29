import { SessionProvider } from "next-auth/react";
import { QueryClient, QueryClientProvider } from "react-query";
import Layout from "../components/layout";
import "../styles/globals.css";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}) {
  const queryClient = new QueryClient();
  return (
    <Layout>
      <SessionProvider session={session}>
        <QueryClientProvider client={queryClient}>
          <Component {...pageProps} />
        </QueryClientProvider>
      </SessionProvider>
    </Layout>
  );
}
