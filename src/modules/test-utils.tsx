import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

const wrapper: React.FC = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  )
}

export { wrapper }
