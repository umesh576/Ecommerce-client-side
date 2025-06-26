"use client";
import AuthProvider from "@/context/auth.content";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

interface IProps {
  children: React.ReactNode;
}
const queryClient = new QueryClient();

const Provider: React.FC<IProps> = ({ children }) => {
  return (
    <QueryClientProvider client={queryClient}>
      <AuthProvider>
        <>{children}</>
      </AuthProvider>
    </QueryClientProvider>
  );
};

export default Provider;
