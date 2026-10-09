import React from "react";
import Link from "next/link";

import { Button, Card, div, Chip, Separator } from "@heroui/react";

import {
  FaBoxOpen,
  FaBuilding,
  FaEdit,
  FaEye,
  FaTrash,
  FaTag,
  FaCubes,
} from "react-icons/fa";
import { getProducts } from "@/lib/actions/getData";
import Image from "next/image";

// ============================================================
// DEMO PRODUCTS
// ============================================================

const products = [
  {
    id: "1",
    productCode: "SX-583921",
    productName: "Premium Cotton T-Shirt",
    productCategory: "apparel",
    brandName: "SourceX",
    productImage:
      "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=800",
    qualityTier: "Standard",
    availableQuantity: 1000,
    unitOfMeasure: "PCS",
    unitPrice: 12.5,
    currency: "USD",
    minimumOrderQuantity: 100,
    supplierCompany: "ABC Textiles Ltd.",
    supplierLocation: "Dhaka, Bangladesh",
    status: "Active",
  },

  {
    id: "2",
    productCode: "SX-194827",
    productName: "Organic Turmeric Powder",
    productCategory: "Food & Agriculture",
    brandName: "Green Farm",
    productImage:
      "https://images.unsplash.com/photo-1615485500704-8e990f9900f7?w=800",
    qualityTier: "Organic",
    availableQuantity: 5000,
    unitOfMeasure: "KG",
    unitPrice: 4.8,
    currency: "USD",
    minimumOrderQuantity: 250,
    supplierCompany: "Green Farm Ltd.",
    supplierLocation: "Chittagong, Bangladesh",
    status: "Active",
  },

  {
    id: "3",
    productCode: "SX-761304",
    productName: "Industrial LED Bulb",
    productCategory: "Electronics",
    brandName: "BrightTech",
    productImage:
      "https://images.unsplash.com/photo-1507473885765-e6ed057f782c?w=800",
    qualityTier: "Premium",
    availableQuantity: 2500,
    unitOfMeasure: "PCS",
    unitPrice: 8.25,
    currency: "USD",
    minimumOrderQuantity: 100,
    supplierCompany: "BrightTech Electronics",
    supplierLocation: "Dhaka, Bangladesh",
    status: "Active",
  },

  {
    id: "4",
    productCode: "SX-428195",
    productName: "Portland Cement",
    productCategory: "Construction Materials",
    brandName: "BuildPro",
    productImage:
      "https://images.unsplash.com/photo-1517089596392-fb9a9033e05a?w=800",
    qualityTier: "Standard",
    availableQuantity: 10000,
    unitOfMeasure: "KG",
    unitPrice: 0.18,
    currency: "USD",
    minimumOrderQuantity: 1000,
    supplierCompany: "BuildPro Materials",
    supplierLocation: "Sylhet, Bangladesh",
    status: "Active",
  },

  {
    id: "5",
    productCode: "SX-315729",
    productName: "Industrial Water Pump",
    productCategory: "Machinery",
    brandName: "PowerFlow",
    productImage:
      "https://images.unsplash.com/photo-1581092160607-ee22621dd758?w=800",
    qualityTier: "Premium",
    availableQuantity: 150,
    unitOfMeasure: "PCS",
    unitPrice: 285,
    currency: "USD",
    minimumOrderQuantity: 10,
    supplierCompany: "PowerFlow Machinery",
    supplierLocation: "Narayanganj, Bangladesh",
    status: "Active",
  },

  {
    id: "6",
    productCode: "SX-892461",
    productName: "Corrugated Packaging Box",
    productCategory: "Packaging",
    brandName: "PackRight",
    productImage:
      "https://images.unsplash.com/photo-1607166452427-7e4470c7f0f7?w=800",
    qualityTier: "Standard",
    availableQuantity: 20000,
    unitOfMeasure: "PCS",
    unitPrice: 0.45,
    currency: "USD",
    minimumOrderQuantity: 500,
    supplierCompany: "PackRight Industries",
    supplierLocation: "Gazipur, Bangladesh",
    status: "Active",
  },
];

// ============================================================
// QUALITY COLOR
// ============================================================

const qualityColor = {
  Standard: "default",
  Premium: "primary",
  Organic: "success",
};

// ============================================================
// PRODUCT CARD
// ============================================================

const ProductCard = ({ product }) => {
  return (
    <Card
      className="
        group
        overflow-hidden
        border
        border-[#E0E8EF]
        bg-white
        shadow-sm
        transition-all
        duration-300
        hover:-translate-y-1
        hover:shadow-[0_15px_40px_rgba(16,42,76,0.10)]
      "
    >
      {/* =====================================================
          IMAGE
      ===================================================== */}

      <div className="relative h-52 overflow-hidden bg-[#F4F8FB]">
        <Image
          src={product.productImage}
          alt={product.productName}
          width={400}
          height={208}
          className="
            h-full
            w-full
            object-cover
            transition-transform
            duration-500
            group-hover:scale-105
          "
        />

        {/* Overlay */}

        <div className="absolute inset-0 bg-gradient-to-t from-[#102A4C]/30 via-transparent to-transparent" />

        {/* Product Code */}

        <div className="absolute left-3 top-3">
          <Chip
            size="sm"
            variant="solid"
            className="bg-white/95 text-[#102A4C] shadow-sm backdrop-blur"
          >
            {product.productCode}
          </Chip>
        </div>

        {/* Status */}

        <div className="absolute right-3 top-3">
          <Chip
            size="sm"
            className="
              bg-[#E9F9F0]
              font-semibold
              text-[#16834B]
            "
          >
            <span className="mr-1.5 inline-block h-1.5 w-1.5 rounded-full bg-[#20B26B]" />

            {product.status}
          </Chip>
        </div>
      </div>

      {/* =====================================================
          BODY
      ===================================================== */}

      <div className="p-5">
        {/* Category */}

        <div className="mb-2 flex items-center gap-2">
          <FaTag className="text-xs text-[#00AEEF]" />

          <span className="text-xs font-semibold uppercase tracking-wide text-[#718196]">
            {product.productCategory}
          </span>
        </div>

        {/* Product Name */}

        <h2
          className="
          line-clamp-1
          text-lg
          font-bold
          text-[#102A4C]
        "
        >
          {product.productName}
        </h2>

        {/* Brand */}

        <p className="mt-1 text-xs text-[#8795A5]">
          Brand: {product.brandName}
        </p>

        {/* Quality */}

        <div className="mt-4">
          <Chip
            size="sm"
            color={qualityColor[product.qualityTier]}
            variant="flat"
          >
            {product.qualityTier} Quality
          </Chip>
        </div>

        <Separator className="my-4" />

        {/* ==================================================
            PRICE + STOCK
        ================================================== */}

        <div className="grid grid-cols-2 gap-4">
          {/* Price */}

          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-[#8A98A7]">
              Unit Price
            </p>

            <p className="mt-1 text-xl font-bold text-[#102A4C]">
              {product.currency}{" "}
              {product.unitPrice.toLocaleString(undefined, {
                minimumFractionDigits: 2,
              })}
            </p>
          </div>

          {/* Stock */}

          <div>
            <p className="text-[11px] font-medium uppercase tracking-wide text-[#8A98A7]">
              Available
            </p>

            <p className="mt-1 text-xl font-bold text-[#102A4C]">
              {product.availableQuantity.toLocaleString()}
            </p>

            <p className="text-[11px] text-[#8795A5]">
              {product.unitOfMeasure}
            </p>
          </div>
        </div>

        {/* ==================================================
            SUPPLIER
        ================================================== */}

        <div className="mt-5 rounded-xl bg-[#F7FAFC] p-3">
          <div className="flex items-center gap-2">
            <div
              className="
              flex
              h-8
              w-8
              shrink-0
              items-center
              justify-center
              rounded-lg
              bg-white
              text-[#00AEEF]
              shadow-sm
            "
            >
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

        {/* ==================================================
            MOQ
        ================================================== */}

        <div className="mt-3 flex items-center gap-2 text-xs text-[#718196]">
          <FaCubes className="text-[#00AEEF]" />

          <span>MOQ:</span>

          <span className="font-semibold text-[#102A4C]">
            {product.minimumOrderQuantity.toLocaleString()}{" "}
            {product.unitOfMeasure}
          </span>
        </div>

        {/* ==================================================
            ACTIONS
        ================================================== */}

        <div className="mt-5 flex gap-2">
          <Link href={`/admin/all-products/${product.productCode}`}>
            <Button
              size="sm"
              variant="flat"
              className="
              
              flex-1
              bg-[#EAF8FD]
              font-semibold
              text-[#007EA8]
              hover:bg-[#D9F3FC]
            "
            >
              <FaEye />
              View
            </Button>
          </Link>

          <Button
            size="sm"
            variant="flat"
            className="
              flex-1
              bg-[#F3F5F7]
              font-semibold
              text-[#526273]
              hover:bg-[#E9EDF1]
            "
          >
            <FaEdit />
            Edit
          </Button>

          <Button
            size="sm"
            isIconOnly
            variant="flat"
            className="
              bg-[#FFF1EE]
              text-[#E74C27]
              hover:bg-[#FFE5DF]
            "
          >
            <FaTrash />
          </Button>
        </div>
      </div>
    </Card>
  );
};

// ============================================================
// PAGE
// ============================================================

const Page = async () => {
  const data = await getProducts();
  console.log("Fetched products:", data);
  return (
    <main className="min-h-screen bg-[#F8FBFE] px-4 py-8 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        {/* ====================================================
            HEADER
        ==================================================== */}

        <div className="mb-8">
          <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
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
              <Button
                className="
                bg-[#FF4F0A]
                font-semibold
                text-white
                shadow-[0_8px_20px_rgba(255,79,10,0.18)]
              "
              >
                <FaBoxOpen />
                Post New Product
              </Button>
            </Link>
          </div>
        </div>

        {/* ====================================================
            STATS
        ==================================================== */}

        <div className="mb-7 grid grid-cols-2 gap-3 sm:grid-cols-4">
          <Card className="border border-[#E0E8EF] shadow-sm">
            <div className="p-4">
              <p className="text-xs text-[#8795A5]">Total Products</p>

              <p className="mt-1 text-2xl font-bold text-[#102A4C]">
                {products.length}
              </p>
            </div>
          </Card>

          <Card className="border border-[#E0E8EF] shadow-sm">
            <div className="p-4">
              <p className="text-xs text-[#8795A5]">Active</p>

              <p className="mt-1 text-2xl font-bold text-[#16834B]">
                {
                  products.filter((product) => product.status === "Active")
                    .length
                }
              </p>
            </div>
          </Card>

          <Card className="border border-[#E0E8EF] shadow-sm">
            <div className="p-4">
              <p className="text-xs text-[#8795A5]">Premium</p>

              <p className="mt-1 text-2xl font-bold text-[#00AEEF]">
                {
                  products.filter(
                    (product) => product.qualityTier === "Premium",
                  ).length
                }
              </p>
            </div>
          </Card>

          <Card className="border border-[#E0E8EF] shadow-sm">
            <div className="p-4">
              <p className="text-xs text-[#8795A5]">Categories</p>

              <p className="mt-1 text-2xl font-bold text-[#102A4C]">
                {new Set(data.map((product) => product.productCategory)).size}
              </p>
            </div>
          </Card>
        </div>

        {/* ====================================================
            PRODUCTS GRID
        ==================================================== */}

        <div
          className="
          grid
          grid-cols-1
          gap-5
          sm:grid-cols-2
          xl:grid-cols-3
        "
        >
          {data.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </main>
  );
};

export default Page;
