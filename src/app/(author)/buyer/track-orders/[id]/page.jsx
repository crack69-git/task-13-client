import StatusWindow from "@/Components/BuyerSection/StatusWindow";
import { getPostById } from "@/lib/actions/getData";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

import {
  FiArrowLeft,
  FiCalendar,
  FiCheck,
  FiCheckCircle,
  FiClock,
  FiCopy,
  FiFileText,
  FiMapPin,
  FiPackage,
  FiPrinter,
  FiShield,
  FiTruck,
} from "react-icons/fi";

export const metadata = {
  title: "SourceX - Order Details",
  description: "Track your SourceX sourcing request",
};

/* =========================================================
   HELPERS
========================================================= */

const formatStatus = (status) => {
  if (!status) return "Pending";

  return status
    .replace(/-/g, " ")
    .replace(/\b\w/g, (letter) => letter.toUpperCase());
};

const getCurrentStatus = (statuses = []) => {
  if (!statuses?.length) return "searching";

  return statuses[statuses.length - 1];
};

const getProgress = (statuses = []) => {
  const totalStages = 5;

  if (!statuses?.length) return 20;

  return Math.min(Math.max((statuses.length / totalStages) * 100, 20), 100);
};

/* =========================================================
   READ ONLY FORM FIELD
========================================================= */

const FormField = ({
  label,
  value,
  icon,
  fullWidth = false,
  multiline = false,
}) => {
  return (
    <div className={fullWidth ? "sm:col-span-2" : ""}>
      <label className="mb-2 block text-[11px] font-semibold text-[#718196]">
        {label}
      </label>

      <div
        className={[
          "flex min-h-[46px] items-center gap-3 rounded-xl",
          "border border-[#DDE6EC] bg-[#F9FBFC]",
          "px-4 py-3",
          multiline ? "items-start" : "",
        ].join(" ")}
      >
        {icon && (
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#00AEEF] shadow-sm">
            {icon}
          </div>
        )}

        <p
          className={[
            "min-w-0 flex-1 break-words text-sm font-semibold",
            multiline ? "whitespace-pre-wrap leading-7" : "leading-5",
            value ? "text-[#17283D]" : "text-[#9AA7B4]",
          ].join(" ")}
        >
          {value || "Not provided"}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   SECTION HEADER
========================================================= */

const SectionHeader = ({ eyebrow, title, description, color = "blue" }) => {
  const dotColor =
    color === "orange"
      ? "bg-[#FF4F0A]"
      : color === "green"
        ? "bg-[#20A36A]"
        : "bg-[#00AEEF]";

  const textColor =
    color === "orange"
      ? "text-[#FF4F0A]"
      : color === "green"
        ? "text-[#20A36A]"
        : "text-[#00AEEF]";

  return (
    <div className="mb-6">
      <div className="flex items-center gap-2">
        <span className={`h-1.5 w-1.5 rounded-full ${dotColor}`} />

        <p
          className={`text-[10px] font-bold uppercase tracking-[0.16em] ${textColor}`}
        >
          {eyebrow}
        </p>
      </div>

      <h2 className="mt-1 text-xl font-bold tracking-tight text-[#102A4C]">
        {title}
      </h2>

      {description && (
        <p className="mt-1 max-w-2xl text-xs leading-5 text-[#8795A4]">
          {description}
        </p>
      )}
    </div>
  );
};

/* =========================================================
   PROTECTION ITEM
========================================================= */

const ProtectionItem = ({ children }) => {
  return (
    <li className="flex items-start gap-3">
      <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E9F8F1] text-[#20A36A]">
        <FiCheck size={13} />
      </span>

      <span className="text-sm leading-5 text-[#667789]">{children}</span>
    </li>
  );
};

/* =========================================================
   PAGE
========================================================= */

const Page = async ({ params }) => {
  const { id } = await params;

  const { token } = await auth.api.getToken({
    headers: await headers(),
  });

  const post = await getPostById(id, token);

  const deliveryStatuses = post?.delivaryStatus || [];

  const currentStatus = getCurrentStatus(deliveryStatuses);

  const progress = getProgress(deliveryStatuses);

  return (
    <main className="min-h-screen overflow-x-hidden bg-[#F6F9FC] text-[#17283D]">
      {/* =====================================================
          BACKGROUND DECORATION
      ===================================================== */}

      <div className="pointer-events-none fixed left-[-180px] top-[260px] h-[360px] w-[360px] rounded-full bg-[#00AEEF]/[0.035] blur-3xl" />

      <div className="pointer-events-none fixed right-[-180px] top-[520px] h-[400px] w-[400px] rounded-full bg-[#FF4F0A]/[0.025] blur-3xl" />

      <div className="mx-auto w-full max-w-[1380px] px-3 py-5 sm:px-5 sm:py-7 lg:px-8 lg:py-9">
        {/* ===================================================
            TOP BAR
        =================================================== */}

        <div className="mb-5 flex items-center justify-between">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-lg border border-[#DFE7ED] bg-white px-3.5 py-2 text-xs font-semibold text-[#607184] shadow-sm transition hover:border-[#C9D7E1] hover:text-[#17283D]"
          >
            <FiArrowLeft size={14} />
            Back to Orders
          </button>

          <div className="hidden items-center gap-2 text-xs text-[#8A98A7] sm:flex">
            <span>Buyer</span>

            <span className="text-[#C5CED6]">/</span>

            <span className="font-medium text-[#536477]">Order Details</span>
          </div>
        </div>

        {/* ===================================================
            ORDER HEADER
        =================================================== */}

        <section className="overflow-hidden rounded-2xl border border-[#DFE7ED] bg-white shadow-[0_15px_50px_rgba(24,55,85,0.06)]">
          <div className="relative px-5 py-6 sm:px-7 sm:py-7 lg:px-9 lg:py-8">
            {/* Decorative circle */}

            <div className="pointer-events-none absolute right-0 top-0 h-44 w-44 rounded-bl-full bg-[#EAF8FD]/70" />

            <div className="relative">
              {/* Header top */}

              <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
                <div className="flex flex-wrap items-center gap-2">
                  {/* Request ID */}

                  <div className="inline-flex items-center gap-2 rounded-lg bg-[#102A4C] px-3 py-1.5 text-[11px] font-bold tracking-wide text-white">
                    <FiFileText size={13} />#{post?._id?.slice(0, 8)}
                  </div>

                  {/* Current status */}

                  <div className="inline-flex items-center gap-2 rounded-lg border border-[#D8E7F0] bg-[#F8FBFD] px-3 py-1.5">
                    <span className="relative flex h-2 w-2">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#00AEEF]/40" />

                      <span className="relative h-2 w-2 rounded-full bg-[#00AEEF]" />
                    </span>

                    <span className="text-[11px] font-bold uppercase tracking-wide text-[#527085]">
                      {formatStatus(currentStatus)}
                    </span>
                  </div>

                  {/* Submitted */}

                  <div className="inline-flex items-center gap-1.5 rounded-lg border border-[#D9EFE4] bg-[#F2FBF6] px-3 py-1.5 text-[11px] font-semibold text-[#23845B]">
                    <FiCheck size={12} />
                    Submitted
                  </div>
                </div>

                {/* Actions */}

                <div className="flex gap-2">
                  <button
                    type="button"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg border border-[#DCE4EA] bg-white px-3.5 py-2.5 text-xs font-semibold text-[#526579] transition hover:bg-[#F7FAFC] sm:flex-none"
                  >
                    <FiPrinter size={14} />

                    <span className="hidden sm:inline">Print</span>
                  </button>

                  <button
                    type="button"
                    className="inline-flex flex-1 items-center justify-center gap-2 rounded-lg bg-[#FF4F0A] px-3.5 py-2.5 text-xs font-semibold text-white shadow-[0_5px_15px_rgba(255,79,10,0.16)] transition hover:bg-[#E94705] sm:flex-none"
                  >
                    <FiCopy size={14} />

                    <span className="hidden sm:inline">Copy ID</span>
                  </button>
                </div>
              </div>

              {/* Title */}

              <div className="mt-7 max-w-4xl">
                <p className="mb-2 text-[11px] font-bold uppercase tracking-[0.16em] text-[#00AEEF]">
                  Sourcing Request
                </p>

                <h1 className="break-words text-2xl font-extrabold tracking-[-0.035em] text-[#102A4C] sm:text-3xl lg:text-[38px]">
                  {post?.requirementName}
                </h1>

                <p className="mt-3 max-w-3xl text-sm leading-6 text-[#748496] sm:text-[15px]">
                  {post?.specifications ||
                    "Your sourcing request is being processed through the SourceX procurement network."}
                </p>
              </div>

              {/* =================================================
                  SUMMARY CARDS
              ================================================= */}

              <div className="mt-7 grid grid-cols-2 gap-3 lg:grid-cols-4">
                {/* Quantity */}

                <div className="rounded-xl border border-[#E2E9EF] bg-[#FBFCFD] p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF8FD] text-[#00AEEF]">
                    <FiPackage size={15} />
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A98A7]">
                    Quantity
                  </p>

                  <p className="mt-1 text-lg font-bold tracking-tight text-[#17283D]">
                    {post?.targetQuantity || "—"}
                  </p>

                  <p className="mt-0.5 text-[11px] text-[#8997A6]">
                    {post?.unitOfMeasure || "Units"}
                  </p>
                </div>

                {/* Budget */}

                <div className="rounded-xl border border-[#E2E9EF] bg-[#FBFCFD] p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#FFF1EB] text-[#FF4F0A]">
                    <span className="text-sm font-bold">$</span>
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A98A7]">
                    Budget
                  </p>

                  <p className="mt-1 truncate text-lg font-bold tracking-tight text-[#17283D]">
                    {post?.price ? `$${post.price}` : "Not set"}
                  </p>

                  <p className="mt-0.5 text-[11px] text-[#8997A6]">USD</p>
                </div>

                {/* Destination */}

                <div className="rounded-xl border border-[#E2E9EF] bg-[#FBFCFD] p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF8FD] text-[#00AEEF]">
                    <FiMapPin size={15} />
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A98A7]">
                    Destination
                  </p>

                  <p className="mt-1 truncate text-lg font-bold tracking-tight text-[#17283D]">
                    {post?.deliveryAddress || "—"}
                  </p>

                  <p className="mt-0.5 text-[11px] text-[#8997A6]">
                    Delivery location
                  </p>
                </div>

                {/* Date */}

                <div className="rounded-xl border border-[#E2E9EF] bg-[#FBFCFD] p-4">
                  <div className="mb-3 flex h-8 w-8 items-center justify-center rounded-lg bg-[#EAF8FD] text-[#00AEEF]">
                    <FiCalendar size={15} />
                  </div>

                  <p className="text-[10px] font-bold uppercase tracking-[0.14em] text-[#8A98A7]">
                    Required By
                  </p>

                  <p className="mt-1 truncate text-lg font-bold tracking-tight text-[#17283D]">
                    {post?.targetDate || "—"}
                  </p>

                  <p className="mt-0.5 text-[11px] text-[#8997A6]">
                    Target delivery
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ===================================================
            STATUS / ORDER JOURNEY
        =================================================== */}

        <section className="mt-5 rounded-2xl border border-[#DFE7ED] bg-white shadow-[0_10px_35px_rgba(24,55,85,0.045)]">
          <div className="border-b border-[#E8EDF1] px-5 py-5 sm:px-7">
            <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />

                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#7F8E9D]">
                    Procurement Progress
                  </p>
                </div>

                <h2 className="mt-1 text-lg font-bold text-[#102A4C] sm:text-xl">
                  Order Journey
                </h2>

                <p className="mt-1 text-xs text-[#8795A4]">
                  Follow your request from supplier search through delivery.
                </p>
              </div>

              {/* Progress */}

              <div className="w-full sm:w-[190px]">
                <div className="mb-1.5 flex justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-wide text-[#8B99A7]">
                    Progress
                  </span>

                  <span className="text-[10px] font-bold text-[#00AEEF]">
                    {Math.round(progress)}%
                  </span>
                </div>

                <div className="h-1.5 overflow-hidden rounded-full bg-[#E8EEF2]">
                  <div
                    className="h-full rounded-full bg-[#00AEEF] transition-all duration-500"
                    style={{
                      width: `${progress}%`,
                    }}
                  />
                </div>
              </div>
            </div>
          </div>

          <div className="p-3 sm:p-5 lg:p-7">
            <StatusWindow delivaryStatus={deliveryStatuses} />
          </div>
        </section>

        {/* ===================================================
            MAIN CONTENT
        =================================================== */}

        <div className="mt-5 grid gap-5 xl:grid-cols-[minmax(0,1.65fr)_minmax(300px,0.75fr)]">
          {/* =================================================
              LEFT COLUMN
          ================================================= */}

          <div className="space-y-5">
            {/* =================================================
                COMPLETE SUBMITTED FORM
            ================================================= */}

            <section className="rounded-2xl border border-[#DFE7ED] bg-white p-5 shadow-[0_10px_35px_rgba(24,55,85,0.045)] sm:p-7">
              <SectionHeader
                eyebrow="Submitted Request"
                title="Request Details"
                description="All information submitted through the sourcing request form."
              />

              <div className="space-y-7">
                {/* ===========================================
                    BASIC INFORMATION
                =========================================== */}

                <div>
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />

                    <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#536477]">
                      Basic Information
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      label="Requirement / Product Name"
                      value={post?.requirementName}
                      icon={<FiPackage size={14} />}
                      fullWidth
                    />

                    <FormField
                      label="Target Quantity"
                      value={post?.targetQuantity}
                      icon={<FiPackage size={14} />}
                    />

                    <FormField
                      label="Unit of Measure"
                      value={post?.unitOfMeasure}
                    />

                    <FormField
                      label="Quality Tier"
                      value={post?.qualityTier}
                      icon={<FiCheckCircle size={14} />}
                    />

                    <FormField
                      label="Target Delivery Date"
                      value={post?.targetDate}
                      icon={<FiCalendar size={14} />}
                    />
                  </div>
                </div>

                {/* ===========================================
                    COMMERCIAL INFORMATION
                =========================================== */}

                <div className="border-t border-[#E9EEF2] pt-7">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#FF4F0A]" />

                    <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#536477]">
                      Commercial Information
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      label="Target Price / Budget"
                      value={post?.price ? `$${post.price}` : null}
                      icon={<span className="text-xs font-bold">$</span>}
                    />

                    <FormField label="Currency" value="USD" />

                    {/* Optional fields if your form saves them */}

                    {post?.paymentTerms && (
                      <FormField
                        label="Payment Terms"
                        value={post.paymentTerms}
                      />
                    )}

                    {post?.deliveryTerms && (
                      <FormField
                        label="Delivery Terms"
                        value={post.deliveryTerms}
                      />
                    )}
                  </div>
                </div>

                {/* ===========================================
                    DELIVERY INFORMATION
                =========================================== */}

                <div className="border-t border-[#E9EEF2] pt-7">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />

                    <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#536477]">
                      Delivery Information
                    </h3>
                  </div>

                  <div className="grid gap-4 sm:grid-cols-2">
                    <FormField
                      label="Delivery Address"
                      value={post?.deliveryAddress}
                      icon={<FiMapPin size={14} />}
                      fullWidth
                    />

                    {post?.deliveryCity && (
                      <FormField label="City" value={post.deliveryCity} />
                    )}

                    {post?.deliveryCountry && (
                      <FormField label="Country" value={post.deliveryCountry} />
                    )}
                  </div>
                </div>

                {/* ===========================================
                    PRODUCT REQUIREMENTS
                =========================================== */}

                <div className="border-t border-[#E9EEF2] pt-7">
                  <div className="mb-4 flex items-center gap-2">
                    <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />

                    <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#536477]">
                      Product Requirements
                    </h3>
                  </div>

                  <FormField
                    label="Specifications / Additional Requirements"
                    value={post?.specifications}
                    icon={<FiFileText size={14} />}
                    fullWidth
                    multiline
                  />
                </div>

                {/* ===========================================
                    OPTIONAL ADDITIONAL FIELDS
                =========================================== */}

                {(post?.brand ||
                  post?.brandPreference ||
                  post?.countryOfOrigin ||
                  post?.additionalRequirements) && (
                  <div className="border-t border-[#E9EEF2] pt-7">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />

                      <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#536477]">
                        Additional Requirements
                      </h3>
                    </div>

                    <div className="grid gap-4 sm:grid-cols-2">
                      {post?.brand && (
                        <FormField label="Preferred Brand" value={post.brand} />
                      )}

                      {post?.brandPreference && (
                        <FormField
                          label="Brand Preference"
                          value={post.brandPreference}
                        />
                      )}

                      {post?.countryOfOrigin && (
                        <FormField
                          label="Country of Origin"
                          value={post.countryOfOrigin}
                        />
                      )}

                      {post?.additionalRequirements && (
                        <FormField
                          label="Additional Requirements"
                          value={post.additionalRequirements}
                          fullWidth
                          multiline
                        />
                      )}
                    </div>
                  </div>
                )}

                {/* ===========================================
                    ATTACHMENT
                =========================================== */}

                {post?.attachmentLink && (
                  <div className="border-t border-[#E9EEF2] pt-7">
                    <div className="mb-4 flex items-center gap-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />

                      <h3 className="text-xs font-bold uppercase tracking-[0.12em] text-[#536477]">
                        Attachment
                      </h3>
                    </div>

                    <a
                      href={post.attachmentLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-3 rounded-xl border border-[#DDE6EC] bg-[#F9FBFC] p-4 transition hover:border-[#BFDCE8] hover:bg-[#F3FAFD]"
                    >
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-[#EAF8FD] text-[#00AEEF]">
                        <FiFileText size={17} />
                      </div>

                      <div className="min-w-0 flex-1">
                        <p className="text-sm font-semibold text-[#17283D]">
                          View submitted attachment
                        </p>

                        <p className="mt-0.5 truncate text-xs text-[#8997A6]">
                          Supporting document
                        </p>
                      </div>

                      <span className="text-xs font-bold text-[#00AEEF]">
                        View
                      </span>
                    </a>
                  </div>
                )}

                {/* ===========================================
                    SUBMISSION NOTICE
                =========================================== */}

                <div className="rounded-xl border border-[#D9EAF2] bg-[#F3FAFD] p-4">
                  <div className="flex gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white text-[#00AEEF] shadow-sm">
                      <FiFileText size={16} />
                    </div>

                    <div>
                      <p className="text-sm font-bold text-[#173B58]">
                        Request submitted successfully
                      </p>

                      <p className="mt-1 text-xs leading-5 text-[#71879A]">
                        The information above represents the requirements
                        submitted for this sourcing request. Supplier matching
                        and quotation activities are based on these
                        requirements.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                SPECIFICATIONS SUMMARY
            ================================================= */}

            <section className="rounded-2xl border border-[#DFE7ED] bg-white p-5 shadow-[0_10px_35px_rgba(24,55,85,0.045)] sm:p-7">
              <SectionHeader
                eyebrow="Product Requirements"
                title="Specifications"
                description="Detailed requirements provided with the request."
              />

              <div className="rounded-xl border border-[#E5EBF0] bg-[#FAFCFD] p-5">
                <p className="whitespace-pre-wrap break-words text-sm leading-7 text-[#627386]">
                  {post?.specifications ||
                    "No additional specifications were provided for this sourcing request."}
                </p>
              </div>
            </section>
          </div>

          {/* =================================================
              RIGHT COLUMN
          ================================================= */}

          <aside className="space-y-5">
            {/* =================================================
                DELIVERY
            ================================================= */}

            <section className="rounded-2xl border border-[#DFE7ED] bg-white p-5 shadow-[0_10px_35px_rgba(24,55,85,0.045)] sm:p-6">
              <div className="mb-5 flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00AEEF]">
                    Logistics
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-[#102A4C]">
                    Delivery
                  </h2>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#EAF8FD] text-[#00AEEF]">
                  <FiTruck size={16} />
                </div>
              </div>

              <div className="space-y-3">
                <div className="rounded-xl border border-[#E5EBF0] bg-[#FBFCFD] p-4">
                  <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#8A98A7]">
                    Delivery Address
                  </p>

                  <div className="mt-2 flex items-start gap-2">
                    <FiMapPin
                      className="mt-0.5 shrink-0 text-[#00AEEF]"
                      size={15}
                    />

                    <p className="text-sm font-semibold leading-5 text-[#17283D]">
                      {post?.deliveryAddress || "—"}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="rounded-xl border border-[#E5EBF0] bg-[#FBFCFD] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#8A98A7]">
                      Required By
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#17283D]">
                      {post?.targetDate || "—"}
                    </p>
                  </div>

                  <div className="rounded-xl border border-[#E5EBF0] bg-[#FBFCFD] p-4">
                    <p className="text-[10px] font-bold uppercase tracking-[0.13em] text-[#8A98A7]">
                      Status
                    </p>

                    <p className="mt-2 text-sm font-semibold text-[#00AEEF]">
                      {formatStatus(currentStatus)}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* =================================================
                REQUEST SUMMARY
            ================================================= */}

            <section className="rounded-2xl border border-[#DFE7ED] bg-white p-5 shadow-[0_10px_35px_rgba(24,55,85,0.045)] sm:p-6">
              <div className="mb-5">
                <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00AEEF]">
                  Request Summary
                </p>

                <h2 className="mt-1 text-lg font-bold text-[#102A4C]">
                  At a Glance
                </h2>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between border-b border-[#EDF1F4] pb-3">
                  <span className="text-xs text-[#8493A2]">Product</span>

                  <span className="max-w-[170px] truncate text-right text-xs font-semibold text-[#17283D]">
                    {post?.requirementName || "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EDF1F4] pb-3">
                  <span className="text-xs text-[#8493A2]">Quantity</span>

                  <span className="text-xs font-semibold text-[#17283D]">
                    {post?.targetQuantity || "—"} {post?.unitOfMeasure || ""}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EDF1F4] pb-3">
                  <span className="text-xs text-[#8493A2]">Quality</span>

                  <span className="text-xs font-semibold text-[#17283D]">
                    {post?.qualityTier || "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between border-b border-[#EDF1F4] pb-3">
                  <span className="text-xs text-[#8493A2]">Budget</span>

                  <span className="text-xs font-semibold text-[#17283D]">
                    {post?.price ? `$${post.price}` : "—"}
                  </span>
                </div>

                <div className="flex items-center justify-between">
                  <span className="text-xs text-[#8493A2]">Stage</span>

                  <span className="rounded-full bg-[#EAF8FD] px-2.5 py-1 text-[10px] font-bold text-[#1682B4]">
                    {formatStatus(currentStatus)}
                  </span>
                </div>
              </div>
            </section>

            {/* =================================================
                PROCUREMENT SUPPORT
            ================================================= */}

            <section className="rounded-2xl border border-[#DFE7ED] bg-white p-5 shadow-[0_10px_35px_rgba(24,55,85,0.045)] sm:p-6">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#00AEEF]">
                    Procurement Support
                  </p>

                  <h2 className="mt-1 text-lg font-bold text-[#102A4C]">
                    Dedicated Lead
                  </h2>
                </div>

                <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#FFF1EB] text-[#FF4F0A]">
                  <FiClock size={16} />
                </div>
              </div>

              <div className="mt-5 rounded-xl border border-dashed border-[#DCE5EC] bg-[#FAFCFD] p-5 text-center">
                <div className="mx-auto flex h-11 w-11 items-center justify-center rounded-full bg-[#EEF4F8] text-[#8293A3]">
                  <FiClock size={18} />
                </div>

                <p className="mt-3 text-sm font-semibold text-[#34475B]">
                  No dedicated lead assigned
                </p>

                <p className="mx-auto mt-1 max-w-[240px] text-xs leading-5 text-[#8A98A7]">
                  A SourceX procurement specialist can be assigned as your
                  request progresses.
                </p>
              </div>
            </section>

            {/* =================================================
                BUYER PROTECTION
            ================================================= */}

            <section className="overflow-hidden rounded-2xl border border-[#D9EDE3] bg-white shadow-[0_10px_35px_rgba(24,55,85,0.045)]">
              <div className="border-b border-[#E1F0E8] bg-[#F5FBF8] p-5 sm:p-6">
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <p className="text-[10px] font-bold uppercase tracking-[0.16em] text-[#20A36A]">
                      Buyer Protection
                    </p>

                    <h2 className="mt-1 text-lg font-bold text-[#173F30]">
                      SourceX Protection
                    </h2>
                  </div>

                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-[#DFF5E9] text-[#20A36A]">
                    <FiShield size={17} />
                  </div>
                </div>
              </div>

              <div className="p-5 sm:p-6">
                <ul className="space-y-4">
                  <ProtectionItem>
                    Independent accredited lab verification
                  </ProtectionItem>

                  <ProtectionItem>
                    Escrow payment release on port-of-entry dispatch
                  </ProtectionItem>

                  <ProtectionItem>
                    Cargo transit marine insurance coverage
                  </ProtectionItem>
                </ul>
              </div>
            </section>
          </aside>
        </div>

        {/* ===================================================
            FOOTER
        =================================================== */}

        <div className="mt-6 flex flex-col items-center justify-between gap-2 border-t border-[#E1E8EE] px-2 py-5 text-center sm:flex-row sm:text-left">
          <p className="text-[11px] text-[#8B99A7]">
            SourceX sourcing platform · Order details
          </p>

          <p className="break-all text-[11px] text-[#A0ACB7]">
            Request ID: {post?._id}
          </p>
        </div>
      </div>
    </main>
  );
};

export default Page;
