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
import { TabsList, TabsPanel, TabsRoot, TabsTab } from "./components/Tabs";

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
              <NeuProgress variant={"secondary"} max={100} value={25} />
              <NeuProgress max={100} value={50} />
              <NeuProgress max={100} value={75} />
            </CardContent>
            <CardFooter className="space-y-2">
              <Input />
              <Input />
            </CardFooter>
          </Card>

          <Card>
            <CardHeader>
              <TabsRoot>
                <TabsList className="space-x-4">
                  <TabsTab value="overview">Overview</TabsTab>
                  <TabsTab value="user">User Info</TabsTab>
                </TabsList>
                <TabsPanel value={"overview"}>
                  <h2>This is overview</h2>
                  <p>this is more info about the overview</p>
                </TabsPanel>
                <TabsPanel value={"user"}>
                  <h2>This is user</h2>
                  <p>this is more info about the user</p>
                </TabsPanel>
              </TabsRoot>
            </CardHeader>
          </Card>
        </div>
      </div>
    </main>
  );
}

export default App;
