import Image from "next/image";
import iconLight from "/public/assets/icon-light-theme.svg";
import iconDark from "/public/assets/icon-dark-theme.svg";
import clsx from "clsx";

export default function ThemeToggle({
  darkMode,
  toggleTheme,
}: {
  darkMode: boolean;
  toggleTheme: () => void;
}) {
  return (
    <div className="flex h-12 w-[calc(100%-50px)] items-center justify-center border-r-[1px] border-neutral-300">
      <div className="mx-auto flex justify-between">
        <Image
          src={iconLight}
          alt="sun icon"
          width="19"
          height="19"
          sizes="100vw"
        />
        <div className="relative mx-6 inline-block">
          <input
            className="hidden"
            id="toggle"
            onClick={toggleTheme}
            type="checkbox"
            name="toggle"
          />
          <label
            className="block h-5 w-10 cursor-pointer overflow-hidden rounded-[20px]"
            htmlFor="toggle"
          >
            <span
              className={clsx(
                "before:content[''] block transition-[margin_0.3s_ease-in_0s] before:float-left before:box-border before:h-5 before:w-1/2 before:bg-primary before:p-0 before:pl-[10px] before:font-bold before:leading-9 before:text-neutral-800 after:float-left after:box-border after:h-5 after:w-1/2 after:bg-primary after:p-0 after:pr-[10px] after:text-right after:font-bold after:leading-9 after:text-neutral-800 after:content-['']",
                {
                  "ml-0 before:text-neutral-800 after:text-neutral-800":
                    darkMode,
                  "ml-[-100%]": !darkMode,
                },
              )}
            />
            <span
              className={clsx(
                "absolute bottom-0 top-0 m-[3px] block w-[14px] rounded-full border-0 border-[#bbb] bg-neutral-800 transition-all delay-[0.08s] duration-[0.16s] ease-in",
                { "right-0": darkMode, "right-5": !darkMode },
              )}
            />
          </label>
        </div>
        <Image
          src={iconDark}
          alt="moon and star icon"
          width="15"
          height="15"
          sizes="100vw"
        />
      </div>
    </div>
  );
}
