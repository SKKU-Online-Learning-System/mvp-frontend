import { configure } from "@storybook/react";

function loadStories() {
  require("../stories/TestComponent.stories.tsx");
}
configure(loadStories, module);
