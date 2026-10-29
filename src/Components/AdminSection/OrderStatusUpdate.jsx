"use client";

import { patchOrderStatus } from "@/lib/actions/patchData";
import {
  Checkbox,
  CheckboxGroup,
  Description,
  Label,
  Separator,
} from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import {
  FiPackage,
  FiMapPin,
  FiTruck,
  FiNavigation,
  FiClock,
  FiCheckCircle,
} from "react-icons/fi";

const OrderStatusUpdate = ({ order }) => {
  const router = useRouter();
  const handleCheckboxChange = async (value) => {
    const res = await patchOrderStatus(order._id, value);
    console.log("Order status updated:", res);
    if (res.updatedCount > 0) {
      router.refresh();
      if (order.state.length === 5) {
        alert("order status updated successfully! All stages completed.");
      }
    } else {
      alert("Failed to update order status. Please try again.");
      return;
    }
  };

  const stages = [
    {
      value: "Processing",
      title: "On Processing",
      description: "Product is currently being processed.",
      icon: FiPackage,
    },
    {
      value: "Reached the Hub",
      title: "Reached the Hub",
      description: "Product has arrived at the distribution hub.",
      icon: FiMapPin,
    },
    {
      value: "Delivering",
      title: "Delivering",
      description: "Product is on its way to the local delivery point.",
      icon: FiTruck,
    },
    {
      value: "Reached the Local Delivery Point",
      title: "Local Delivery Point",
      description: "Product has reached the local delivery point.",
      icon: FiNavigation,
    },
    {
      value: "Attempt to Deliver",
      title: "Attempt to Deliver",
      description: "The delivery team will attempt delivery to the customer.",
      icon: FiClock,
    },
    {
      value: "Delivered",
      title: "Delivered",
      description: "Product has been delivered to the customer.",
      icon: FiCheckCircle,
    },
  ];

  return (
    <section className="w-full overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
      {/* Header */}
      <div className="flex items-center gap-3 border-b border-slate-100 bg-slate-50/80 px-4 py-5 sm:px-6">
        <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-[#102A4C] text-white">
          <FiTruck className="size-5" />
        </div>

        <div>
          <h2 className="text-base font-bold tracking-tight text-[#102A4C] sm:text-lg">
            Order Status
          </h2>
          <p className="mt-1 text-xs text-slate-500 sm:text-sm">
            Track and update the order delivery progress.
          </p>
        </div>
      </div>

      {/* Existing status logic */}
      <div className="p-4 sm:p-6">
        <CheckboxGroup
          onChange={(value) => {
            handleCheckboxChange(value);
          }}
          name="interests"
          value={order?.state}
        >
          <div className="mb-4">
            <Label className="text-sm font-bold text-slate-800">
              Select Current Stage
            </Label>
            <Description className="mt-1 text-xs leading-5 text-slate-500">
              Choose the appropriate stage to update the order.
            </Description>
          </div>

          <Separator className="mb-5" />

          {/* Responsive status cards */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {stages.map((stage, index) => {
              const StageIcon = stage.icon;

              return (
                <Checkbox
                  key={stage.value}
                  value={stage.value}
                  className="w-full"
                >
                  <Checkbox.Content className="flex h-full min-h-[145px] w-full items-start gap-3 rounded-xl border border-slate-200 bg-white p-4 transition-colors hover:border-sky-300 hover:bg-sky-50/50">
                    <Checkbox.Control className="mt-1 shrink-0">
                      <Checkbox.Indicator />
                    </Checkbox.Control>

                    <div className="min-w-0 flex-1">
                      <div className="mb-3 flex items-center justify-between gap-2">
                        <div className="flex size-9 items-center justify-center rounded-lg bg-slate-100 text-[#007EA8]">
                          <StageIcon className="size-4" />
                        </div>

                        <span className="text-[10px] font-bold tracking-wider text-slate-400">
                          STEP {String(index + 1).padStart(2, "0")}
                        </span>
                      </div>

                      <p className="text-sm font-bold leading-5 text-slate-800">
                        {stage.title}
                      </p>

                      <Description className="mt-1.5 text-xs leading-5 text-slate-500">
                        {stage.description}
                      </Description>
                    </div>
                  </Checkbox.Content>
                </Checkbox>
              );
            })}
          </div>
        </CheckboxGroup>

        <div className="mt-5 rounded-lg bg-slate-50 px-3 py-3">
          <p className="text-xs leading-5 text-slate-500">
            <span className="font-semibold text-slate-700">Note:</span> Select
            the stage that reflects the current delivery progress.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OrderStatusUpdate;
