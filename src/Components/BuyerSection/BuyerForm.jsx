"use client";

import { useState } from "react";
import { postRequirements } from "@/lib/actions/postData";
import { authClient } from "@/lib/auth-client";
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
  TextField,
  Select,
  InputGroup,
  Radio,
  RadioGroup,
  Calendar,
  DateField,
  DatePicker,
  TextArea,
} from "@heroui/react";

import {
  FaArrowRight,
  FaLocationDot,
  FaSquareArrowUpRight,
  FaBuilding,
  FaUser,
  FaPhone,
  FaEnvelope,
  FaTag,
  FaMoneyBillWave,
  FaTruck,
  FaCreditCard,
  FaCircleInfo,
} from "react-icons/fa6";

/* =========================================================
   UNIT OPTIONS
========================================================= */

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

    <ListBox.Item id="OZ" textValue="Ounces">
      Ounces
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="L" textValue="Liters">
      Liters
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="ML" textValue="Milliliters">
      Milliliters
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="GAL" textValue="Gallons">
      Gallons
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="CBM" textValue="Cubic Meters">
      Cubic Meters
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="M" textValue="Meters">
      Meters
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="CM" textValue="Centimeters">
      Centimeters
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="FT" textValue="Feet">
      Feet
      <ListBox.ItemIndicator />
    </ListBox.Item>

    <ListBox.Item id="IN" textValue="Inches">
      Inches
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

/* =========================================================
   SECTION HEADER
========================================================= */

const SectionHeader = ({ icon, title, description }) => {
  return (
    <div className="mb-6 flex items-start gap-3">
      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-[#EAF8FD] text-[#00AEEF]">
        {icon}
      </div>

      <div>
        <h2 className="text-base font-bold text-[#102A4C] sm:text-lg">
          {title}
        </h2>

        <p className="mt-1 text-xs leading-5 text-[#7A8998] sm:text-sm">
          {description}
        </p>
      </div>
    </div>
  );
};

/* =========================================================
   INPUT WRAPPER STYLE
========================================================= */

const fieldClass = "w-full [&_input]:text-sm [&_input]:text-[#17283D]";

/* =========================================================
   MAIN COMPONENT
========================================================= */

const BuyerForm = ({ token }) => {
  const router = useRouter();

  const [isSubmitting, setIsSubmitting] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();

    setIsSubmitting(true);

    try {
      const formData = new FormData(e.target);
      const data = Object.fromEntries(formData.entries());

      const session = await authClient.getSession();

      const requirementsData = {
        /* ==========================================
           USER
        ========================================== */

        userId: session?.user?.id,

        /* ==========================================
           COMPANY / CONTACT
        ========================================== */

        companyName: data.companyName,
        contactPerson: data.contactPerson,
        contactEmail: data.contactEmail,
        contactPhone: data.contactPhone,

        /* ==========================================
           PRODUCT
        ========================================== */

        requirementName: data.requirementName,
        productCategory: data.productCategory,
        productCode: data.productCode,

        /* ==========================================
           QUANTITY
        ========================================== */

        targetQuantity: data.targetQuantity,
        unitOfMeasure: data.unitOfMeasure,

        /* ==========================================
           BUDGET
        ========================================== */

        budgetMin: data.budgetMin,
        budgetMax: data.budgetMax,
        currency: data.currency,

        /* ==========================================
           QUALITY
        ========================================== */

        qualityTier: data.qualityTier,

        /* ==========================================
           DELIVERY
        ========================================== */

        deliveryAddress: data.DeliveryAddress,
        deliveryCountry: data.deliveryCountry,
        targetDate: data.targetDate,
        deliveryTerms: data.deliveryTerms,

        /* ==========================================
           SUPPLIER
        ========================================== */

        supplierPreference: data.supplierPreference,
        supplierLocation: data.supplierLocation,

        /* ==========================================
           PAYMENT
        ========================================== */

        paymentTerms: data.paymentTerms,

        /* ==========================================
           URGENCY
        ========================================== */

        urgency: data.urgency,

        /* ==========================================
           ADDITIONAL INFORMATION
        ========================================== */

        attachmentLink: data.attachmentLink,
        specifications: data.specifications,
        additionalNotes: data.additionalNotes,

        /* ==========================================
           SYSTEM
        ========================================== */

        createdAt: new Date().toISOString(),
        status: "pending",
        delivaryStatus: ["searching"],
      };

      const res = await postRequirements(requirementsData, token);

      if (res?.acknowledged) {
        alert("Requirement submitted successfully!");
        router.push("/buyer/track-orders");
      } else {
        alert("Failed to submit requirement. Please try again.");
      }
    } catch (error) {
      console.error("Requirement submission error:", error);

      alert("Something went wrong while submitting your requirement.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-[#F8FBFE] px-3 py-8 sm:px-6 lg:px-8">
      {/* Background decoration */}

      <div className="pointer-events-none fixed -left-32 top-40 h-72 w-72 rounded-full bg-[#00AEEF]/[0.05] blur-3xl" />

      <div className="pointer-events-none fixed -right-32 bottom-20 h-80 w-80 rounded-full bg-[#FF4F0A]/[0.04] blur-3xl" />

      <div className="relative mx-auto w-full max-w-6xl">
        {/* =================================================
            PAGE HEADER
        ================================================= */}

        <div className="mb-8">
          <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-[#D8E7F1] bg-white px-3 py-1.5 text-xs font-semibold text-[#39719E] shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00AEEF]" />
            B2B SOURCING
          </div>

          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <h1 className="flex items-center gap-3 text-2xl font-extrabold tracking-tight text-[#102A4C] sm:text-3xl">
                <FaSquareArrowUpRight className="text-[#00AEEF]" />
                Create Sourcing Request
              </h1>

              <p className="mt-2 max-w-2xl text-sm leading-6 text-[#718196]">
                Tell suppliers exactly what you need. The more information you
                provide, the more relevant your supplier matches and quotations
                will be.
              </p>
            </div>

            {/* Progress */}

            <div className="rounded-xl border border-[#E1E8EF] bg-white px-4 py-3 shadow-sm">
              <p className="text-[10px] font-bold uppercase tracking-wider text-[#98A6B5]">
                REQUEST STATUS
              </p>

              <div className="mt-1 flex items-center gap-2">
                <span className="h-2 w-2 rounded-full bg-[#00AEEF]" />

                <span className="text-xs font-semibold text-[#17283D]">
                  Ready to submit
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* =================================================
            FORM CARD
        ================================================= */}

        <Card className="overflow-hidden border border-[#E0E8EF] bg-white shadow-[0_20px_60px_rgba(24,55,85,0.07)]">
          <Card.Header className="p-0">
            <Form className="w-full" onSubmit={onSubmit}>
              {/* =================================================
                  01 — CONTACT INFORMATION
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  icon={<FaBuilding size={16} />}
                  title="Company & Contact"
                  description="Provide the information suppliers can use to identify and communicate with your business."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {/* Company */}

                  <TextField
                    name="companyName"
                    isRequired
                    className={fieldClass}
                  >
                    <Label>Company Name</Label>

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

                  {/* Contact */}

                  <TextField
                    name="contactPerson"
                    isRequired
                    className={fieldClass}
                  >
                    <Label>Contact Person</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <FaUser className="text-[#8B9AAA]" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        placeholder="Your full name"
                        className="w-full"
                      />
                    </InputGroup>

                    <FieldError />
                  </TextField>

                  {/* Email */}

                  <TextField
                    name="contactEmail"
                    type="email"
                    isRequired
                    className={fieldClass}
                  >
                    <Label>Business Email</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <FaEnvelope className="text-[#8B9AAA]" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        placeholder="procurement@company.com"
                        className="w-full"
                      />
                    </InputGroup>

                    <FieldError />
                  </TextField>

                  {/* Phone */}

                  <TextField
                    name="contactPhone"
                    type="tel"
                    className={fieldClass}
                  >
                    <Label>Phone Number</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <FaPhone className="text-[#8B9AAA]" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        placeholder="+880 1XXXXXXXXX"
                        className="w-full"
                      />
                    </InputGroup>
                  </TextField>
                </div>
              </section>

              {/* =================================================
                  02 — PRODUCT INFORMATION
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  icon={<FaTag size={16} />}
                  title="Product Information"
                  description="Describe the product or material you want suppliers to quote."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
                  {/* Product Name */}

                  <TextField
                    isRequired
                    name="requirementName"
                    className="w-full lg:col-span-2"
                  >
                    <Label>Product / Requirement Name</Label>

                    <Input placeholder="e.g. Industrial Safety Gloves" />

                    <FieldError />
                  </TextField>

                  {/* Category */}

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

                  {/* Product Code */}

                  <TextField name="productCode" className="w-full">
                    <Label>Product / SKU Code</Label>

                    <Input placeholder="Optional product code" />
                  </TextField>

                  {/* Quantity */}

                  <TextField
                    isRequired
                    name="targetQuantity"
                    type="number"
                    className="w-full"
                  >
                    <Label>Target Quantity</Label>

                    <Input placeholder="e.g. 500" />

                    <FieldError />
                  </TextField>

                  {/* Unit */}

                  <Select
                    isRequired
                    name="unitOfMeasure"
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
                  03 — BUDGET & QUALITY
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  icon={<FaMoneyBillWave size={16} />}
                  title="Budget & Quality"
                  description="Help suppliers understand your expected purchasing range and quality requirements."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-4">
                  {/* Min Budget */}

                  <TextField name="budgetMin" type="number" className="w-full">
                    <Label>Minimum Budget</Label>

                    <InputGroup>
                      <InputGroup.Prefix>$</InputGroup.Prefix>

                      <InputGroup.Input placeholder="0" className="w-full" />
                    </InputGroup>
                  </TextField>

                  {/* Max Budget */}

                  <TextField name="budgetMax" type="number" className="w-full">
                    <Label>Maximum Budget</Label>

                    <InputGroup>
                      <InputGroup.Prefix>$</InputGroup.Prefix>

                      <InputGroup.Input
                        placeholder="10,000"
                        className="w-full"
                      />
                    </InputGroup>
                  </TextField>

                  {/* Currency */}

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

                  {/* Quality */}

                  <div className="lg:col-span-4">
                    <Label className="mb-3 block">Quality Tier</Label>

                    <RadioGroup
                      name="qualityTier"
                      defaultValue="standard"
                      orientation="horizontal"
                      className="grid grid-cols-1 gap-3 sm:grid-cols-3"
                      isRequired
                    >
                      {/* Standard */}

                      <Radio
                        value="standard"
                        className="
                          rounded-xl
                          border
                          border-[#E2E9EF]
                          bg-white
                          p-4
                          transition
                          hover:border-[#00AEEF]/40
                        "
                      >
                        <Radio.Content>
                          <Radio.Control>
                            <Radio.Indicator />
                          </Radio.Control>

                          <div>
                            <p className="text-sm font-semibold text-[#17283D]">
                              Standard
                            </p>

                            <Description>Commercial grade</Description>
                          </div>
                        </Radio.Content>
                      </Radio>

                      {/* Premium */}

                      <Radio
                        value="premium"
                        className="
                          rounded-xl
                          border
                          border-[#E2E9EF]
                          bg-white
                          p-4
                          transition
                          hover:border-[#00AEEF]/40
                        "
                      >
                        <Radio.Content>
                          <Radio.Control>
                            <Radio.Indicator />
                          </Radio.Control>

                          <div>
                            <p className="text-sm font-semibold text-[#17283D]">
                              Premium
                            </p>

                            <Description>Export quality</Description>
                          </div>
                        </Radio.Content>
                      </Radio>

                      {/* Organic */}

                      <Radio
                        value="organic"
                        className="
                          rounded-xl
                          border
                          border-[#E2E9EF]
                          bg-white
                          p-4
                          transition
                          hover:border-[#00AEEF]/40
                        "
                      >
                        <Radio.Content>
                          <Radio.Control>
                            <Radio.Indicator />
                          </Radio.Control>

                          <div>
                            <p className="text-sm font-semibold text-[#17283D]">
                              Organic
                            </p>

                            <Description>Certified / non-GMO</Description>
                          </div>
                        </Radio.Content>
                      </Radio>
                    </RadioGroup>
                  </div>
                </div>
              </section>

              {/* =================================================
                  04 — DELIVERY
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  icon={<FaTruck size={16} />}
                  title="Delivery Requirements"
                  description="Specify where and when the order needs to arrive."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {/* Address */}

                  <TextField
                    name="DeliveryAddress"
                    isRequired
                    className="w-full md:col-span-2"
                  >
                    <Label>Delivery Address</Label>

                    <InputGroup>
                      <InputGroup.Prefix>
                        <FaLocationDot className="text-[#00AEEF]" />
                      </InputGroup.Prefix>

                      <InputGroup.Input
                        defaultValue="Chittagong, Bangladesh"
                        placeholder="Full delivery address"
                        className="w-full"
                      />
                    </InputGroup>

                    <FieldError />
                  </TextField>

                  {/* Country */}

                  <TextField name="deliveryCountry" className="w-full">
                    <Label>Delivery Country</Label>

                    <Input placeholder="Bangladesh" />
                  </TextField>

                  {/* Date */}

                  <DatePicker className="w-full" isRequired name="targetDate">
                    <Label>Required By</Label>

                    <DateField.Group fullWidth>
                      <DateField.Input>
                        {(segment) => <DateField.Segment segment={segment} />}
                      </DateField.Input>

                      <DateField.Suffix>
                        <DatePicker.Trigger>
                          <DatePicker.TriggerIndicator />
                        </DatePicker.Trigger>
                      </DateField.Suffix>
                    </DateField.Group>

                    <DatePicker.Popover>
                      <Calendar aria-label="Required date">
                        <Calendar.Header>
                          <Calendar.YearPickerTrigger>
                            <Calendar.YearPickerTriggerHeading />
                            <Calendar.YearPickerTriggerIndicator />
                          </Calendar.YearPickerTrigger>

                          <Calendar.NavButton slot="previous" />
                          <Calendar.NavButton slot="next" />
                        </Calendar.Header>

                        <Calendar.Grid>
                          <Calendar.GridHeader>
                            {(day) => (
                              <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                            )}
                          </Calendar.GridHeader>

                          <Calendar.GridBody>
                            {(date) => <Calendar.Cell date={date} />}
                          </Calendar.GridBody>
                        </Calendar.Grid>

                        <Calendar.YearPickerGrid>
                          <Calendar.YearPickerGridBody>
                            {({ year }) => (
                              <Calendar.YearPickerCell year={year} />
                            )}
                          </Calendar.YearPickerGridBody>
                        </Calendar.YearPickerGrid>
                      </Calendar>
                    </DatePicker.Popover>
                  </DatePicker>

                  {/* Delivery Terms */}

                  <Select
                    name="deliveryTerms"
                    placeholder="Select delivery terms"
                    className="w-full"
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
                </div>
              </section>

              {/* =================================================
                  05 — SUPPLIER & PAYMENT
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  icon={<FaCreditCard size={16} />}
                  title="Supplier & Payment Preferences"
                  description="Optional preferences help us match your request with suitable suppliers."
                />

                <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                  {/* Supplier Preference */}

                  <Select
                    name="supplierPreference"
                    placeholder="Select preference"
                    className="w-full"
                  >
                    <Label>Supplier Preference</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item
                          id="verified"
                          textValue="Verified Suppliers Only"
                        >
                          Verified Suppliers Only
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

                  {/* Supplier Location */}

                  <TextField name="supplierLocation" className="w-full">
                    <Label>Preferred Supplier Location</Label>

                    <Input placeholder="e.g. Bangladesh, China, India" />
                  </TextField>

                  {/* Payment */}

                  <Select
                    name="paymentTerms"
                    placeholder="Select payment terms"
                    className="w-full"
                  >
                    <Label>Preferred Payment Terms</Label>

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

                  {/* Urgency */}

                  <Select
                    name="urgency"
                    placeholder="Select urgency"
                    className="w-full"
                  >
                    <Label>Request Priority</Label>

                    <Select.Trigger>
                      <Select.Value />
                      <Select.Indicator />
                    </Select.Trigger>

                    <Select.Popover>
                      <ListBox>
                        <ListBox.Item id="normal" textValue="Normal">
                          Normal
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="high" textValue="High">
                          High
                          <ListBox.ItemIndicator />
                        </ListBox.Item>

                        <ListBox.Item id="urgent" textValue="Urgent">
                          Urgent
                          <ListBox.ItemIndicator />
                        </ListBox.Item>
                      </ListBox>
                    </Select.Popover>
                  </Select>
                </div>
              </section>

              {/* =================================================
                  06 — SPECIFICATIONS
              ================================================= */}

              <section className="w-full border-b border-[#E9EEF3] p-5 sm:p-7 lg:p-8">
                <SectionHeader
                  icon={<FaCircleInfo size={16} />}
                  title="Specifications & Additional Information"
                  description="Add technical requirements, certifications, packaging instructions, or anything else suppliers should know."
                />

                <div className="space-y-5">
                  {/* Specifications */}

                  <TextField name="specifications" className="w-full">
                    <Label>Product Specifications</Label>

                    <TextArea
                      placeholder="Describe dimensions, materials, technical specifications, certifications, packaging requirements, brand preferences, etc."
                      rows={6}
                      style={{
                        resize: "vertical",
                      }}
                    />

                    <Description>
                      Include as much technical detail as possible to receive
                      accurate quotations.
                    </Description>
                  </TextField>

                  {/* Additional Notes */}

                  <TextField name="additionalNotes" className="w-full">
                    <Label>Additional Notes</Label>

                    <TextArea
                      placeholder="Anything else suppliers should know?"
                      rows={4}
                      style={{
                        resize: "vertical",
                      }}
                    />
                  </TextField>

                  {/* Attachment */}

                  <TextField name="attachmentLink" className="w-full">
                    <Label>Reference / Attachment Link</Label>

                    <Input placeholder="Google Drive, Dropbox, product sheet, etc." />

                    <Description>
                      Add a link to drawings, product images, technical
                      documents, or specifications.
                    </Description>

                    <FieldError />
                  </TextField>
                </div>
              </section>

              {/* =================================================
                  SUBMIT
              ================================================= */}

              <section className="flex flex-col gap-5 bg-[#FAFCFE] p-5 sm:p-7 lg:flex-row lg:items-center lg:justify-between lg:p-8">
                <div>
                  <p className="text-sm font-semibold text-[#17283D]">
                    Ready to find suppliers?
                  </p>

                  <p className="mt-1 text-xs leading-5 text-[#7A8998]">
                    Your request will be reviewed and matched with relevant
                    suppliers.
                  </p>
                </div>

                <Button
                  type="submit"
                  isDisabled={isSubmitting}
                  className="
                    w-full
                    rounded-xl
                    bg-[#FF4F0A]
                    px-7
                    py-3
                    text-sm
                    font-semibold
                    text-white
                    shadow-[0_8px_20px_rgba(255,79,10,0.18)]
                    transition
                    hover:bg-[#E84605]
                    sm:w-auto
                  "
                >
                  {isSubmitting ? "Submitting..." : "Submit Sourcing Request"}

                  {!isSubmitting && <FaArrowRight className="ml-1" />}
                </Button>
              </section>
            </Form>
          </Card.Header>
        </Card>

        {/* =================================================
            FOOTER NOTE
        ================================================= */}

        <div className="mt-5 flex items-center justify-center gap-2 text-center text-[11px] text-[#8A98A7]">
          <FaCircleInfo size={11} />
          You can update additional sourcing details after submitting your
          request.
        </div>
      </div>
    </div>
  );
};

export default BuyerForm;
