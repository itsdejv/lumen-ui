import type { Preview } from "@storybook/react-vite";
import "../src/tailwind.css";

const preview: Preview = {
  globalTypes: {
    theme: {
      name: "Theme",
      description: "Light / Dark mode",
      defaultValue: "light",
      toolbar: {
        icon: "circlehollow",
        items: [
          { value: "light", title: "Light" },
          { value: "dark", title: "Dark" },
        ],
      },
    },
  },
  decorators: [
    (Story, context) => {
      const theme = context.globals.theme || "light";

      document.documentElement.classList.toggle("dark", theme === "dark");

      const backgroundColor = theme === "dark" ? "#0a0a0a" : "#ffffff";
      document.body.style.backgroundColor = backgroundColor;

      return Story();
    },
  ],
  parameters: {
    backgrounds: { disable: true },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
    a11y: {
      test: "todo",
    },
  },
};

export default preview;
