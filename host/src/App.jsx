import React, { Suspense } from "react";

const Counter = React.lazy(() =>
  import("counterRemote/Counter")
);

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Host Application</h1>

      <Suspense fallback={<h3>Loading Counter...</h3>}>
        <Counter />
      </Suspense>
    </div>
  );
}

export default App;
