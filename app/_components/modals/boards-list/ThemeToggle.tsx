import { Switch } from "@headlessui/react";

export default function ThemeToggle({
  handleToggleTheme,
  darkMode,
}: {
  handleToggleTheme: () => void;
  darkMode: boolean;
}) {
  return (
    <Switch
      checked={darkMode}
      onChange={handleToggleTheme}
      className="data-[checked]:bg-blue-600 group m-6 inline-flex h-5 w-10 items-center rounded-full bg-primary transition-colors lg:hover:bg-primary-hover"
    >
      <span className="bg-white size-3.5 translate-x-1 rounded-full transition group-data-[checked]:translate-x-[1.375rem]" />
    </Switch>
  );
}
