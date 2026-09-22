"use client";
import { getPostById } from "@/lib/actions/getData";
import { patchDelivaryStatus, patchPostStatus } from "@/lib/actions/patchData";
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
import { useRouter } from "next/navigation";
import { useState } from "react";
const MultipleSelect = ({ delivaryStatus, id, token }) => {
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
  const router = useRouter();
  const [stage, setStage] = useState(delivaryStatus || []);
  console.log("Current stage:", stage);
  const handleCheckboxChange = async (value) => {
    // 1. Calculate the new state synchronously
    const updatedStage = stage.includes(value)
      ? stage.filter((item) => item !== value)
      : [...stage, value];

    // 2. Update state for UI rendering
    setStage(updatedStage);

    // 3. Send the updated state directly to the server action/API
    try {
      const res = await patchDelivaryStatus(id, updatedStage, token);

      if (res.modifiedCount > 0) {
        // alert("Delivery status updated successfully!");
        const postData = await getPostById(id, token);
        if (postData?.delivaryStatus.length === 5) {
          alert("Delivery status updated successfully! All stages completed.");
          const updatedPostData = await patchPostStatus(id, "completed", token);
        } else {
          const updatedPostData = await patchPostStatus(id, "pending", token);
        }

        router.refresh();
      } else {
        alert("Failed to update delivery status. Please try again.");
      }
    } catch (error) {
      console.error("Failed to update status:", error);
      alert("An error occurred while updating status.");
    }
  };
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
          defaultValue={delivaryStatus}
          name="delivery"
          variant="secondary"
        >
          <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
            {deliveryOptions.map((option) => (
              <Checkbox
                key={option.value}
                value={option.value}
                onChange={() => {
                  handleCheckboxChange(option.value);
                }}
              >
                <Checkbox.Content
                  className={clsx(
                    "group relative flex w-full flex-col gap-6 rounded-xl border bg-surface px-5 py-4 transition-all data-[selected=true]:border-accent data-[selected=true]:bg-accent/10",
                    "data-[focus-visible=true]:border-accent data-[focus-visible=true]:bg-accent/10 h-full",
                  )}
                >
                  <Checkbox.Control className="absolute right-2 size-5">
                    <Checkbox.Indicator />
                  </Checkbox.Control>
                  <div className="flex flex-col gap-1 h-full">
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
