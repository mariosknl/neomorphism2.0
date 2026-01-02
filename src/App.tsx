import Button from "./components/Button";

function App() {
  return (
    <main>
      <h1>hello world</h1>
      <div className="space-x-2">
        <Button>Cancel</Button>
        <Button variant="primary">Click me</Button>
        <Button variant="destructive">Cancel</Button>
        <Button variant="warning">Cancel</Button>
        <Button variant="warning" disabled>
          Cancel
        </Button>
      </div>
    </main>
  );
}

export default App;
