"use client";

import { Checkbox, CheckboxGroup } from "@heroui/react";
import clsx from "clsx";

const StatusWindow = ({ delivaryStatus = [] }) => {
  const deliveryOptions = [
    {
      title: "Searching",
      value: "searching",
      description: "Looking for suitable suppliers",
      short: "Search",
    },
    {
      title: "Source Found",
      value: "source-found",
      description: "Potential supplier identified",
      short: "Sourced",
    },
    {
      title: "Verified",
      value: "verified",
      description: "Supplier information verified",
      short: "Verified",
    },
    {
      title: "On the Way",
      value: "on-the-way",
      description: "Order is being delivered",
      short: "Shipping",
    },
    {
      title: "Delivered",
      value: "delivered",
      description: "Order successfully delivered",
      short: "Delivered",
    },
  ];

  /*
   * Keep the existing functionality.
   * delivaryStatus can be:
   *
   * ["searching"]
   * ["searching", "source-found"]
   * ["searching", "source-found", "verified"]
   * etc.
   */

  const currentStatus =
    delivaryStatus?.[delivaryStatus.length - 1] || "searching";

  const currentIndex = deliveryOptions.findIndex(
    (item) => item.value === currentStatus,
  );

  return (
    <div className="w-full">
      <section className="w-full overflow-hidden rounded-2xl border border-[#E3EAF0] bg-white shadow-[0_12px_40px_rgba(24,55,85,0.06)]">
        {/* =====================================================
            HEADER
        ===================================================== */}

        <div className="border-b border-[#E9EEF3] px-5 py-5 sm:px-7">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <div className="flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />

                <p className="text-[11px] font-bold uppercase tracking-[0.14em] text-[#718196]">
                  Order Progress
                </p>
              </div>

              <h2 className="mt-1 text-lg font-bold text-[#102A4C]">
                Delivery Status
              </h2>

              <p className="mt-1 text-xs leading-5 text-[#8997A6]">
                Track the progress of your sourcing request.
              </p>
            </div>

            {/* Current status badge */}

            <div className="flex items-center gap-2 self-start rounded-full border border-[#D9EDF5] bg-[#F2FBFE] px-3 py-1.5 sm:self-auto">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00AEEF] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#00AEEF]" />
              </span>

              <span className="text-xs font-semibold text-[#19749D]">
                {deliveryOptions[currentIndex]?.title || "Searching"}
              </span>
            </div>
          </div>
        </div>

        {/* =====================================================
            DESKTOP TIMELINE
        ===================================================== */}

        <div className="hidden px-6 py-8 lg:block">
          <CheckboxGroup
            defaultValue={delivaryStatus}
            name="delivery"
            variant="secondary"
            isReadOnly
          >
            <div className="relative grid grid-cols-5">
              {/* Connecting line */}

              <div className="absolute left-[10%] right-[10%] top-[23px] h-[2px] bg-[#E7EDF2]" />

              {/* Completed connecting line */}

              {currentIndex > 0 && (
                <div
                  className="absolute left-[10%] top-[23px] h-[2px] bg-[#00AEEF] transition-all"
                  style={{
                    width: `${
                      Math.min(currentIndex / (deliveryOptions.length - 1), 1) *
                      80
                    }%`,
                  }}
                />
              )}

              {deliveryOptions.map((option, index) => {
                const isSelected = delivaryStatus?.includes(option.value);

                const isCurrent = option.value === currentStatus;

                const isCompleted = isSelected && index < currentIndex;

                return (
                  <div
                    key={option.value}
                    className="relative flex flex-col items-center"
                  >
                    <Checkbox
                      value={option.value}
                      isReadOnly
                      className="pointer-events-none"
                    >
                      <Checkbox.Content
                        className={clsx(
                          "relative flex flex-col items-center bg-transparent",
                          "data-[selected=true]:bg-transparent",
                          "data-[focus-visible=true]:bg-transparent",
                        )}
                      >
                        {/* Status circle */}

                        <div
                          className={clsx(
                            "relative z-10 flex h-12 w-12 items-center justify-center rounded-full border-2 bg-white transition-all duration-300",
                            isSelected
                              ? "border-[#00AEEF] bg-[#00AEEF] text-white shadow-[0_6px_18px_rgba(0,174,239,0.22)]"
                              : "border-[#DCE5EC] text-[#9AA8B6]",
                            isCurrent && "ring-4 ring-[#00AEEF]/10",
                          )}
                        >
                          {isCompleted ? (
                            <svg
                              viewBox="0 0 24 24"
                              className="h-5 w-5"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="2.5"
                            >
                              <path
                                d="M5 12.5 9.5 17 19 7.5"
                                strokeLinecap="round"
                                strokeLinejoin="round"
                              />
                            </svg>
                          ) : (
                            <span className="text-xs font-bold">
                              {String(index + 1).padStart(2, "0")}
                            </span>
                          )}
                        </div>

                        {/* Hidden HeroUI control */}

                        <Checkbox.Control className="absolute -left-[9999px]">
                          <Checkbox.Indicator />
                        </Checkbox.Control>

                        {/* Text */}

                        <div className="mt-4 text-center">
                          <p
                            className={clsx(
                              "text-sm font-bold",
                              isSelected ? "text-[#102A4C]" : "text-[#8493A2]",
                            )}
                          >
                            {option.title}
                          </p>

                          <p className="mx-auto mt-1 max-w-[150px] text-[11px] leading-4 text-[#9AA6B2]">
                            {option.description}
                          </p>
                        </div>
                      </Checkbox.Content>
                    </Checkbox>
                  </div>
                );
              })}
            </div>
          </CheckboxGroup>
        </div>

        {/* =====================================================
            MOBILE / TABLET TIMELINE
        ===================================================== */}

        <div className="px-5 py-6 lg:hidden">
          <CheckboxGroup
            defaultValue={delivaryStatus}
            name="delivery"
            variant="secondary"
            isReadOnly
          >
            <div className="relative space-y-1">
              {/* Vertical line */}

              <div className="absolute bottom-7 left-[19px] top-7 w-[2px] bg-[#E6EDF2]" />

              {deliveryOptions.map((option, index) => {
                const isSelected = delivaryStatus?.includes(option.value);

                const isCurrent = option.value === currentStatus;

                const isCompleted = isSelected && index < currentIndex;

                return (
                  <Checkbox
                    key={option.value}
                    value={option.value}
                    isReadOnly
                    className="pointer-events-none w-full"
                  >
                    <Checkbox.Content
                      className={clsx(
                        "relative flex w-full items-center gap-4 rounded-xl bg-transparent p-2",
                        "data-[selected=true]:bg-transparent",
                      )}
                    >
                      {/* Circle */}

                      <div
                        className={clsx(
                          "relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border-2 bg-white",
                          isSelected
                            ? "border-[#00AEEF] bg-[#00AEEF] text-white"
                            : "border-[#DCE5EC] text-[#9AA8B6]",
                          isCurrent && "ring-4 ring-[#00AEEF]/10",
                        )}
                      >
                        {isCompleted ? (
                          <svg
                            viewBox="0 0 24 24"
                            className="h-4 w-4"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2.5"
                          >
                            <path
                              d="M5 12.5 9.5 17 19 7.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </svg>
                        ) : (
                          <span className="text-[10px] font-bold">
                            {index + 1}
                          </span>
                        )}
                      </div>

                      {/* Hidden checkbox control */}

                      <Checkbox.Control className="absolute -left-[9999px]">
                        <Checkbox.Indicator />
                      </Checkbox.Control>

                      {/* Content */}

                      <div className="min-w-0 flex-1 py-1">
                        <div className="flex items-center justify-between gap-3">
                          <p
                            className={clsx(
                              "text-sm font-bold",
                              isSelected ? "text-[#102A4C]" : "text-[#8A98A7]",
                            )}
                          >
                            {option.title}
                          </p>

                          {isCurrent && (
                            <span className="shrink-0 rounded-full bg-[#EAF8FD] px-2 py-1 text-[9px] font-bold uppercase tracking-wide text-[#1682B4]">
                              Current
                            </span>
                          )}
                        </div>

                        <p className="mt-0.5 text-[11px] text-[#94A1AE]">
                          {option.description}
                        </p>
                      </div>
                    </Checkbox.Content>
                  </Checkbox>
                );
              })}
            </div>
          </CheckboxGroup>
        </div>

        {/* =====================================================
            BOTTOM SUMMARY
        ===================================================== */}

        <div className="border-t border-[#E9EEF3] bg-[#FAFCFE] px-5 py-4 sm:px-7">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#9AA7B4]">
                Current Stage
              </p>

              <p className="mt-0.5 text-sm font-semibold text-[#17283D]">
                {deliveryOptions[currentIndex]?.title || "Searching"}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#9AA7B4]">
                Progress
              </p>

              <p className="mt-0.5 text-sm font-semibold text-[#00AEEF]">
                {Math.max(1, currentIndex + 1)} / {deliveryOptions.length}{" "}
                stages
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default StatusWindow;
