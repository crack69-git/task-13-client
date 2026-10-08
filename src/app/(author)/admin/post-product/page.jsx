"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  Select,
  TextArea,
  TextField,
  InputGroup,
} from "@heroui/react";

import {
  FaArrowRight,
  FaBuilding,
  FaBoxOpen,
  FaTag,
  FaMoneyBillWave,
  FaTruck,
  FaCreditCard,
  FaCircleInfo,
  FaLocationDot,
  FaLink,
  FaImage,
} from "react-icons/fa6";
import { FaCheckCircle } from "react-icons/fa";

const units = (
  <>
    <ListBox.Item id="MT" textValue="Metric Tons">
      Metric Tons
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="KG" textValue="Kilograms">
      Kilograms
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="G" textValue="Grams">
      Grams
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="LBS" textValue="Pounds">
      Pounds
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="PCS" textValue="Pieces">
      Pieces
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="BOX" textValue="Boxes">
      Boxes
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="CTN" textValue="Cartons">
      Cartons
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="SET" textValue="Sets">
      Sets
      <ListBox.ItemIndicator />
    </ListBox.Item>
  </>
);

const SectionHeader = ({ icon, title, description, number }) => {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF8FD] text-[#00AEEF]">
        {icon}
      </div>

      <div className="flex-1">
        <div className="flex items-center gap-2">
          <span className="text-[10px] font-bold tracking-widest text-[#00AEEF]">
            {number}
          </span>

          <h2 className="text-base font-bold text-[#102A4C] sm:text-lg">
            {title}
          </h2>
        </div>

        <p className="mt-1 text-xs leading-5 text-[#7A8998] sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

const page = () => {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      console.log("Product Data:", data);

      // TODO:
      // await postProduct(data);

      alert("Product posted successfully!");

      // router.push("/admin/products");
    } catch (error) {
      console.error(error);
      alert("Something went wrong while posting the product.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <main className="min-h-screen bg-[#F8FBFE] px-3 py-8 text-slate-900 sm:px-6 lg:px-8">
      {/* Background decoration */}
      <div className="pointer-events-none fixed -left-32 top-40 h-72 w-72 rounded-full bg-[#00AEEF]/[0.05] blur-3xl" />
      <div className="pointer-events-none fixed -right-32 bottom-20 h-80 w-80 rounded-full bg-[#FF4F0A]/[0.04] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* =====================================================
            PAGE HEADER
        ===================================================== */}

        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D8E7F1] bg-white px-3 py-1.5 text-xs font-semibold text-[#39719E] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />
            SOURCEX PRODUCT LISTING
          </div>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-[#102A4C] sm:text-3xl">
                <FaBoxOpen className="text-[#00AEEF]" />
                Post Product
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#718196]">
                Add a product to the SourceX marketplace with complete
                commercial, supplier, delivery, and specification details.
              </p>
            </div>

            <div className="rounded-xl border border-[#E1E8EF] bg-white px-4 py-3 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#98A6B5]">
                LISTING STATUS
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />

                <span className="text-xs font-semibold text-[#17283D]">
                  Ready to publish
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =====================================================
            MAIN CARD
        ===================================================== */}

        <Card className="overflow-hidden border border-[#E0E8EF] bg-white shadow-[0_20px_60px_rgba(24,55,85,0.07)]">
          <Card.Header className="p-0">
            <Form className="w-full" onSubmit={onSubmit}>
              {/* =================================================
                  01 — PRODUCT INFORMATION
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="01"
                  icon={<FaTag size={16} />}
                  title="Product Information"
                  description="Provide the core information buyers will use to identify and understand the product."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  <TextField
                    name="productName"
                    isRequired
                    className="w-full lg:col-span-2"
                  >
                    <Label>Product Name</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <FaBoxOpen className="text-[#8B9AAA]" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        placeholder="e.g. Organic Turmeric Powder"
                        className="w-full"
                      />
                    </InputGroup>

                    <FieldError />
                  </TextField>

                  <Select
                    name="productCategory"
                    isRequired
                    className="w-full"
                    placeholder="Select category"
                  >
                    <Label>Product Category</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item
                          id="raw-materials"
                          textValue="Raw Materials"
                        >
                          Raw Materials
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="electronics" textValue="Electronics">
                          Electronics
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="machinery"
                          textValue="Machinery & Equipment"
                        >
                          Machinery & Equipment
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="packaging" textValue="Packaging">
                          Packaging
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="construction"
                          textValue="Construction Materials"
                        >
                          Construction Materials
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="apparel"
                          textValue="Apparel & Textiles"
                        >
                          Apparel & Textiles
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="food" textValue="Food & Agriculture">
                          Food & Agriculture
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="other" textValue="Other">
                          Other
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField name="productCode">
                    <Label>Product / SKU Code</Label>
                    <Input placeholder="e.g. SRC-TUR-001" />
                  </TextField>

                  <TextField name="brandName">
                    <Label>Brand / Manufacturer</Label>
                    <Input placeholder="Brand or manufacturer name" />
                  </TextField>

                  <Select
                    name="unitOfMeasure"
                    isRequired
                    className="w-full"
                    placeholder="Select unit"
                  >
                    <Label>Unit of Measure</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>{units}</ListBox>
                    </Select.Popover>
                  </Select>
                </div>
              </section>

              {/* =================================================
                  02 — QUANTITY & COMMERCIAL
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="02"
                  icon={<FaMoneyBillWave size={16} />}
                  title="Quantity & Commercial Details"
                  description="Set the available quantity and commercial pricing information for buyers."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                  <TextField name="availableQuantity" type="number" isRequired>
                    <Label>Available Quantity</Label>
                    <Input placeholder="e.g. 500" />
                    <FieldError />
                  </TextField>

                  <TextField name="unitPrice" type="number" isRequired>
                    <Label>Unit Price</Label>

                    <InputGroup>
                      <InputGroup.Prefix>$</InputGroup.Prefix>
                      <InputGroup.Input placeholder="0.00" className="w-full" />
                    </InputGroup>

                    <FieldError />
                  </TextField>

                  <Select
                    name="currency"
                    defaultSelectedKey="USD"
                    className="w-full"
                  >
                    <Label>Currency</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="USD" textValue="USD - US Dollar">
                          USD — US Dollar
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="BDT"
                          textValue="BDT - Bangladeshi Taka"
                        >
                          BDT — Bangladeshi Taka
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="EUR" textValue="EUR - Euro">
                          EUR — Euro
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="GBP" textValue="GBP - British Pound">
                          GBP — British Pound
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField name="minimumOrderQuantity">
                    <Label>Minimum Order</Label>
                    <Input placeholder="e.g. 50" />
                  </TextField>
                </div>
              </section>

              {/* =================================================
                  03 — QUALITY
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="03"
                  icon={<FaCheckCircle size={16} />}
                  title="Quality & Certification"
                  description="Define the quality level and certification information associated with the product."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <Select
                    name="qualityTier"
                    isRequired
                    className="w-full"
                    placeholder="Select quality"
                  >
                    <Label>Quality Tier</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="standard" textValue="Standard">
                          Standard
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="premium" textValue="Premium">
                          Premium
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="organic" textValue="Organic">
                          Organic
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <TextField name="certification">
                    <Label>Certification</Label>
                    <Input placeholder="e.g. ISO, HACCP, Organic, FDA" />
                  </TextField>

                  <TextField name="countryOfOrigin">
                    <Label>Country of Origin</Label>
                    <Input placeholder="e.g. Bangladesh" />
                  </TextField>

                  <TextField name="shelfLife">
                    <Label>Shelf Life</Label>
                    <Input placeholder="e.g. 24 months" />
                  </TextField>
                </div>
              </section>

              {/* =================================================
                  04 — SUPPLIER INFORMATION
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="04"
                  icon={<FaBuilding size={16} />}
                  title="Supplier Information"
                  description="Add the supplier or manufacturer information associated with this product."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <TextField name="supplierCompany" isRequired>
                    <Label>Supplier / Company Name</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <FaBuilding className="text-[#8B9AAA]" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        placeholder="e.g. ABC Trading Ltd."
                        className="w-full"
                      />
                    </InputGroup>

                    <FieldError />
                  </TextField>

                  <TextField name="supplierName">
                    <Label>Contact Person</Label>
                    <Input placeholder="Supplier contact person" />
                  </TextField>

                  <TextField name="supplierEmail" type="email">
                    <Label>Supplier Email</Label>
                    <Input placeholder="supplier@company.com" />
                  </TextField>

                  <TextField name="supplierPhone" type="tel">
                    <Label>Supplier Phone</Label>
                    <Input placeholder="+880 1XXXXXXXXX" />
                  </TextField>

                  <TextField name="supplierLocation">
                    <Label>Supplier Location</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <FaLocationDot className="text-[#00AEEF]" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        placeholder="e.g. Chittagong, Bangladesh"
                        className="w-full"
                      />
                    </InputGroup>
                  </TextField>

                  <Select
                    name="supplierPreference"
                    placeholder="Select preference"
                  >
                    <Label>Supplier Type</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item
                          id="verified"
                          textValue="Verified Supplier"
                        >
                          Verified Supplier
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="manufacturer"
                          textValue="Direct Manufacturer"
                        >
                          Direct Manufacturer
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="distributor"
                          textValue="Authorized Distributor"
                        >
                          Authorized Distributor
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="any" textValue="No Preference">
                          No Preference
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>
              </section>

              {/* =================================================
                  05 — DELIVERY & PAYMENT
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="05"
                  icon={<FaTruck size={16} />}
                  title="Delivery & Payment"
                  description="Specify shipping location, delivery expectations, and preferred payment terms."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <TextField
                    name="deliveryAddress"
                    className="w-full md:col-span-2"
                  >
                    <Label>Delivery Address</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <FaLocationDot className="text-[#00AEEF]" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        placeholder="Full delivery address"
                        className="w-full"
                      />
                    </InputGroup>
                  </TextField>

                  <TextField name="deliveryCountry">
                    <Label>Delivery Country</Label>
                    <Input placeholder="Bangladesh" />
                  </TextField>

                  <TextField name="targetDate">
                    <Label>Expected Delivery Date</Label>
                    <Input type="date" />
                  </TextField>

                  <Select
                    name="deliveryTerms"
                    placeholder="Select delivery terms"
                  >
                    <Label>Delivery Terms</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="door" textValue="Door Delivery">
                          Door Delivery
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item
                          id="warehouse"
                          textValue="Warehouse Delivery"
                        >
                          Warehouse Delivery
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="port" textValue="Port Delivery">
                          Port Delivery
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="pickup" textValue="Supplier Pickup">
                          Supplier Pickup
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>

                  <Select
                    name="paymentTerms"
                    placeholder="Select payment terms"
                  >
                    <Label>Payment Terms</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="advance" textValue="Advance Payment">
                          Advance Payment
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="cod" textValue="Cash on Delivery">
                          Cash on Delivery
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="net30" textValue="Net 30">
                          Net 30
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="net60" textValue="Net 60">
                          Net 60
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="negotiable" textValue="Negotiable">
                          Negotiable
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>
              </section>

              {/* =================================================
                  06 — PRODUCT DESCRIPTION
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="06"
                  icon={<FaCircleInfo size={16} />}
                  title="Description & Specifications"
                  description="Give buyers enough technical and commercial information to understand the product."
                />

                <div className="space-y-5">
                  <TextField name="description">
                    <Label>Product Description</Label>

                    <TextArea
                      rows={6}
                      placeholder="Describe the product, application, materials, features, packaging, intended use, etc."
                      style={{
                        resize: "vertical",
                      }}
                    />

                    <Description>
                      Provide a clear description that helps buyers understand
                      exactly what is being offered.
                    </Description>
                  </TextField>

                  <TextField name="specifications">
                    <Label>Technical Specifications</Label>

                    <TextArea
                      rows={6}
                      placeholder="Dimensions, materials, technical standards, certifications, packaging requirements, etc."
                      style={{
                        resize: "vertical",
                      }}
                    />
                  </TextField>

                  <TextField name="additionalNotes">
                    <Label>Additional Notes</Label>

                    <TextArea
                      rows={4}
                      placeholder="Anything else buyers should know?"
                      style={{
                        resize: "vertical",
                      }}
                    />
                  </TextField>
                </div>
              </section>

              {/* =================================================
                  07 — MEDIA & REFERENCES
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  number="07"
                  icon={<FaImage size={16} />}
                  title="Product Media & References"
                  description="Add product images, brochures, technical documents, or other useful references."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  <TextField name="productImage">
                    <Label>Product Image URL</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <FaImage className="text-[#8B9AAA]" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        placeholder="https://example.com/product-image.jpg"
                        className="w-full"
                      />
                    </InputGroup>
                  </TextField>

                  <TextField name="attachmentLink">
                    <Label>Product Sheet / Attachment</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <FaLink className="text-[#8B9AAA]" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        placeholder="Google Drive, Dropbox, product sheet..."
                        className="w-full"
                      />
                    </InputGroup>
                  </TextField>
                </div>
              </section>

              {/* =================================================
                  PUBLISH
              ================================================= */}

              <section className="flex flex-col gap-5 bg-[#FAFCFE] p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:p-8">
                <div>
                  <p className="text-sm font-semibold text-[#17283D]">
                    Ready to publish this product?
                  </p>

                  <p className="mt-1 max-w-xl text-xs leading-5 text-[#7A8998]">
                    Make sure the product information, supplier details,
                    pricing, delivery terms, and specifications are correct
                    before publishing.
                  </p>
                </div>

                <Button
                  type="submit"
                  isDisabled={isSubmitting}
                  className="w-full rounded-xl bg-[#FF4F0A] px-7 py-3 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(255,79,10,0.18)] transition hover:bg-[#E84605] sm:w-auto"
                >
                  {isSubmitting ? "Publishing..." : "Publish Product"}

                  {!isSubmitting && <FaArrowRight className="ml-1" />}
                </Button>
              </section>
            </Form>
          </Card.Header>
        </Card>

        {/* Footer */}
        <div className="mt-5 flex items-center justify-center gap-2 text-center text-[11px] text-[#8A98A7]">
          <FaCircleInfo size={11} />
          You can update product information after publishing.
        </div>
      </div>
    </main>
  );
};

export default page;
