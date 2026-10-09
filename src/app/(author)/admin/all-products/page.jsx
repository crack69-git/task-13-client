import Link from "next/link";
import Image from "next/image";

import { Button, Card, Chip, Separator } from "@heroui/react";

import {
  FaBoxOpen,
  FaBuilding,
  FaEdit,
  FaEye,
  FaTrash,
  FaTag,
  FaCubes,
  FaCheckCircle,
  FaTags,
} from "react-icons/fa";

import { getProducts } from "@/lib/actions/getData";
import ProductOverviewChart from "@/Components/AdminSection/ProductOverviewChart";

export const metadata = {
  title: "SourceX | All Products",
  description: "Manage products listed on the SourceX marketplace.",
};

const qualityColor = {
  Standard: "default",
  Premium: "primary",
  Organic: "success",
};

// ============================================================
// COMPACT STAT CARD
// ============================================================

function StatCard({ title, value, icon, iconBg, iconColor, valueColor }) {
  return (
    <Card className="min-h-[108px] rounded-xl border border-[#E0E8EF] bg-white shadow-sm transition-shadow hover:shadow-md">
      <div className="flex h-full items-center justify-between gap-3 p-3 sm:p-4">
        <div className="min-w-0">
          <p className="text-xs font-medium leading-5 text-[#8795A5]">
            {title}
          </p>

          <p className={`mt-1 text-2xl font-bold leading-tight ${valueColor}`}>
            {value}
          </p>
        </div>

        <div
          className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg"
          style={{ backgroundColor: iconBg, color: iconColor }}
        >
          {icon}
        </div>
      </div>
    </Card>
  );
}

// ============================================================
// PRODUCT CARD
// ============================================================

function ProductCard({ product }) {
  return (
    <Card className="group overflow-hidden rounded-xl border border-[#E0E8EF] bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_15px_40px_rgba(16,42,76,0.10)]">
      <div className="relative h-48 overflow-hidden bg-[#F4F8FB]">
        <Image
          src={product.productImage}
          alt={product.productName}
          width={400}
          height={208}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />

        <div className="absolute inset-0 bg-gradient-to-t from-[#102A4C]/30 via-transparent to-transparent" />

        <div className="absolute left-3 top-3">
          <Chip
            size="sm"
            className="bg-white/95 text-[#102A4C] shadow-sm backdrop-blur"
          >
            {product.productCode}
          </Chip>
        </div>

        <div className="absolute right-3 top-3">
          <Chip size="sm" className="bg-[#E9F9F0] font-semibold text-[#16834B]">
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#20B26B]" />
            {product.status}
          </Chip>
        </div>
      </div>

      <div className="p-4">
        <div className="mb-2 flex items-center gap-2">
          <FaTag className="text-xs text-[#00AEEF]" />
          <span className="text-xs font-semibold uppercase tracking-wide text-[#718196]">
            {product.productCategory}
          </span>
        </div>

        <h2 className="line-clamp-1 text-base font-bold text-[#102A4C]">
          {product.productName}
        </h2>

        <p className="mt-1 text-xs text-[#8795A5]">
          Brand: {product.brandName}
        </p>

        <div className="mt-3">
          <Chip
            size="sm"
            color={qualityColor[product.qualityTier] ?? "default"}
            variant="flat"
          >
            {product.qualityTier} Quality
          </Chip>
        </div>

        <Separator className="my-3" />

        <div className="grid grid-cols-2 gap-3">
          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-[#8A98A7]">
              Unit Price
            </p>
            <p className="mt-1 text-lg font-bold text-[#102A4C]">
              {product.currency}{" "}
              {Number(product.unitPrice ?? 0).toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>

          <div>
            <p className="text-[10px] font-medium uppercase tracking-wide text-[#8A98A7]">
              Available
            </p>
            <p className="mt-1 text-lg font-bold text-[#102A4C]">
              {Number(product.availableQuantity ?? 0).toLocaleString()}
            </p>
            <p className="text-[10px] text-[#8795A5]">
              {product.unitOfMeasure}
            </p>
          </div>
        </div>

        <div className="mt-4 rounded-lg bg-[#F7FAFC] p-2.5">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-lg bg-white text-[#00AEEF] shadow-sm">
              <FaBuilding size={13} />
            </div>

            <div className="min-w-0">
              <p className="truncate text-xs font-semibold text-[#102A4C]">
                {product.supplierCompany}
              </p>
              <p className="truncate text-[11px] text-[#8795A5]">
                {product.supplierLocation}
              </p>
            </div>
          </div>
        </div>

        <div className="mt-3 flex items-center gap-2 text-xs text-[#718196]">
          <FaCubes className="text-[#00AEEF]" />
          <span>MOQ:</span>
          <span className="font-semibold text-[#102A4C]">
            {Number(product.minimumOrderQuantity ?? 0).toLocaleString()}{" "}
            {product.unitOfMeasure}
          </span>
        </div>

        <div className="mt-4 flex gap-2">
          <Link
            href={`/admin/all-products/${product.productCode}`}
            className="min-w-0 flex-1"
          >
            <Button
              size="sm"
              variant="flat"
              className="w-full bg-[#EAF8FD] font-semibold text-[#007EA8] hover:bg-[#D9F3FC]"
            >
              <FaEye />
              View
            </Button>
          </Link>

          <Button
            size="sm"
            variant="flat"
            className="flex-1 bg-[#F3F5F7] font-semibold text-[#526273] hover:bg-[#E9EDF1]"
          >
            <FaEdit />
            Edit
          </Button>

          <Button
            size="sm"
            isIconOnly
            variant="flat"
            aria-label={`Delete ${product.productName}`}
            className="bg-[#FFF1EE] text-[#E74C27] hover:bg-[#FFE5DF]"
          >
            <FaTrash />
          </Button>
        </div>
      </div>
    </Card>
  );
}

// ============================================================
// PAGE
// ============================================================

const Page = async () => {
  const response = await getProducts();
  const data = Array.isArray(response) ? response : [];

  const activeCount = data.filter(
    (product) => product.status === "Active",
  ).length;

  const premiumCount = data.filter(
    (product) => product.qualityTier === "Premium",
  ).length;

  const categoryCount = new Set(
    data.map((product) => product.productCategory).filter(Boolean),
  ).size;

  // Build the last six calendar months using actual product dates.
  const now = new Date();

  const monthlyProductData = Array.from({ length: 6 }, (_, index) => {
    const date = new Date(now.getFullYear(), now.getMonth() - 5 + index, 1);

    return {
      year: date.getFullYear(),
      monthIndex: date.getMonth(),
      month: date.toLocaleDateString("en-US", { month: "short" }),
      products: 0,
    };
  });

  data.forEach((product) => {
    const rawDate =
      product.createdDate ?? product.createdAt ?? product.created_at;

    if (!rawDate) return;

    const date = new Date(rawDate);
    if (Number.isNaN(date.getTime())) return;

    const monthEntry = monthlyProductData.find(
      (item) =>
        item.year === date.getFullYear() && item.monthIndex === date.getMonth(),
    );

    if (monthEntry) monthEntry.products += 1;
  });

  return (
    <main className="min-h-screen bg-[#F8FBFE] px-4 py-6 sm:px-6 sm:py-8 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* HEADER */}
        <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <div className="mb-2 flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />
              <span className="text-xs font-bold uppercase tracking-widest text-[#00AEEF]">
                ADMIN PANEL
              </span>
            </div>

            <h1 className="text-2xl font-extrabold tracking-tight text-[#102A4C] sm:text-3xl">
              All Products
            </h1>

            <p className="mt-2 text-sm text-[#718196]">
              Manage all products currently listed on the SourceX marketplace.
            </p>
          </div>

          <Link href="/admin/post-product">
            <Button className="bg-[#FF4F0A] font-semibold text-white shadow-[0_8px_20px_rgba(255,79,10,0.18)]">
              <FaBoxOpen />
              Post New Product
            </Button>
          </Link>
        </div>

        {/* GRAPH LEFT + COMPACT STAT CARDS RIGHT */}
        <div className="mb-7 grid grid-cols-1 items-stretch gap-4 lg:grid-cols-5">
          {/* LEFT: GRAPH */}
          <div className="min-w-0 lg:col-span-3">
            <ProductOverviewChart monthlyData={monthlyProductData} />
          </div>

          {/* RIGHT: FOUR COMPACT CARDS */}
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:col-span-2">
            <StatCard
              title="Total Products"
              value={data.length}
              icon={<FaBoxOpen size={17} />}
              iconBg="#EAF8FD"
              iconColor="#00AEEF"
              valueColor="text-[#102A4C]"
            />

            <StatCard
              title="Active Products"
              value={activeCount}
              icon={<FaCheckCircle size={17} />}
              iconBg="#E9F9F0"
              iconColor="#16834B"
              valueColor="text-[#16834B]"
            />

            <StatCard
              title="Premium Products"
              value={premiumCount}
              icon={<FaCubes size={17} />}
              iconBg="#EAF8FD"
              iconColor="#007EA8"
              valueColor="text-[#007EA8]"
            />

            <StatCard
              title="Categories"
              value={categoryCount}
              icon={<FaTags size={17} />}
              iconBg="#FFF1E8"
              iconColor="#FF4F0A"
              valueColor="text-[#102A4C]"
            />
          </div>
        </div>

        {/* PRODUCTS HEADER */}
        <div className="mb-4 flex items-center justify-between gap-3">
          <div>
            <h2 className="text-lg font-bold text-[#102A4C]">
              Marketplace Products
            </h2>
            <p className="mt-1 text-sm text-[#8795A5]">
              Browse and manage your product listings.
            </p>
          </div>

          <span className="shrink-0 rounded-lg border border-[#E0E8EF] bg-white px-3 py-2 text-xs font-semibold text-[#526273]">
            {data.length} products
          </span>
        </div>

        {/* PRODUCT GRID */}
        {data.length > 0 ? (
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 xl:grid-cols-3">
            {data.map((product) => (
              <ProductCard
                key={product.id ?? product._id ?? product.productCode}
                product={product}
              />
            ))}
          </div>
        ) : (
          <div className="rounded-xl border border-dashed border-[#D5E0E9] bg-white px-5 py-14 text-center">
            <FaBoxOpen className="mx-auto mb-3 text-3xl text-[#A5B4C3]" />
            <h3 className="font-semibold text-[#102A4C]">No products found</h3>
            <p className="mt-1 text-sm text-[#8795A5]">
              Add a product to see it listed here.
            </p>
          </div>
        )}
      </div>
    </main>
  );
};

export default Page;
