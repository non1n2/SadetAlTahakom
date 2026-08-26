import { Toaster } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { Route, Router, Switch } from "wouter";
import { useHashLocation } from "wouter/use-hash-location";
import ErrorBoundary from "./components/ErrorBoundary";
import { ThemeProvider } from "./contexts/ThemeContext";
import Home from "./pages/Home";
import { AutoMateXDetail, CncDetail, SchoolDetail, SeedlingToolsDetail, SmartIncubatorDetail } from "./pages/ProjectDetail";

function AppRoutes() {
  return (
    <Router hook={useHashLocation}>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/projects/smart-incubator" component={SmartIncubatorDetail} />
        <Route path="/projects/automatex" component={AutoMateXDetail} />
        <Route path="/projects/school-app" component={SchoolDetail} />
        <Route path="/projects/cnc-router" component={CncDetail} />
        <Route path="/projects/seedling-tools" component={SeedlingToolsDetail} />
        <Route component={Home} />
      </Switch>
    </Router>
  );
}

function App() {
  return (
    <ErrorBoundary>
      <ThemeProvider
        defaultTheme="light"
        // switchable
      >
        <TooltipProvider>
          <Toaster />
          <AppRoutes />
        </TooltipProvider>
      </ThemeProvider>
    </ErrorBoundary>
  );
}

export default App;
