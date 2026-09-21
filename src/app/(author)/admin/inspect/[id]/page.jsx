import MultipleSelect from "@/Components/AdminSection/MultipleSelect";
import SupplierModal from "@/Components/AdminSection/SupplierModal";
import { getPostById, getSupplierById } from "@/lib/actions/getData";
import { Switch } from "@heroui/react";
import Link from "next/link";

import { FaPaperclip } from "react-icons/fa6";
import {
  FiChevronRight,
  FiFileText,
  FiPhone,
  FiRefreshCw,
  FiShield,
  FiUser,
} from "react-icons/fi";
import { MdVerified } from "react-icons/md";

export const metadata = {
  title: "SourceX-Admin-Inspect",
  description: "Admin inspect page for SourceX",
};

const Detail = ({ label, children, className = "" }) => (
  <div className={`rounded-md bg-slate-100/90 px-3 py-2.5 ${className}`}>
    <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
      {label}
    </p>
    <div className="mt-1 text-[13px] font-semibold leading-tight text-slate-900">
      {children}
    </div>
  </div>
);

const page = async ({ params }) => {
  const { id } = await params;
  const data = await getPostById(id);
  const supplier = await getSupplierById(id);
  console.log(data);
  console.log("supplier:", supplier);
  return (
    <main className="min-h-screen min-w-0 overflow-x-hidden bg-[#f5f7f9] px-3 py-4 text-slate-900 sm:px-6 sm:py-5 lg:px-8">
      <div className="mx-auto max-w-295">
        <header className="flex flex-col gap-4 border-b border-slate-200 pb-4 sm:flex-row sm:items-start sm:justify-between">
          <div>
            <div className="flex flex-wrap items-center gap-2">
              <h1 className="text-[20px] font-semibold tracking-[-0.03em] sm:text-[22px]">
                {data._id.slice(0, 8)}... — Organic Turmeric Powder
              </h1>
              <span className="rounded-full bg-slate-200 px-2 py-0.5 text-[10px] font-semibold text-slate-600">
                Grade - {data.qualityTier || "N/A"}
              </span>
            </div>
          </div>
        </header>

        <section className="mt-4 rounded-lg border border-slate-200 bg-white p-3 shadow-sm">
          <div className="flex flex-col gap-3 lg:flex-row lg:items-center">
            <div className="flex shrink-0 items-center gap-2 text-[11px] font-medium text-slate-700 lg:w-43.75">
              <FiRefreshCw className="text-indigo-500" />
              <span className="flex flex-col text-[16px]">
                <span className="block text-[12px] uppercase tracking-[0.12em] text-slate-500">
                  Lifecycle Status
                </span>
                Select Current Stage
              </span>
            </div>

            <MultipleSelect
              delivaryStatus={data.delivaryStatus}
              id={data._id}
            />
          </div>
        </section>

        <div className="mt-3 grid gap-3 lg:grid-cols-2">
          <section className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="flex items-center gap-2 text-[13px] font-semibold">
                <FiUser className="text-slate-500 text-[16px]" /> Buyer
                Requirement Summary
              </h2>
              <span className="rounded bg-slate-100 px-2 py-1 text-[9px] font-medium text-slate-600">
                Read-Only
              </span>
            </div>
            <div className="mt-3 rounded-md bg-slate-100/90 p-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[12px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Buyer
                  </p>
                  <p className="mt-1 text-[16px] font-semibold">
                    {data.buyerName || "Buyer Name"}
                  </p>
                </div>
                <FiShield className="text-slate-500" />
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Detail label="Quantity">
                {data.targetQuantity} {data.unitOfMeasure}{" "}
              </Detail>
              <Detail label="Target Budget">${data.price} USD </Detail>
              <Detail label="Delivery By">
                {data.targetDate}{" "}
                <span className="block text-[10px] font-normal text-red-500">
                  Strict Target Window
                </span>
              </Detail>
              <Detail label="Quality Grade">{data.qualityTier}</Detail>
            </div>
            <div className="mt-2 rounded-md bg-slate-100/90 px-3 py-2.5">
              <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                Buyer Notes
              </p>
              <p className="mt-1 text-[10px] leading-[1.45] text-slate-600">
                {data.specifications}
              </p>
            </div>
            {data.attachmentLink && data.attachmentLink.length > 0 && (
              <div className="mt-2 rounded-md bg-slate-100/90 px-3 py-2.5">
                <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                  Attachments
                </p>
                <Link
                  href={data.attachmentLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-1 flex items-center gap-1 text-[12px] font-semibold text-indigo-600 hover:underline"
                >
                  Attachment Link
                  <FaPaperclip />
                </Link>
              </div>
            )}
          </section>

          <section className="rounded-lg border border-slate-200 bg-white p-3 shadow-sm sm:p-4">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <h2 className="flex items-center gap-2 text-[13px] font-semibold">
                <MdVerified className="text-indigo-500" /> Supplier &amp; Admin
                Execution
              </h2>
              <span className="rounded bg-red-50 px-2 py-1 text-[9px] font-medium text-red-600">
                Internal Only
              </span>
            </div>
            <div className="mt-3 rounded-md bg-slate-100/90 p-3">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-[9px] font-semibold uppercase tracking-[0.12em] text-slate-500">
                    Assigned Supplier
                  </p>
                  <p className="mt-1 text-[12px] font-semibold">
                    {supplier.supplierCompany || "No Supplier Assigned"}
                  </p>
                  <p className="mt-1 flex flex-wrap gap-x-3 gap-y-1 text-[10px] text-slate-600">
                    <span>
                      <FiUser className="mr-1 inline" />
                      {supplier.supplierName || "N/A"}
                    </span>
                    <span>
                      <FiPhone className="mr-1 inline" />
                      {supplier.supplierContact || "N/A"}
                    </span>
                  </p>
                </div>
              </div>
            </div>
            <div className="mt-2 grid grid-cols-1 gap-2 sm:grid-cols-2">
              <Detail label="Quoted Supplier Price">
                ${supplier.supplierPrice || "N/A"}{" "}
                <span className="font-normal text-slate-600"></span>
              </Detail>
              <Detail label="Platform Gross Margin">
                <span className="text-indigo-600">
                  ${data.price - supplier.supplierPrice || "N/A"}
                </span>{" "}
                <span className="font-normal text-slate-600">USD</span>
              </Detail>
            </div>

            <div className="mt-2 flex items-center justify-between rounded-md bg-slate-100/90 px-3 py-2">
              <div>
                <p className="text-[12px] font-semibold">Notify Buyer</p>
                <p className="text-[10px] text-slate-600">
                  Send automatic email notification with updated status and
                  schedule.
                </p>
              </div>
              <Switch>
                <Switch.Content>
                  <Switch.Control>
                    <Switch.Thumb />
                  </Switch.Control>
                </Switch.Content>
              </Switch>
            </div>
            <SupplierModal id={id} />
          </section>
        </div>

        <div className="mt-3 flex items-center justify-end gap-1 text-[10px] text-slate-400">
          <FiFileText /> Last updated just now <FiChevronRight />
        </div>
      </div>
    </main>
  );
};

export default page;
