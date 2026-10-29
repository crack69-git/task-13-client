import Link from "next/link";
import { Button, Card, Chip, Separator } from "@heroui/react";
import {
  FiGrid,
  FiPackage,
  FiShoppingCart,
  FiClipboard,
  FiTruck,
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
import OrderStatusUpdate from "@/Components/AdminSection/OrderStatusUpdate";
import { getSingleOrder } from "@/lib/actions/getData";
import { resolve } from "styled-jsx/css";

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

export default async function ProductDetailsPage({ params }) {
  const total = product.quantity * product.unitPrice;
  const { id } = await params;

  const res = await getSingleOrder(id);
  console.log("Fetched order details:", res);
  return (
    <div className="min-h-screen bg-slate-50 text-slate-800">
      {/* Top navigation */}

      <div className="mx-auto flex max-w-[1600px]">
        {/* Sidebar */}

        {/* Main content */}
        <main className="min-w-0 flex-1 p-4 sm:p-7 lg:p-9">
          {/* Page heading */}
          <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <h1 className="text-2xl font-extrabold tracking-tight text-slate-950 sm:text-3xl">
                Product Details
              </h1>
              <p className="mt-2 text-sm text-slate-500">
                Review product information, supplier details and order status.
              </p>
            </div>
          </div>

          {/* Product hero */}
          <Card shadow="sm" className="mb-6 border border-slate-200 bg-white">
            <div className="p-5 sm:p-7">
              <div className="grid gap-7 md:grid-cols-[260px_minmax(0,1fr)] xl:grid-cols-[320px_minmax(0,1fr)]">
                <div className="flex min-h-[250px] items-center justify-center overflow-hidden rounded-xl bg-slate-100 p-4">
                  <Image
                    src={res.productImage}
                    alt={res.productName}
                    width={600}
                    height={600}
                    className=" max-w-full object-contain"
                  />
                </div>

                <div className="flex min-w-0 flex-col">
                  <div className="flex flex-wrap items-center gap-2">
                    <Chip size="sm" color="primary" variant="flat">
                      {res.productCategory.toUpperCase()}
                    </Chip>

                    <Chip size="sm" variant="bordered">
                      {res.ProductQuality.toUpperCase()} quality
                    </Chip>
                  </div>

                  <h2 className="mt-4 text-2xl font-extrabold text-slate-950 sm:text-3xl">
                    {res.productName}
                  </h2>
                  <p className="mt-2 text-sm text-slate-500">
                    Brand:{" "}
                    <span className="font-semibold text-slate-800">
                      {res.brandName}
                    </span>
                    <span className="mx-2">·</span>
                    SKU:{" "}
                    <span className="font-semibold text-slate-800">
                      {res.productCode}
                    </span>
                  </p>

                  <p className="mt-4 max-w-3xl text-sm leading-7 text-slate-600">
                    {res.description}
                  </p>

                  <Separator className="my-5" />

                  <div className="grid grid-cols-2 gap-5 sm:grid-cols-3">
                    <div>
                      <p className="text-xs text-slate-500">Unit price</p>
                      <p className="mt-1 text-2xl font-extrabold text-blue-700">
                        ৳{res.unitPrice.toLocaleString("en-BD")}
                      </p>
                      <p className="text-xs text-slate-400">
                        Per {res.unitOfMeasure}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Available stock</p>
                      <p className="mt-1 text-2xl font-extrabold text-slate-900">
                        {res.availableQuantity.toLocaleString()}
                      </p>
                      <p className="text-xs text-slate-400">
                        {res.unitOfMeasure}
                      </p>
                    </div>
                    <div>
                      <p className="text-xs text-slate-500">Minimum order</p>
                      <p className="mt-1 text-2xl font-extrabold text-slate-900">
                        {res.minimumOrderQuantity}
                      </p>
                      <p className="text-xs text-slate-400">
                        {res.unitOfMeasure}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Card>
          <Card className="mb-5">
            <OrderStatusUpdate order={res}></OrderStatusUpdate>
          </Card>

          {/* Details grid */}
          <div className="grid items-start gap-6 xl:grid-cols-3">
            <div className="space-y-6 xl:col-span-2">
              <Section title="Product specifications" icon={FiFileText}>
                <div className="grid grid-cols-2 gap-x-6 gap-y-6 sm:grid-cols-3">
                  <Detail
                    label="Product category"
                    value={res.productCategory}
                  />
                  <Detail label="Brand" value={res.brandName} />
                  <Detail label="Product code" value={res.productCode} />
                  <Detail label="Unit of measure" value={res.unitOfMeasure} />
                  <Detail label="Product quality" value={res.ProductQuality} />
                  <Detail label="Certification" value={res.certification} />
                  <Detail
                    label="Country of origin"
                    value={res.supplierLocation}
                  />
                  <Detail label="Shelf life" value={res.shelfLife} />
                  <Detail label="Specifications" value={res.specifications} />
                </div>
                <Separator />
                <Detail label="Additional notes" value={res.additionalNotes} />
                <div className="bg-blue-500  underline underline-offset-2  text-white w-fit rounded-lg mt-3">
                  <Button
                    as="a"
                    href={res.attachmentLink}
                    target="_blank"
                    rel="noreferrer"
                    variant="bordered"
                    className="w-fit "
                    startContent={<FiFileText />}
                    endContent={<FiExternalLink />}
                  >
                    View product attachment
                  </Button>
                </div>
              </Section>

              <Section title="Supplier information" icon={FiPackage}>
                <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {res.supplierCompany}
                    </h3>
                    <p className="mt-1 text-sm text-slate-500">
                      Supplier: {res.supplierName}
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
                        href={`mailto:${res.supplierEmail}`}
                        className="inline-flex items-center gap-2 text-blue-700 hover:underline"
                      >
                        <FiMail />
                        {res.supplierEmail}
                      </a>
                    }
                  />
                  <Detail
                    label="Phone number"
                    value={
                      <a
                        href={`tel:${res.supplierPhone}`}
                        className="inline-flex items-center gap-2 text-blue-700 hover:underline"
                      >
                        <FiPhone />
                        {res.supplierPhone}
                      </a>
                    }
                  />
                  <Detail
                    label="Supplier location"
                    value={
                      <span className="inline-flex items-center gap-2">
                        <FiMapPin />
                        {res.supplierLocation}
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
                    value={res.deliveryAddress}
                  />
                  <Detail
                    label="Destination country"
                    value={res.deliveryCountry}
                  />
                  <Detail
                    label="Estimated delivery"
                    value={res.estimateDelivery}
                  />
                  <Detail label="Delivery terms" value={res.deliveryTerms} />
                  <Detail label="Payment terms" value={res.paymentTerms} />
                  <Detail label="Target date" value={res.targetDate} />
                </div>
              </Section>
            </div>

            {/* Order summary */}
            <div className="space-y-6">
              <Section title="Order summary" icon={FiShoppingCart}>
                <Separator />

                <div className="space-y-4">
                  <Detail label="Buyer" value={res.buyerName} />
                  <Detail label="Buyer email" value={res.buyerEmail} />
                  <Detail label="Buyer phone" value={res.buyerPhone} />
                  <Detail
                    label="Order quantity"
                    value={`${res.quantity} ${res.unitOfMeasure}`}
                  />
                </div>

                <Separator />

                <div className="space-y-3 text-sm">
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Unit price</span>
                    <span className="font-semibold">
                      ৳{res.unitPrice.toLocaleString("en-BD")}
                    </span>
                  </div>
                  <div className="flex justify-between gap-3">
                    <span className="text-slate-500">Quantity</span>
                    <span className="font-semibold">{res.quantity}</span>
                  </div>
                  <Separator />
                  <div className="flex items-center justify-between gap-3">
                    <span className="font-bold text-slate-900">
                      Total price
                    </span>
                    <span className="text-2xl font-extrabold text-blue-700">
                      ${res.totalPrice}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400">
                    Excludes any additional charges not included in the order
                    data.
                  </p>
                </div>

                <Separator />
              </Section>

              <Section title="Record information" icon={FiClipboard}>
                <Detail
                  label="Created at"
                  value={res.createdAt.toLocaleString("en-BD")}
                />
                <Detail label="Product code" value={res.productCode} />
                <div className="flex items-start gap-2 text-xs leading-5 text-slate-500">
                  <FiCreditCard className="mt-0.5 shrink-0" />
                  Payment terms: {res.paymentTerms}
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
