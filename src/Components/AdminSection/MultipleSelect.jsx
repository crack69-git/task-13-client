import {
  Checkbox,
  CheckboxGroup,
  Description,
  Label,
  Radio,
  RadioGroup,
} from "@heroui/react";
import { Icon } from "@iconify/react";
import clsx from "clsx";
const MultipleSelect = () => {
  const deliveryOptions = [
    {
      title: "Searching",
      value: "searching",
    },
    {
      title: "Source Found",
      value: "source-found",
    },
    {
      title: "Verified",
      value: "verified",
    },
    {
      title: "On the Way",
      value: "on-the-way",
    },
    {
      title: "Delivered",
      value: "delivered",
    },
  ];

  return (
    <div
      className="flex w-full flex-col items-center gap-10"
      style={{
        // @ts-expect-error - Overrides default variables
        "--accent": "#006FEE",
        "--accent-foreground": "#fff",
        "--accent-hover": "#006FEE",
        "--border-width": "2px",
        "--border-width-field": "2px",
        "--focus": "#006FEE",
      }}
    >
      <section className="flex w-full max-w-none flex-col gap-4">
        <CheckboxGroup
          defaultValue={["searching"]}
          name="delivery"
          variant="secondary"
        >
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-5">
            {deliveryOptions.map((option) => (
              <Checkbox key={option.value} value={option.value}>
                <Checkbox.Content
                  className={clsx(
                    "group relative flex w-full flex-col gap-6 rounded-xl border bg-surface px-5 py-4 transition-all data-[selected=true]:border-accent data-[selected=true]:bg-accent/10",
                    "data-[focus-visible=true]:border-accent data-[focus-visible=true]:bg-accent/10 ",
                  )}
                >
                  <Checkbox.Control className="absolute right-2 size-5">
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <div className="flex flex-col gap-1 ">
                    <span>{option.title}</span>
                  </div>
                </Checkbox.Content>
              </Checkbox>
            ))}
          </div>
        </CheckboxGroup>
      </section>
    </div>
  );
};

export default MultipleSelect;
