import { getSingleProduct } from "@/lib/actions/getData";
import React from "react";

const page = async ({ params }) => {
  const { id } = await params;
  console.log("id", id);
  const res = await getSingleProduct(id);
  console.log("res", res);

  const product = res?.product ?? res?.data ?? res;

  if (!product || !product.productName) {
    return (
      <div className="flex min-h-[60vh] items-center justify-center bg-[#F8FBFE] p-6">
        <div className="rounded-2xl border border-[#E0E8EF] bg-white p-8 text-center shadow-sm">
          <h2 className="text-xl font-bold text-[#102A4C]">
            Product Not Found
          </h2>
          <p className="mt-2 text-sm text-gray-500">
            The requested product could not be found.
          </p>
        </div>
      </div>
    );
  }

  const quality = product.ProductQuality ?? product.qualityTier ?? "Standard";
  const delivery = product.estimateDelivery ?? product.expectedDelivery;
  const createdDate = product.createdDate ?? product.createdAt;

  const formatDate = (date) => {
    if (!date) return "Not provided";

    const parsedDate = new Date(date);

    if (Number.isNaN(parsedDate.getTime())) {
      return date;
    }

    return parsedDate.toLocaleDateString("en-GB", {
      day: "2-digit",
      month: "short",
      year: "numeric",
    });
  };

  const formatPrice = (price, currency = "USD") => {
    const amount = Number(price);

    if (!Number.isFinite(amount)) {
      return `${currency} ${price ?? "—"}`;
    }

    try {
      return new Intl.NumberFormat("en-US", {
        style: "currency",
        currency,
        maximumFractionDigits: 2,
      }).format(amount);
    } catch {
      return `${currency} ${amount.toLocaleString()}`;
    }
  };

  const showValue = (value) =>
    value !== undefined && value !== null && value !== ""
      ? value
      : "Not provided";

  const qualityStyles = {
    standard: "border-gray-200 bg-gray-50 text-gray-600",
    premium: "border-sky-200 bg-sky-50 text-sky-700",
    organic: "border-green-200 bg-green-50 text-green-700",
  };

  const qualityStyle =
    qualityStyles[String(quality).toLowerCase()] ?? qualityStyles.standard;

  return (
    <main className="min-h-screen bg-[#F8FBFE] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Page Header */}
        <div className="mb-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            SOURCEX ADMIN PANEL
          </p>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#102A4C] sm:text-3xl">
            Product Details
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            View product information, pricing, inventory, and supplier details.
          </p>
        </div>

        {/* Product Overview */}
        <section className="mb-6 overflow-hidden rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Product Image */}
            <div className="relative flex min-h-[300px] items-center justify-center bg-[#F1F6FA] p-6 sm:min-h-[400px]">
              {product.productImage ? (
                <img
                  src={product.productImage}
                  alt={product.productName}
                  className="max-h-[400px] w-full rounded-xl object-contain"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-gray-400">
                  <div className="text-6xl">📦</div>
                  <p className="text-sm">No product image available</p>
                </div>
              )}

              <div className="absolute left-4 top-4 rounded-lg border border-gray-100 bg-white px-3 py-2 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Product Code
                </p>
                <p className="mt-1 font-mono text-sm font-bold text-[#102A4C]">
                  {showValue(product.productCode)}
                </p>
              </div>
            </div>

            {/* Product Summary */}
            <div className="flex flex-col justify-center p-5 sm:p-8 lg:p-10">
              <div className="mb-4 flex flex-wrap items-center gap-2">
                <span className="rounded-full bg-[#EAF8FD] px-3 py-1.5 text-xs font-semibold text-[#007EA8]">
                  {showValue(product.productCategory)}
                </span>

                <span
                  className={`rounded-full border px-3 py-1.5 text-xs font-semibold ${qualityStyle}`}
                >
                  {quality} Quality
                </span>
              </div>

              <p className="text-xs font-semibold uppercase tracking-widest text-gray-400">
                {showValue(product.brandName)}
              </p>

              <h2 className="mt-2 text-2xl font-extrabold leading-tight text-[#102A4C] sm:text-3xl">
                {product.productName}
              </h2>

              <p className="mt-4 text-sm leading-7 text-gray-500">
                {showValue(product.description)}
              </p>

              <div className="my-6 border-t border-gray-100" />

              <div className="grid grid-cols-2 gap-5">
                <div>
                  <p className="text-xs font-medium text-gray-400">
                    Unit Price
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-[#102A4C]">
                    {formatPrice(product.unitPrice, product.currency)}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    Per {product.unitOfMeasure || "unit"}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-400">
                    Available Quantity
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-[#102A4C]">
                    {Number.isFinite(Number(product.availableQuantity))
                      ? Number(product.availableQuantity).toLocaleString()
                      : showValue(product.availableQuantity)}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">
                    {product.unitOfMeasure || "units"} available
                  </p>
                </div>
              </div>

              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-gray-100 pt-5">
                <div>
                  <p className="text-xs text-gray-400">Created Date</p>
                  <p className="mt-1 text-sm font-semibold text-[#102A4C]">
                    {formatDate(createdDate)}
                  </p>
                </div>

                <span className="rounded-full bg-green-50 px-3 py-1.5 text-xs font-semibold text-green-700">
                  {product.status || "Active"}
                </span>
              </div>
            </div>
          </div>
        </section>

        {/* Quick Statistics */}
        <section className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          {[
            {
              label: "Unit Price",
              value: formatPrice(product.unitPrice, product.currency),
              description: "Price per unit",
            },
            {
              label: "Available Stock",
              value: showValue(product.availableQuantity),
              description: product.unitOfMeasure || "Units",
            },
            {
              label: "Minimum Order",
              value: showValue(product.minimumOrderQuantity),
              description: product.unitOfMeasure || "Units",
            },
            {
              label: "Estimated Delivery",
              value: showValue(delivery),
              description: "Expected fulfillment time",
            },
          ].map((item) => (
            <div
              key={item.label}
              className="rounded-2xl border border-[#E0E8EF] bg-white p-5 shadow-sm"
            >
              <p className="text-xs font-medium text-gray-400">{item.label}</p>
              <p className="mt-3 break-words text-xl font-extrabold text-[#102A4C]">
                {item.value}
              </p>
              <p className="mt-1 text-xs text-gray-400">{item.description}</p>
            </div>
          ))}
        </section>

        {/* Main Details */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          {/* Left Column */}
          <div className="space-y-6 lg:col-span-2">
            {/* Product Information */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5 sm:p-6">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Product Information
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Basic product identification and classification.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-6 lg:grid-cols-3">
                {[
                  ["Product Name", product.productName],
                  ["Product Code", product.productCode],
                  ["Category", product.productCategory],
                  ["Brand", product.brandName],
                  ["Unit of Measure", product.unitOfMeasure],
                  ["Status", product.status || "Active"],
                ].map(([label, value]) => (
                  <div key={label} className="min-w-0">
                    <p className="text-xs font-medium text-gray-400">{label}</p>
                    <p className="mt-1.5 break-words text-sm font-semibold text-[#203750]">
                      {showValue(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Pricing & Inventory */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5 sm:p-6">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Pricing & Inventory
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Commercial pricing and stock availability.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-6">
                {[
                  [
                    "Unit Price",
                    formatPrice(product.unitPrice, product.currency),
                  ],
                  ["Currency", product.currency],
                  [
                    "Available Quantity",
                    `${showValue(product.availableQuantity)} ${product.unitOfMeasure || ""}`,
                  ],
                  [
                    "Minimum Order Quantity",
                    `${showValue(product.minimumOrderQuantity)} ${product.unitOfMeasure || ""}`,
                  ],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs font-medium text-gray-400">{label}</p>
                    <p className="mt-1.5 break-words text-sm font-semibold text-[#203750]">
                      {value}
                    </p>
                  </div>
                ))}
              </div>
            </section>

            {/* Quality & Certification */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5 sm:p-6">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Quality & Certification
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Product quality and origin details.
                </p>
              </div>

              <div className="p-5 sm:p-6">
                <div className="mb-6 rounded-xl border border-gray-100 bg-[#F8FBFE] p-4">
                  <p className="mb-3 text-xs font-semibold text-gray-400">
                    QUALITY TIER
                  </p>
                  <span
                    className={`inline-flex rounded-full border px-3 py-1.5 text-xs font-semibold ${qualityStyle}`}
                  >
                    {quality}
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                  {[
                    ["Certification", product.certification],
                    ["Country of Origin", product.countryOfOrigin],
                    ["Shelf Life", product.shelfLife],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-xs font-medium text-gray-400">
                        {label}
                      </p>
                      <p className="mt-1.5 text-sm font-semibold text-[#203750]">
                        {showValue(value)}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Description & Specifications */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5 sm:p-6">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Description & Specifications
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Detailed product specifications and additional notes.
                </p>
              </div>

              <div className="space-y-6 p-5 sm:p-6">
                <div>
                  <h3 className="text-sm font-bold text-[#203750]">
                    Product Description
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-500">
                    {showValue(product.description)}
                  </p>
                </div>

                <div className="border-t border-gray-100" />

                <div>
                  <h3 className="text-sm font-bold text-[#203750]">
                    Specifications
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-500">
                    {showValue(product.specifications)}
                  </p>
                </div>

                <div className="border-t border-gray-100" />

                <div>
                  <h3 className="text-sm font-bold text-[#203750]">
                    Additional Notes
                  </h3>
                  <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-500">
                    {showValue(product.additionalNotes)}
                  </p>
                </div>
              </div>
            </section>

            {/* Delivery */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5 sm:p-6">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Delivery Information
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Destination and expected delivery time.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-6">
                {[
                  ["Delivery Address", product.deliveryAddress],
                  ["Delivery Country", product.deliveryCountry],
                  ["Estimated Delivery", delivery],
                  ["Delivery Terms", product.deliveryTerms],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs font-medium text-gray-400">{label}</p>
                    <p className="mt-1.5 break-words text-sm font-semibold text-[#203750]">
                      {showValue(value)}
                    </p>
                  </div>
                ))}
              </div>
            </section>
          </div>

          {/* Right Column */}
          <aside className="space-y-6">
            {/* Supplier Information */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Supplier Information
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Supplier and contact details.
                </p>
              </div>

              <div className="p-5">
                <div className="mb-5 flex items-center gap-3 rounded-xl bg-[#F5FAFD] p-4">
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#00AEEF] shadow-sm">
                    <span className="text-lg">🏢</span>
                  </div>
                  <div className="min-w-0">
                    <p className="break-words text-sm font-bold text-[#102A4C]">
                      {showValue(product.supplierCompany)}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {product.supplierPreference || "Supplier"}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    ["Contact Person", product.supplierName],
                    ["Email Address", product.supplierEmail],
                    ["Phone Number", product.supplierPhone],
                    ["Location", product.supplierLocation],
                    ["Supplier Preference", product.supplierPreference],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-xs font-medium text-gray-400">
                        {label}
                      </p>
                      {label === "Email Address" && value ? (
                        <a
                          href={`mailto:${value}`}
                          className="mt-1.5 block break-all text-sm font-semibold text-[#007EA8] hover:underline"
                        >
                          {value}
                        </a>
                      ) : (
                        <p className="mt-1.5 break-words text-sm font-semibold text-[#203750]">
                          {showValue(value)}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </section>

            {/* Payment Terms */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Payment Terms
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Preferred payment arrangement.
                </p>
              </div>

              <div className="p-5">
                <p className="text-xs font-medium text-gray-400">
                  Payment Terms
                </p>
                <p className="mt-2 text-base font-bold text-[#102A4C]">
                  {showValue(product.paymentTerms)}
                </p>
              </div>
            </section>

            {/* Product References */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Product References
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Product image and supporting documents.
                </p>
              </div>

              <div className="space-y-3 p-5">
                {product.productImage && (
                  <a
                    href={product.productImage}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl border border-gray-100 p-3 text-sm font-semibold text-[#007EA8] transition hover:border-[#00AEEF]"
                  >
                    View Product Image
                  </a>
                )}

                {product.attachmentLink && (
                  <a
                    href={product.attachmentLink}
                    target="_blank"
                    rel="noreferrer"
                    className="block rounded-xl border border-gray-100 p-3 text-sm font-semibold text-[#007EA8] transition hover:border-[#00AEEF]"
                  >
                    Open Attachment
                  </a>
                )}

                {!product.productImage && !product.attachmentLink && (
                  <p className="text-sm text-gray-400">
                    No product references have been added.
                  </p>
                )}
              </div>
            </section>

            {/* Record Information */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Record Information
                </h2>
              </div>

              <div className="space-y-5 p-5">
                <div>
                  <p className="text-xs font-medium text-gray-400">
                    MongoDB ID
                  </p>
                  <p className="mt-1.5 break-all font-mono text-xs font-semibold text-[#203750]">
                    {showValue(product._id?.toString?.() ?? product._id)}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-400">
                    Created Date
                  </p>
                  <p className="mt-1.5 text-sm font-semibold text-[#203750]">
                    {formatDate(createdDate)}
                  </p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-400">
                    Product Code
                  </p>
                  <p className="mt-1.5 font-mono text-sm font-semibold text-[#203750]">
                    {showValue(product.productCode)}
                  </p>
                </div>
              </div>
            </section>
          </aside>
        </div>

        {/* Footer */}
        <div className="mt-8 border-t border-[#E0E8EF] py-5 text-xs text-gray-400">
          SourceX Admin · Product Management
        </div>
      </div>
    </main>
  );
};

export default page;
