import React from 'react';
import ListContainer from './listContainer';
import { QueryClient, QueryClientProvider } from "react-query";

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <div className="App">
        <ListContainer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
