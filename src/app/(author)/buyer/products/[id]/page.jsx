import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FiArrowLeft, FiMapPin, FiPackage, FiShield } from "react-icons/fi";
import ProductPurchaseActions from "@/Components/BuyerSection/ProductPurchaseActions";
import { getSingleProduct } from "@/lib/actions/getData";
// import ProductPurchaseActions from "@/components/Buyer/ProductPurchaseActions";

const Page = async ({ params }) => {
  const { id } = await params;
  console.log("Product ID:", id);
  const res = await getSingleProduct(id);
  const product = res?.product ?? res?.data ?? res;

  console.log("Product details:", product);

  const quality =
    product.productQuality ?? product.ProductQuality ?? "Standard";

  const quantity = Number(product.availableQuantity);
  const minimumOrder = Number(product.minimumOrderQuantity);
  const unit = product.unitOfMeasure || "units";
  const currency = product.currency || "BDT";

  const formatPrice = (value) =>
    new Intl.NumberFormat("en-BD", {
      style: "currency",
      currency,
      maximumFractionDigits: 2,
    }).format(Number(value) || 0);

  const formatNumber = (value) => Number(value || 0).toLocaleString("en-BD");

  const showValue = (value) =>
    value !== undefined && value !== null && value !== ""
      ? value
      : "Not provided";

  const qualityStyles = {
    standard: "border-slate-200 bg-slate-50 text-slate-600",
    premium: "border-sky-200 bg-sky-50 text-sky-700",
    organic: "border-green-200 bg-green-50 text-green-700",
  };

  const qualityStyle =
    qualityStyles[String(quality).toLowerCase()] ?? qualityStyles.standard;

  const available = quantity >= minimumOrder;

  const cartProduct = {
    id: String(product._id),
    productName: product.productName,
    brandName: product.brandName,
    productCategory: product.productCategory,
    productImage: product.productImage,
    unitPrice: Number(product.unitPrice) || 0,
    currency,
    unitOfMeasure: unit,
    minimumOrderQuantity: minimumOrder,
    availableQuantity: quantity,
    supplierCompany: product.supplierCompany,
  };

  return (
    <main className="min-h-screen bg-[#F8FBFE] px-4 py-6 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* Breadcrumb */}
        <Link
          href="/buyer/products"
          className="mb-6 inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-[#007EA8]"
        >
          <FiArrowLeft className="size-4" />
          Back to Available Products
        </Link>

        {/* Header */}
        <div className="mb-7">
          <p className="mb-2 text-xs font-bold uppercase tracking-[0.2em] text-[#00AEEF]">
            SOURCEX MARKETPLACE
          </p>

          <h1 className="text-2xl font-extrabold tracking-tight text-[#102A4C] sm:text-3xl">
            Product Details
          </h1>

          <p className="mt-2 text-sm leading-6 text-gray-500">
            Explore product specifications, supplier information, pricing, and
            availability.
          </p>
        </div>

        {/* Product Overview */}
        <section className="mb-6 overflow-hidden rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            {/* Image */}
            <div className="relative flex min-h-[300px] items-center justify-center bg-[#F1F6FA] p-6 sm:min-h-[450px]">
              {product.productImage ? (
                <Image
                  src={product.productImage}
                  alt={product.productName}
                  width={700}
                  height={600}
                  unoptimized
                  className="max-h-[420px] w-full rounded-xl object-contain"
                />
              ) : (
                <div className="flex flex-col items-center gap-3 text-gray-400">
                  <FiPackage className="size-20" />
                  <p className="text-sm">No product image available</p>
                </div>
              )}

              <div className="absolute bottom-4 left-4 rounded-xl border border-gray-100 bg-white/95 px-4 py-3 shadow-sm">
                <p className="text-[10px] font-semibold uppercase tracking-wider text-gray-400">
                  Product Code
                </p>
                <p className="mt-1 font-mono text-sm font-bold text-[#102A4C]">
                  {showValue(product.productCode)}
                </p>
              </div>
            </div>

            {/* Summary */}
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

                <span
                  className={`rounded-full px-3 py-1.5 text-xs font-semibold ${
                    available
                      ? "bg-green-50 text-green-700"
                      : "bg-red-50 text-red-700"
                  }`}
                >
                  {available ? "Available" : "Unavailable"}
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
                  <p className="mt-2 break-words text-2xl font-extrabold text-[#102A4C]">
                    {formatPrice(product.unitPrice)}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">Per {unit}</p>
                </div>

                <div>
                  <p className="text-xs font-medium text-gray-400">
                    Available Quantity
                  </p>
                  <p className="mt-2 text-2xl font-extrabold text-[#102A4C]">
                    {formatNumber(quantity)}
                  </p>
                  <p className="mt-1 text-xs text-gray-400">{unit} available</p>
                </div>
              </div>

              <div className="mt-6 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-[#E0E8EF] bg-[#F8FBFE] p-3">
                  <p className="text-xs text-gray-400">Minimum Order</p>
                  <p className="mt-1 text-sm font-bold text-[#102A4C]">
                    {formatNumber(minimumOrder)} {unit}
                  </p>
                </div>

                <div className="rounded-xl border border-[#E0E8EF] bg-[#F8FBFE] p-3">
                  <p className="text-xs text-gray-400">Estimated Delivery</p>
                  <p className="mt-1 text-sm font-bold text-[#102A4C]">
                    {showValue(
                      product.estimatedDelivery ?? product.estimateDelivery,
                    )}
                  </p>
                </div>
              </div>

              {/* Purchase Actions */}
              <ProductPurchaseActions
              // product={cartProduct}
              // disabled={!available}
              />

              <div className="mt-5 flex items-start gap-2 rounded-xl bg-[#F5FAFD] p-3">
                <FiShield className="mt-0.5 size-4 shrink-0 text-[#00AEEF]" />
                <p className="text-xs leading-5 text-slate-500">
                  Review product specifications, supplier details, and payment
                  terms before confirming your purchase.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Product Information */}
        <div className="grid grid-cols-1 items-start gap-6 lg:grid-cols-3">
          <div className="space-y-6 lg:col-span-2">
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5 sm:p-6">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Product Specifications
                </h2>
                <p className="mt-1 text-sm text-gray-400">
                  Product identification, quality, and origin.
                </p>
              </div>

              <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-6">
                {[
                  ["Product Name", product.productName],
                  ["Product Code", product.productCode],
                  ["Category", product.productCategory],
                  ["Brand", product.brandName],
                  ["Unit", product.unitOfMeasure],
                  ["Quality", quality],
                  ["Certification", product.certification],
                  ["Country of Origin", product.countryOfOrigin],
                  ["Shelf Life", product.shelfLife],
                ].map(([label, value]) => (
                  <div key={label}>
                    <p className="text-xs font-medium text-gray-400">{label}</p>
                    <p className="mt-1.5 break-words text-sm font-semibold text-[#203750]">
                      {showValue(value)}
                    </p>
                  </div>
                ))}
              </div>

              <div className="border-t border-gray-100 p-5 sm:p-6">
                <h3 className="text-sm font-bold text-[#203750]">
                  Specifications
                </h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-500">
                  {showValue(product.specifications)}
                </p>

                <h3 className="mt-5 text-sm font-bold text-[#203750]">
                  Additional Notes
                </h3>
                <p className="mt-2 whitespace-pre-line text-sm leading-7 text-gray-500">
                  {showValue(product.additionalNotes)}
                </p>
              </div>
            </section>

            {/* Delivery and Payment */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5 sm:p-6">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Delivery & Payment
                </h2>
              </div>

              <div className="grid grid-cols-1 gap-6 p-5 sm:grid-cols-2 sm:p-6">
                {[
                  ["Delivery Address", product.deliveryAddress],
                  ["Delivery Country", product.deliveryCountry],
                  [
                    "Estimated Delivery",
                    product.estimatedDelivery ?? product.estimateDelivery,
                  ],
                  ["Delivery Terms", product.deliveryTerms],
                  ["Payment Terms", product.paymentTerms],
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

          {/* Supplier Sidebar */}
          <aside className="space-y-6">
            <section className="rounded-2xl border border-[#E0E8EF] bg-white shadow-sm">
              <div className="border-b border-gray-100 p-5">
                <h2 className="text-base font-bold text-[#102A4C]">
                  Supplier Information
                </h2>
              </div>

              <div className="p-5">
                <div className="mb-5 flex items-center gap-3 rounded-xl bg-[#F5FAFD] p-4">
                  <div className="flex size-11 shrink-0 items-center justify-center rounded-xl bg-white text-[#00AEEF] shadow-sm">
                    <FiPackage className="size-5" />
                  </div>

                  <div className="min-w-0">
                    <p className="break-words text-sm font-bold text-[#102A4C]">
                      {showValue(product.supplierCompany)}
                    </p>
                    <p className="mt-1 text-xs text-gray-400">
                      {product.supplierPreference === "verified"
                        ? "Verified Supplier"
                        : "Supplier"}
                    </p>
                  </div>
                </div>

                <div className="space-y-5">
                  {[
                    ["Contact Person", product.supplierName],
                    ["Email", product.supplierEmail],
                    ["Phone", product.supplierPhone],
                  ].map(([label, value]) => (
                    <div key={label}>
                      <p className="text-xs font-medium text-gray-400">
                        {label}
                      </p>
                      <p className="mt-1.5 break-words text-sm font-semibold text-[#203750]">
                        {showValue(value)}
                      </p>
                    </div>
                  ))}

                  <div>
                    <p className="text-xs font-medium text-gray-400">
                      Supplier Location
                    </p>
                    <p className="mt-1.5 flex items-start gap-2 text-sm font-semibold text-[#203750]">
                      <FiMapPin className="mt-0.5 size-4 shrink-0 text-[#00AEEF]" />
                      {showValue(product.supplierLocation)}
                    </p>
                  </div>
                </div>
              </div>
            </section>

            {/* Order Summary */}
            <section className="rounded-2xl border border-[#E0E8EF] bg-white p-5 shadow-sm">
              <h2 className="text-base font-bold text-[#102A4C]">
                Order Summary
              </h2>

              <div className="mt-5 space-y-4">
                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-gray-500">Unit Price</span>
                  <span className="text-sm font-bold text-[#102A4C]">
                    {formatPrice(product.unitPrice)}
                  </span>
                </div>

                <div className="flex items-center justify-between gap-3">
                  <span className="text-xs text-gray-500">Minimum Order</span>
                  <span className="text-sm font-bold text-[#102A4C]">
                    {formatNumber(minimumOrder)} {unit}
                  </span>
                </div>

                <div className="border-t border-gray-100" />

                <div className="flex items-start justify-between gap-3">
                  <span className="text-xs text-gray-500">
                    Minimum Order Total
                  </span>
                  <span className="text-right text-base font-extrabold text-[#102A4C]">
                    {formatPrice(Number(product.unitPrice) * minimumOrder)}
                  </span>
                </div>

                <p className="text-[11px] leading-5 text-gray-400">
                  Shipping, taxes, and additional charges may be calculated
                  separately at checkout.
                </p>
              </div>
            </section>
          </aside>
        </div>

        <div className="mt-8 border-t border-[#E0E8EF] py-5 text-xs text-gray-400">
          SourceX · Product Marketplace
        </div>
      </div>
    </main>
  );
};

export default Page;
