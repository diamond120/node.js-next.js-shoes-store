import '../styles/globals.css';
import {QueryClient,QueryClientProvider} from "react-query";
import type { AppProps } from 'next/app';
import {Layout} from '../components/common';
import {ShoppingCartProvider} from "../context/shoppingCartContext";
const queryClient = new QueryClient()
function MyApp({ Component, pageProps }: AppProps) {
  return (
    <QueryClientProvider client={queryClient}>
   <ShoppingCartProvider>
   <Layout>
    <Component {...pageProps} />
  </Layout>
   </ShoppingCartProvider>
    </QueryClientProvider>
  )
}

export default MyApp
