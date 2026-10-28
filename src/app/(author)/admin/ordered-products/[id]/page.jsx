"use client";

import { useState } from "react";
import Link from "next/link";
import { Button, Card, Chip, Separator } from "@heroui/react";
import {
  FiGrid,
  FiPackage,
  FiShoppingCart,
  FiClipboard,
  FiTruck,
  FiSettings,
  FiSearch,
  FiBell,
  FiChevronRight,
  FiArrowLeft,
  FiEdit2,
  FiDownload,
  FiMapPin,
  FiPhone,
  FiMail,
  FiCheckCircle,
  FiClock,
  FiBox,
  FiCreditCard,
  FiFileText,
  FiExternalLink,
} from "react-icons/fi";
import Image from "next/image";

const product = {
  id: "6ac74a2acbdba4e62d01c485e",
  name: "Premium Cotton Pants",
  category: "Apparel",
  brand: "SourceX",
  code: "SX-902596",
  unit: "PCS",
  available: 1000,
  quantity: 152,
  unitPrice: 200,
  currency: "BDT",
  minimumOrder: 100,
  quality: "Standard",
  certification: "ISO 9001",
  origin: "Bangladesh",
  shelfLife: "24 months",
  supplierCompany: "ABC Textiles Ltd.",
  supplierName: "John Doe",
  supplierEmail: "supplier@example.com",
  supplierPhone: "+8801700000000",
  supplierLocation: "Dhaka, Bangladesh",
  supplierPreference: "Verified",
  deliveryAddress: "Chittagong, Bangladesh",
  deliveryCountry: "BD",
  estimatedDelivery: "3–5 Business Days",
  deliveryTerms: "FOB",
  paymentTerms: "Credit",
  description:
    "Premium quality cotton pants suitable for wholesale buyers and retailers. Made from high-quality cotton with comfortable finishing.",
  specifications: "Quality cotton fabric",
  additionalNotes: "Custom branding and packaging are available upon request.",
  image:
    "https://i.ibb.co/Gvrz0C4/l-b4c90b06-d1cb-4d7d-99d3-b671ce74b4ed-1800x1800.jpg",
  attachment: "https://example.com/product-sheet.pdf",
  buyerName: "Eronmus",
  buyerEmail: "ermcontact@gmail.com",
  buyerPhone: "123456789",
  targetDate: "2026-10-31",
  status: "PROCESSING",
  createdAt: "2026-10-08T07:46:02.656Z",
};

const navigation = [
  { label: "Dashboard", icon: FiGrid, href: "/admin/dashboard" },
  { label: "Post Products", icon: FiPackage, href: "/admin/products/new" },
  { label: "All Products", icon: FiBox, href: "/admin/products" },
  { label: "Requested", icon: FiClipboard, href: "/admin/requested" },
  {
    label: "Ordered Products",
    icon: FiShoppingCart,
    href: "/admin/orders",
  },
];

function Section({ title, icon: Icon, children }) {
  return (
    <Card shadow="sm" className="border border-slate-200 bg-white">
      <div className="gap-5 p-5 sm:p-6">
        <div className="flex items-center gap-2">
          <Icon className="text-xl text-blue-700" />
          <h2 className="text-base font-bold text-slate-900">{title}</h2>
        </div>
        <Separator />
        {children}
      </div>
    </Card>
  );
}

function Detail({ label, value }) {
  return (
    <div className="min-w-0 space-y-1.5">
      <p className="text-xs font-medium text-slate-500">{label}</p>
      <div className="break-words text-sm font-semibold text-slate-800">
        {value}
      </div>
    </div>
  );
}

export default function ProductDetailsPage() {
  const [status, setStatus] = useState(product.status);
  const [editing, setEditing] = useState(false);

  const total = product.quantity * product.unitPrice;

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top navigation */}

      <div className="mx-auto flex max-w-[1600px]">
        {/* Sidebar */}

        {/* Main content */}
        <main className="min-w-0 flex-1 p-4 sm:p-7 lg:p-9">
          {/* Breadcrumb */}
          <div className="mb-6 flex flex-wrap items-center gap-2 text-sm text-slate-500">
            <Link href="/admin/dashboard" className="hover:text-blue-700">
              Dashboard
            </Link>
            <FiChevronRight />
            <Link href="/admin/products" className="hover:text-blue-700">
              All Products
            </Link>
            <FiChevronRight />
            <span className="font-semibold text-slate-800">Details</span>
          </div>

          {/* Page heading */}
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <Button
                as={Link}
                href="/admin/products"
                variant="light"
                size="sm"
                startContent={<FiArrowLeft />}
                className="mb-3 -ml-2 text-slate-600"
              >
                Back to products
              </Button>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                Product Details
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Review product information, supplier details and order status.
              </p>
            </div>

            <div className="flex flex-wrap gap-2">
              <Button
                variant="bordered"
                startContent={<FiDownload />}
                onPress={() => window.print()}
              >
                Print details
              </Button>
              <Button
                color="primary"
                startContent={<FiEdit2 />}
                onPress={() => setEditing(!editing)}
              >
                {editing ? "Finish editing" : "Edit product"}
              </Button>
            </div>
          </div>

          {/* Product hero */}
          <Card shadow="sm" className="mb-6 border border-slate-200 bg-white">
            <div className="p-5 sm:p-7">
              <div className="grid gap-7 md:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
                <div className="flex min-h-[250px] items-center justify-center overflow-hidden rounded-xl bg-slate-100 p-4">
                  {/* <Image
                    src={product.image}
                    alt={product.name}
                    width={100}
                    height={100}
                    className="max-h-[280px] max-w-full object-contain"
                    fallbackSrc="https://placehold.co/600x600/f1f5f9/64748b?text=Product+Image"
                  /> */}
                </div>

                <div className="flex min-w-0 flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip size="sm" color="primary" variant="flat">
                      {product.category}
                    </Chip>
                    <Chip
                      size="sm"
                      color="success"
                      variant="flat"
                      startContent={<FiCheckCircle />}
                    >
                      {product.supplierPreference}
                    </Chip>
                    <Chip size="sm" variant="bordered">
                      {product.quality} quality
                    </Chip>
                  </div>

                  <h2 className="mt-4 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                    {product.name}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Brand:{" "}
                    <span className="font-semibold text-slate-800">
                      {product.brand}
                    </span>
                    <span className="mx-2">·</span>
                    SKU:{" "}
                    <span className="font-semibold text-slate-800">
                      {product.code}
                    </span>
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                    {product.description}
                  </p>

                  <Separator className="my-5" />

                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-slate-500">Unit price</p>
                      <p className="mt-1 text-2xl font-extrabold text-blue-700">
                        ৳{product.unitPrice.toLocaleString("en-BD")}
                      </p>
                      <p className="text-xs text-slate-400">
                        Per {product.unit}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Available stock</p>
                      <p className="mt-1 text-2xl font-extrabold text-slate-900">
                        {product.available.toLocaleString()}
                      </p>
                      <p className="text-xs text-slate-400">{product.unit}</p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Minimum order</p>
                      <p className="mt-1 text-2xl font-extrabold text-slate-900">
                        {product.minimumOrder}
                      </p>
                      <p className="text-xs text-slate-400">{product.unit}</p>
                    </div>
                  </div>

                  {editing && (
                    <div className="mt-5 rounded-lg border border-blue-200 bg-blue-50 p-3 text-sm text-blue-800">
                      Editing mode selected. Connect this form to your product
                      update API to save changes.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </Card>

          {/* Details grid */}
          <div className="grid items-start gap-6 xl:grid-cols-3">
            <div className="space-y-6 xl:col-span-2">
              <Section title="Product specifications" icon={FiFileText}>
                <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                  <Detail label="Product category" value={product.category} />
                  <Detail label="Brand" value={product.brand} />
                  <Detail label="Product code" value={product.code} />
                  <Detail label="Unit of measure" value={product.unit} />
                  <Detail label="Product quality" value={product.quality} />
                  <Detail label="Certification" value={product.certification} />
                  <Detail label="Country of origin" value={product.origin} />
                  <Detail label="Shelf life" value={product.shelfLife} />
                  <Detail
                    label="Specifications"
                    value={product.specifications}
                  />
                </div>
                <Separator />
                <Detail
                  label="Additional notes"
                  value={product.additionalNotes}
                />
                <Button
                  as="a"
                  href={product.attachment}
                  target="_blank"
                  rel="noreferrer"
                  variant="bordered"
                  className="w-fit"
                  startContent={<FiFileText />}
                  endContent={<FiExternalLink />}
                >
                  View product attachment
                </Button>
              </Section>

              <Section title="Supplier information" icon={FiPackage}>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {product.supplierCompany}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Contact person: {product.supplierName}
                    </p>
                  </div>
                  <Chip
                    color="success"
                    variant="flat"
                    startContent={<FiCheckCircle />}
                  >
                    Verified supplier
                  </Chip>
                </div>

                <Separator />

                <div className="grid gap-5 sm:grid-cols-2">
                  <Detail
                    label="Email address"
                    value={
                      <a
                        href={`mailto:${product.supplierEmail}`}
                        className="inline-flex items-center gap-2 text-blue-700 hover:underline"
                      >
                        <FiMail />
                        {product.supplierEmail}
                      </a>
                    }
                  />
                  <Detail
                    label="Phone number"
                    value={
                      <a
                        href={`tel:${product.supplierPhone}`}
                        className="inline-flex items-center gap-2 text-blue-700 hover:underline"
                      >
                        <FiPhone />
                        {product.supplierPhone}
                      </a>
                    }
                  />
                  <Detail
                    label="Supplier location"
                    value={
                      <span className="inline-flex items-center gap-2">
                        <FiMapPin />
                        {product.supplierLocation}
                      </span>
                    }
                  />
                  <Detail
                    label="Supplier status"
                    value={product.supplierPreference}
                  />
                </div>
              </Section>

              <Section title="Delivery & payment" icon={FiTruck}>
                <div className="grid grid-cols-2 gap-6 sm:grid-cols-3">
                  <Detail
                    label="Delivery address"
                    value={product.deliveryAddress}
                  />
                  <Detail
                    label="Destination country"
                    value={product.deliveryCountry}
                  />
                  <Detail
                    label="Estimated delivery"
                    value={product.estimatedDelivery}
                  />
                  <Detail
                    label="Delivery terms"
                    value={product.deliveryTerms}
                  />
                  <Detail label="Payment terms" value={product.paymentTerms} />
                  <Detail label="Target date" value={product.targetDate} />
                </div>
              </Section>
            </div>

            {/* Order summary */}
            <div className="space-y-6">
              <Section title="Order summary" icon={FiShoppingCart}>
                <div className="flex items-center justify-between gap-3">
                  <span className="text-sm text-slate-500">Order status</span>
                  <Chip
                    color={
                      status === "COMPLETED"
                        ? "success"
                        : status === "CANCELLED"
                          ? "danger"
                          : "warning"
                    }
                    variant="flat"
                    startContent={
                      status === "COMPLETED" ? <FiCheckCircle /> : <FiClock />
                    }
                  >
                    {status}
                  </Chip>
                </div>

                <Separator />

                <div className="space-y-4">
                  <Detail label="Buyer" value={product.buyerName} />
                  <Detail label="Buyer email" value={product.buyerEmail} />
                  <Detail label="Buyer phone" value={product.buyerPhone} />
                  <Detail
                    label="Order quantity"
                    value={`${product.quantity} ${product.unit}`}
                  />
                </div>

                <Separator />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Unit price</span>
                    <span className="font-semibold">
                      ৳{product.unitPrice.toLocaleString("en-BD")}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Quantity</span>
                    <span className="font-semibold">{product.quantity}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold text-slate-900">
                      Total price
                    </span>
                    <span className="text-2xl font-extrabold text-blue-700">
                      ৳{total.toLocaleString("en-BD")}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Excludes any additional charges not included in the order
                    data.
                  </p>
                </div>

                <Separator />

                <label
                  htmlFor="order-status"
                  className="text-sm font-semibold text-slate-700"
                >
                  Update order status
                </label>
                <select
                  id="order-status"
                  value={status}
                  onChange={(event) => setStatus(event.target.value)}
                  className="w-full rounded-xl border border-slate-200 bg-white px-3 py-3 text-sm outline-none focus:border-blue-500 focus:ring-2 focus:ring-blue-100"
                >
                  <option value="PROCESSING">Processing</option>
                  <option value="CONFIRMED">Confirmed</option>
                  <option value="SHIPPED">Shipped</option>
                  <option value="COMPLETED">Completed</option>
                  <option value="CANCELLED">Cancelled</option>
                </select>

                <Button
                  color="primary"
                  className="w-full font-semibold"
                  startContent={<FiCheckCircle />}
                  onPress={() => {
                    alert(
                      `Selected status: ${status}. Connect this action to your order update API to persist the change.`,
                    );
                  }}
                >
                  Save order status
                </Button>
              </Section>

              <Section title="Record information" icon={FiClipboard}>
                <Detail label="Record ID" value={product.id} />
                <Detail
                  label="Created at"
                  value={new Date(product.createdAt).toLocaleString("en-GB", {
                    dateStyle: "medium",
                    timeStyle: "short",
                  })}
                />
                <Detail label="Product code" value={product.code} />
                <div className="flex items-start gap-2 text-xs leading-5 text-slate-500">
                  <FiCreditCard className="mt-0.5 shrink-0" />
                  Payment terms: {product.paymentTerms}
                </div>
              </Section>
            </div>
          </div>

          <footer className="mt-8 border-t border-slate-200 py-5 text-center text-xs text-slate-400">
            © 2026 SourceX B2B Sourcing Platform. All rights reserved.
          </footer>
        </main>
      </div>
    </div>
  );
}
