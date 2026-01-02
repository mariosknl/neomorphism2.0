import Button from "./components/Button";

function App() {
  return (
    <main>
      <div className="space-x-2">
        <Button variant="primary" className="bg-amber-200">
          Click me
        </Button>
        <Button>Cancel</Button>
      </div>
    </main>
  );
}

export default App;
