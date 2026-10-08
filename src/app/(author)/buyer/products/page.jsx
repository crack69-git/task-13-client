"use client";

import React, { useMemo, useState } from "react";
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

const products = [
  {
    id: 1,
    name: "Premium Cotton T-Shirt",
    category: "Garments",
    supplier: "Chattogram Apparel Ltd.",
    location: "Chattogram, Bangladesh",
    price: "৳180 - ৳240",
    moq: "500 pcs",
    stock: "Available",
    image:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?auto=format&fit=crop&w=900&q=80",
    description:
      "High-quality 100% cotton t-shirts suitable for wholesale and retail sourcing.",
  },
  {
    id: 2,
    name: "Denim Jeans",
    category: "Garments",
    supplier: "Blue Stitch Industries",
    location: "Dhaka, Bangladesh",
    price: "৳650 - ৳850",
    moq: "300 pcs",
    stock: "Available",
    image:
      "https://images.unsplash.com/photo-1542272604-787c3835535d?auto=format&fit=crop&w=900&q=80",
    description:
      "Export-quality denim jeans available in multiple sizes and washes.",
  },
  {
    id: 3,
    name: "Leather Wallet",
    category: "Leather Goods",
    supplier: "Heritage Leather BD",
    location: "Dhaka, Bangladesh",
    price: "৳280 - ৳420",
    moq: "200 pcs",
    stock: "Available",
    image:
      "https://images.unsplash.com/photo-1627123424574-724758594e93?auto=format&fit=crop&w=900&q=80",
    description:
      "Genuine leather wallets with custom branding and packaging options.",
  },
  {
    id: 4,
    name: "Jute Shopping Bag",
    category: "Jute Products",
    supplier: "Green Jute Export",
    location: "Khulna, Bangladesh",
    price: "৳45 - ৳80",
    moq: "1,000 pcs",
    stock: "Available",
    image:
      "https://images.unsplash.com/photo-1594223274512-ad4803739b7c?auto=format&fit=crop&w=900&q=80",
    description:
      "Eco-friendly jute shopping bags with customizable sizes and printing.",
  },
  {
    id: 5,
    name: "Ceramic Coffee Mug",
    category: "Home & Kitchen",
    supplier: "Bangla Ceramic Works",
    location: "Narayanganj, Bangladesh",
    price: "৳95 - ৳150",
    moq: "500 pcs",
    stock: "Available",
    image:
      "https://images.unsplash.com/photo-1514228742587-6b1558fcca3d?auto=format&fit=crop&w=900&q=80",
    description:
      "Premium ceramic mugs suitable for restaurants, offices and promotional use.",
  },
  {
    id: 6,
    name: "Sports Running Shoes",
    category: "Footwear",
    supplier: "Active Footwear BD",
    location: "Gazipur, Bangladesh",
    price: "৳850 - ৳1,200",
    moq: "200 pairs",
    stock: "Limited",
    image:
      "https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=900&q=80",
    description:
      "Comfortable sports footwear with private-label and bulk-order options.",
  },
  {
    id: 7,
    name: "Organic Cotton Fabric",
    category: "Textiles",
    supplier: "Natural Textile Mills",
    location: "Narayanganj, Bangladesh",
    price: "৳320 - ৳450 / kg",
    moq: "500 kg",
    stock: "Available",
    image:
      "https://images.unsplash.com/photo-1528459105426-b9548367069b?auto=format&fit=crop&w=900&q=80",
    description:
      "Soft organic cotton fabric suitable for garment manufacturing.",
  },
  {
    id: 8,
    name: "Bamboo Kitchen Set",
    category: "Home & Kitchen",
    supplier: "Eco Craft Bangladesh",
    location: "Sylhet, Bangladesh",
    price: "৳450 - ৳700",
    moq: "300 sets",
    stock: "Available",
    image:
      "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=900&q=80",
    description:
      "Sustainable bamboo kitchen accessories designed for wholesale buyers.",
  },
];

const categories = [
  "All",
  "Garments",
  "Leather Goods",
  "Jute Products",
  "Home & Kitchen",
  "Footwear",
  "Textiles",
];

export default function Page() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("All");

  const filteredProducts = useMemo(() => {
    return products.filter((product) => {
      const matchesCategory =
        category === "All" || product.category === category;

      const searchText = search.toLowerCase();

      const matchesSearch =
        product.name.toLowerCase().includes(searchText) ||
        product.category.toLowerCase().includes(searchText) ||
        product.supplier.toLowerCase().includes(searchText) ||
        product.location.toLowerCase().includes(searchText);

      return matchesCategory && matchesSearch;
    });
  }, [search, category]);

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

          {/* Search */}
          <div className="mt-7 flex flex-col gap-3 lg:flex-row">
            <div className="relative flex-1">
              <FiSearch className="pointer-events-none absolute left-4 top-1/2 size-5 -translate-y-1/2 text-slate-400" />

              <input
                type="text"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search products, suppliers, categories..."
                className="h-12 w-full rounded-xl border border-slate-200 bg-slate-50 pl-12 pr-4 text-sm font-medium text-slate-900 outline-none transition placeholder:text-slate-400 focus:border-cyan-400 focus:bg-white focus:ring-4 focus:ring-cyan-50"
              />
            </div>

            <button
              type="button"
              className="flex h-12 items-center justify-center gap-2 rounded-xl border border-slate-200 bg-white px-5 text-sm font-bold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
            >
              <HiOutlineAdjustments className="size-5" />
              Filters
            </button>
          </div>
        </div>
      </section>

      {/* Category Navigation */}
      <section className="border-b border-slate-200 bg-white">
        <div className="mx-auto max-w-7xl overflow-x-auto px-4 sm:px-6 lg:px-8">
          <div className="flex min-w-max gap-2 py-3">
            {categories.map((item) => {
              const active = category === item;

              return (
                <button
                  key={item}
                  type="button"
                  onClick={() => setCategory(item)}
                  className={`rounded-lg px-4 py-2 text-xs font-bold transition ${
                    active
                      ? "bg-slate-900 text-white shadow-sm"
                      : "text-slate-500 hover:bg-slate-100 hover:text-slate-900"
                  }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
        </div>
      </section>

      {/* Product Content */}
      <section className="mx-auto max-w-7xl px-4 py-8 sm:px-6 lg:px-8">
        {/* Results Header */}
        <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-lg font-extrabold text-slate-900">Products</h2>

            <p className="mt-1 text-xs font-medium text-slate-500">
              Showing{" "}
              <span className="font-bold text-slate-700">
                {filteredProducts.length}
              </span>{" "}
              available products
            </p>
          </div>

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-500">
            <FiFilter className="size-4" />
            Verified sourcing partners
          </div>
        </div>

        {filteredProducts.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
            {filteredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
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
  const isLimited = product.stock === "Limited";

  return (
    <article className="group overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition duration-300 hover:-translate-y-1 hover:border-cyan-200 hover:shadow-xl hover:shadow-slate-200/60">
      {/* Product Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-slate-100">
        <Image
          src={product.image}
          alt={product.name}
          fill
          className="object-cover transition duration-500 group-hover:scale-105"
          unoptimized
        />

        {/* Category */}
        <div className="absolute left-3 top-3">
          <span className="rounded-lg bg-white/95 px-2.5 py-1.5 text-[10px] font-extrabold uppercase tracking-wide text-slate-700 shadow-sm backdrop-blur">
            {product.category}
          </span>
        </div>

        {/* Stock */}
        <div className="absolute right-3 top-3">
          <span
            className={`inline-flex items-center gap-1.5 rounded-lg px-2.5 py-1.5 text-[10px] font-extrabold shadow-sm backdrop-blur ${
              isLimited
                ? "bg-amber-50/95 text-amber-700"
                : "bg-emerald-50/95 text-emerald-700"
            }`}
          >
            <span
              className={`size-1.5 rounded-full ${
                isLimited ? "bg-amber-500" : "bg-emerald-500"
              }`}
            />
            {product.stock}
          </span>
        </div>
      </div>

      {/* Product Information */}
      <div className="p-5">
        <div className="flex items-start justify-between gap-3">
          <div className="min-w-0">
            <h3 className="line-clamp-1 text-base font-extrabold text-slate-900">
              {product.name}
            </h3>

            <p className="mt-1 text-xs font-semibold text-slate-500">
              {product.supplier}
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
              {product.price}
            </p>
          </div>

          <div className="rounded-xl bg-slate-50 p-3">
            <p className="text-[10px] font-bold uppercase tracking-wide text-slate-400">
              MOQ
            </p>

            <p className="mt-1 text-sm font-extrabold text-slate-900">
              {product.moq}
            </p>
          </div>
        </div>

        {/* Location */}
        <div className="mt-4 flex items-center gap-2 text-xs font-semibold text-slate-500">
          <FiMapPin className="size-4 shrink-0 text-cyan-500" />
          <span className="truncate">{product.location}</span>
        </div>

        {/* Action */}
        <div className="mt-5 flex items-center gap-2">
          <Link
            href={`/buyer/products/${product.id}`}
            className="flex flex-1 items-center justify-center gap-2 rounded-xl bg-slate-900 px-4 py-3 text-xs font-bold text-white transition hover:bg-slate-800"
          >
            View Product
            <FiArrowRight className="size-4" />
          </Link>

          <Link
            href={`/buyer?product=${product.id}`}
            className="flex items-center justify-center rounded-xl border border-slate-200 px-4 py-3 text-xs font-bold text-slate-700 transition hover:border-cyan-200 hover:bg-cyan-50 hover:text-cyan-700"
          >
            Request
          </Link>
        </div>
      </div>
    </article>
  );
}
