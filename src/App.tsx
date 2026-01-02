import { Pause, Play, SkipBack, SkipForward } from "lucide-react";
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
import { useState } from "react";

function App() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedPlan, setsSlectedPlan] = useState("starter");

  return (
    <main>
      <Nav />
      {/* Hero Section */}
      <section className="max-w-4xl px-8 py-12 mx-auto text-center">
        <h1 className="text-xl md:text-3xl font-semibold tracking-tight">
          Beautiful components with neumorphic design
        </h1>
        <p className="mt-1 text-sm md:text-lg text-muted-foreground">
          Crafted with care and attention to detail. Built on top of Base UI
          with Tailwind CSS. Accessible, customizable and ready to user in your
          projects.
        </p>
      </section>

      <section className="flex flex-col md:flex-row items-start max-w-7xl mx-auto gap-8 my-12">
        <div className="flex-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Music Player</CardTitle>
              <CardDescription>
                Enjoy high quality music streaming
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-8 flex flex-col justify-center items-center">
                <img
                  className={`w-56 h-56 rounded-full shadow-raised border-4 border-border ${
                    isPlaying ? "animate-spin" : ""
                  }`}
                  alt="gorillaz"
                  src="https://www.normanrecords.com/artwork/medium/233/115233-gorillaz-gorillaz.jpg"
                />
                <div className="text-center space-y-2">
                  <CardTitle>Feel Good inc.</CardTitle>
                  <CardDescription>Gorillaz</CardDescription>
                </div>
                <div>
                  <NeuProgress className="min-w-xs" max={100} value={45} />
                  <div className="flex justify-between mt-2 text-xs text-muted-foreground">
                    <span>0:00</span>
                    <span>3:32</span>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-4">
                  <Button
                    aria-label="Previous Track"
                    size="icon"
                    shape={"circle"}
                    variant={"primary"}
                  >
                    <SkipBack className="size-4" />
                  </Button>
                  <Button
                    className="w-20 h-12"
                    size="icon"
                    shape={"circle"}
                    variant={"primary"}
                    aria-label={isPlaying ? "Pause" : "Play"}
                    onClick={() => setIsPlaying(!isPlaying)}
                  >
                    {isPlaying ? (
                      <Pause className="size-4" />
                    ) : (
                      <Play className="size-4" />
                    )}
                  </Button>
                  <Button
                    aria-label="Next Track"
                    size="icon"
                    shape={"circle"}
                    variant={"primary"}
                  >
                    <SkipForward className="size-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Upgrade your subscription</CardTitle>
              <CardDescription>
                You are currently on the free plan. Upgrade to the pro plan to
                get access to all features.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-1">
                <CardTitle>Plan</CardTitle>
                <CardDescription>
                  Select the plan that best fits your needs.
                </CardDescription>
                <div className="grid grid-cols-2 gap-4 mt-4">
                  <div
                    className={`flex flex-col p-4 rounded-lg cursor-pointer transition-all border-4 border-border duration-350 ${
                      selectedPlan === "starter"
                        ? "bg-primary/10 shadow-inset"
                        : "bg-background shadow-raised"
                    }`}
                    onClick={() => setsSlectedPlan("starter")}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <NeuCheckbox
                        id="starter-plan"
                        checked={selectedPlan === "starter"}
                      />
                      <span className="text-sm">Starter plan</span>
                    </div>
                  </div>

                  <div
                    className={`flex flex-col p-4 rounded-lg cursor-pointer transition-all border-4 border-border duration-350 ${
                      selectedPlan === "pro"
                        ? "bg-primary/10 shadow-inset"
                        : "bg-background shadow-raised"
                    }`}
                    onClick={() => setsSlectedPlan("pro")}
                  >
                    <div className="flex items-center space-x-2 mb-2">
                      <NeuCheckbox
                        id="starter-plan"
                        checked={selectedPlan === "pro"}
                      />
                      <span className="text-sm">Pro plan</span>
                    </div>
                  </div>
                  <div></div>
                </div>
              </div>

              <div className="mt-4">
                <label
                  className="mb-2 text-xs text-muted-foreground block"
                  htmlFor="notes"
                >
                  Notes
                </label>
                <Input placeholder="Notes" id="notes" />
                <div className="mt-4 flex items-center gap-2">
                  <NeuCheckbox id="terms" />
                  <label htmlFor="terms">
                    I agree to the terms & conditions
                  </label>
                </div>
              </div>
            </CardContent>
            <CardFooter className="flex gap-4">
              <Button variant={"destructive"}>Cancel</Button>
              <Button variant={"primary"}>Upgrade Plan</Button>
            </CardFooter>
          </Card>
        </div>
        <div className="flex-1 space-y-6"></div>
      </section>
    </main>
  );
}

export default App;
