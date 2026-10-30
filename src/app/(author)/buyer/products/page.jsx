import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  FiSearch,
  FiMapPin,
  FiPackage,
  FiArrowRight,
  FiFilter,
  FiShoppingBag,
  FiCheckCircle,
} from "react-icons/fi";
import { HiOutlineAdjustments } from "react-icons/hi";
import { getProducts } from "@/lib/actions/getData";

export default async function Page() {
  const data = await getProducts();
  console.log("Products data:", data);
  return (
    <main className="min-h-screen bg-slate-50">
      {/* Header */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
          <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
            <div>
              <div className="mb-3 inline-flex items-center gap-2 rounded-full bg-cyan-50 px-3 py-1.5 text-xs font-bold text-cyan-700">
                <FiShoppingBag className="size-3.5" />
                SOURCING CATALOG
              </div>

              <h1 className="text-2xl font-extrabold tracking-tight text-slate-900 sm:text-3xl">
                Available Products
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-500 sm:text-base">
                Discover products from verified suppliers and find the right
                products for your business.
              </p>
            </div>

            <Link
              href="/buyer"
              className="inline-flex items-center justify-center gap-2 rounded-xl bg-slate-900 px-5 py-3 text-sm font-bold text-white shadow-sm transition hover:bg-slate-800"
            >
              Request a Product
              <FiArrowRight className="size-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Product Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8 ">
        {/* Results Header */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Products</h2>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-700">{data.length}</span>{" "}
              available products
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <FiFilter className="size-4" />
            Verified sourcing partners
          </div>
        </div>

        {data.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {data.map((product) => (
              <ProductCard key={product._id} product={product} />
            ))}
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-slate-300 bg-white px-6 py-16 text-center">
            <div className="mx-auto flex size-14 items-center justify-center rounded-2xl bg-slate-100 text-slate-400">
              <FiPackage className="size-7" />
            </div>

            <h3 className="mt-4 text-base font-extrabold text-slate-900">
              No products found
            </h3>

            <p className="mx-auto mt-1 max-w-md text-sm text-slate-500">
              Try changing your search term or selecting another category.
            </p>

            <button
              type="button"
              onClick={() => {
                setSearch("");
                setCategory("All");
              }}
              className="mt-5 rounded-xl bg-slate-900 px-5 py-2.5 text-sm font-bold text-white transition hover:bg-slate-800"
            >
              Clear Filters
            </button>
          </div>
        )}
      </section>
    </main>
  );
}

function ProductCard({ product }) {
  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/60">
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={product.productImage}
          alt={product.productName}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />

        {/* Category */}
        <div className="absolute left-3 top-3">
          <span className="rounded-lg bg-white/95 px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur">
            {product.productCategory}
          </span>
        </div>

        {/* Stock */}
        <div className="absolute right-3 top-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-extrabold shadow-sm backdrop-blur ${
              product.availableQuantity < 10
                ? "bg-amber-50/95 text-amber-700"
                : "bg-emerald-50/95 text-emerald-700"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${
                product.availableQuantity < 10
                  ? "bg-amber-500"
                  : "bg-emerald-500"
              }`}
            />
            {product.availableQuantity}
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="line-clamp-1 text-base font-extrabold text-slate-900">
              {product.productName}
            </h3>

            <p className="mt-1 text-xs font-semibold text-slate-500">
              {product.supplierCompany}
            </p>
          </div>

          <div className="flex size-8 shrink-0 items-center justify-center rounded-lg bg-cyan-50 text-cyan-600">
            <FiCheckCircle className="size-4" />
          </div>
        </div>

        <p className="mt-3 line-clamp-2 text-xs leading-5 text-slate-500">
          {product.description}
        </p>

        {/* Product Meta */}
        <div className="mt-4 grid grid-cols-2 gap-2">
          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              Price
            </p>

            <p className="mt-1 text-sm font-extrabold text-slate-900">
              {product.unitPrice} {product.currency} / {product.unitOfMeasure}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              MOQ
            </p>

            <p className="mt-1 text-sm font-extrabold text-slate-900">
              {product.minimumOrderQuantity} {product.unitOfMeasure}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <FiMapPin className="size-4 shrink-0 text-cyan-500" />
          <span className="truncate">{product.supplierLocation}</span>
        </div>

        {/* Action */}
        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`/buyer/products/${product.productCode}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white transition hover:bg-slate-800"
          >
            View Product
            <FiArrowRight className="size-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
