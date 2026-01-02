import Button from "./components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
import Nav from "./components/Nav";

function App() {
  return (
    <main>
      <Nav />
      <div className="space-x-2">
        <Button>Cancel</Button>
        <Button variant="primary">Click me</Button>
        <Button variant="destructive">Cancel</Button>
        <Button variant="warning">Cancel</Button>
        <Button variant="warning" disabled>
          Cancel
        </Button>

        <div className="m-6">
          <Card>
            <CardHeader>
              <CardTitle>This is my title</CardTitle>
              <CardDescription>This is the price of my product</CardDescription>
            </CardHeader>
            <CardContent>
              <ul>
                <li>this is one benefit asdf asdfasdf</li>
                <li>this is one benefit asdfwedf</li>
                <li>this is one benefit</li>
              </ul>
            </CardContent>
            <CardFooter>
              <Button variant="primary">Purchase now</Button>
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default App;
