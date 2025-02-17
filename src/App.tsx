import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter } from "react-router-dom";
import RouterConfig from "./router/RouterConfig";
import GlobalStyles from "./styles/globalStyles";



const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <GlobalStyles />
      <BrowserRouter>
        <RouterConfig />
      </BrowserRouter>
    </QueryClientProvider>
  );
}


export default App;
