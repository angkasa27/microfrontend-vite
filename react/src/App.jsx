import React, { Suspense } from "react";

// Dynamically import the Vue Microfrontend Button component
const VueButton = React.lazy(() => import("reactRemote/App"));

function App() {
  return (
    <div>
      <h1>React Host Application</h1>
      <Suspense fallback={<div>Loading Microfrontend...</div>}>
        <VueButton />
      </Suspense>
    </div>
  );
}

export default App;