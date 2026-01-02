import Button from "./components/Button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./components/Card";
import NeuCheckbox from "./components/Checkbox";
import Input from "./components/Input";
import Nav from "./components/Nav";
import NeuProgress from "./components/Progress";
import NeuSlider from "./components/Slider";
import NeuSwitch from "./components/Switch";

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
              {/* <NeuSwitch /> */}
              {/* <NeuCheckbox /> */}
              <NeuSlider variant={"default"} />
            </CardFooter>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Progress bars</CardTitle>
              <CardDescription>Simple vertical/horizontal bars</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <NeuProgress max={100} value={25} />
              <NeuProgress max={100} value={50} />
              <NeuProgress max={100} value={75} />
            </CardContent>
            <CardFooter className="space-y-2">
              <Input />
              <Input />
            </CardFooter>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default App;
