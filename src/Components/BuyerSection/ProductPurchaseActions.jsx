"use client";

import { postCart, postOrder } from "@/lib/actions/postData";
import {
  Button,
  FieldError,
  FieldGroup,
  Fieldset,
  Form,
  Input,
  Label,
  Modal,
  TextArea,
  TextField,
} from "@heroui/react";
import React, { useState } from "react";
import { FaCartPlus } from "react-icons/fa6";
import { FiPackage, FiShoppingBag } from "react-icons/fi";

const ProductPurchaseActions = ({ product, user }) => {
  console.log("ProductPurchaseActions props:", { product, user });
  const handleAddToCart = async () => {
    try {
      const res = await postCart({
        productId: product.id,
        userId: user?.id,
        productName: product.productName,
        unitPrice: unitPrice,
        unitOfMeasure: product.unitOfMeasure,
        supplier: product.supplierCompany,
      });

      if (res?.acknowledged) {
        alert(`Added ${product.productName} to cart!`);
      } else {
        alert(`Failed to add ${product.productName} to cart.`);
      }
    } catch (error) {
      console.error("Add to cart error:", error);
      alert("Unable to add this product to your cart.");
    }
  };

  const [quantity, setQuantity] = useState(product?.minimumOrderQuantity);
  const [totalPrice, setTotalPrice] = useState(
    product?.unitPrice * product?.minimumOrderQuantity,
  );
  const unitPrice = product?.unitPrice || 0;
  const onChangeQuantity = (e) => {
    let subtotal = e * product?.unitPrice;
    setTotalPrice(subtotal);
    setQuantity(e);
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    const finalData = {
      ...product,
      ...data,
      totalPrice: totalPrice,
      status: "PROCESSING",
    };
    const res = await postOrder(finalData);
    console.log("Order result:", res);
    if (res.acknowledged) {
      alert("Order placed successfully!");
    } else {
      alert("Failed to place order. Please try again.");
      return;
    }
  };

  return (
    <div className="mt-3 flex items-center gap-3">
      <Modal>
        <Button
          className="rounded-lg bg-[#102A4C] text-white"
          variant="primary"
        >
          <FiShoppingBag className="size-4" />
          Buy Now
        </Button>

        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="max-h-[90vh] w-full max-w-2xl overflow-hidden rounded-2xl bg-white">
              <Modal.CloseTrigger />

              <Modal.Header className="border-b border-slate-100 px-5 py-4 sm:px-6">
                <Modal.Icon className="bg-sky-50 text-[#007EA8]">
                  <FiPackage className="size-5" />
                </Modal.Icon>

                <div>
                  <Modal.Heading className="text-lg font-bold text-[#102A4C]">
                    Place Product Order
                  </Modal.Heading>
                  <p className="mt-1 text-xs text-slate-500">
                    Fill in the information required to place your order.
                  </p>
                </div>
              </Modal.Header>

              <Modal.Body className="max-h-[calc(90vh-145px)] overflow-y-auto px-5 py-5 sm:px-6">
                <Form
                  id="product-order-form"
                  className="w-full space-y-5"
                  onSubmit={onSubmit}
                >
                  {/* Product information */}
                  <Fieldset>
                    <Fieldset.Legend>Order Information</Fieldset.Legend>

                    <FieldGroup>
                      <TextField name="productName">
                        <Label>Product Name</Label>
                        <Input value={product?.productName || ""} isReadOnly />
                      </TextField>

                      <TextField name="supplierCompany">
                        <Label>Supplier Company</Label>
                        <Input
                          value={product?.supplierCompany || ""}
                          isReadOnly
                        />
                      </TextField>

                      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <TextField
                          name="unitPrice"
                          defaultValue={product?.unitPrice || 0}
                          isReadOnly
                        >
                          <Label>Unit Price/{product.unitOfMeasure}</Label>

                          <Input isReadOnly />
                        </TextField>

                        <TextField
                          defaultValue={product?.availableQuantity || 0}
                          name="availableQuantity"
                          isReadOnly
                        >
                          <Label>Available Stock</Label>
                          <Input />
                        </TextField>
                      </div>

                      <TextField
                        name="quantity"
                        defaultValue={product?.minimumOrderQuantity}
                        isRequired
                      >
                        <Label>
                          Order Quantity ({product?.unitOfMeasure || "units"})
                        </Label>

                        <Input
                          type="number"
                          step={1}
                          name="quantity"
                          onChange={(e) => onChangeQuantity(e.target.value)}
                          isRequired
                          placeholder="Enter order quantity"
                        />

                        <FieldError />
                        <p className="text-xs text-slate-500">
                          Minimum order: {product?.minimumOrderQuantity}{" "}
                          {product?.unitOfMeasure || "units"}
                        </p>
                      </TextField>
                    </FieldGroup>
                  </Fieldset>

                  {/* Buyer information */}
                  <Fieldset>
                    <Fieldset.Legend>Buyer Information</Fieldset.Legend>

                    <FieldGroup>
                      <TextField name="buyerName" isRequired>
                        <Label>Buyer / Company Name</Label>
                        <Input
                          name="buyerName"
                          defaultValue={user?.name || ""}
                          placeholder="Enter buyer or company name"
                          isRequired
                        />
                        <FieldError />
                      </TextField>

                      <TextField name="buyerEmail" type="email" isRequired>
                        <Label>Email Address</Label>
                        <Input
                          name="buyerEmail"
                          type="email"
                          defaultValue={user?.email || ""}
                          placeholder="buyer@company.com"
                          isRequired
                        />
                        <FieldError />
                      </TextField>

                      <TextField name="buyerPhone" isRequired>
                        <Label>Phone Number</Label>
                        <Input
                          name="buyerPhone"
                          type="tel"
                          placeholder="+8801XXXXXXXXX"
                          isRequired
                        />
                        <FieldError />
                      </TextField>
                    </FieldGroup>
                  </Fieldset>

                  {/* Delivery information */}
                  <Fieldset>
                    <Fieldset.Legend>Delivery Information</Fieldset.Legend>

                    <FieldGroup>
                      <TextField name="deliveryAddress" isRequired>
                        <Label>Delivery Address</Label>
                        <TextArea
                          name="deliveryAddress"
                          placeholder="Street, city, postal code, and other address details"
                          isRequired
                        />
                        <FieldError />
                      </TextField>

                      <TextField name="deliveryCountry" isRequired>
                        <Label>Delivery Country</Label>
                        <Input
                          name="deliveryCountry"
                          placeholder="Enter destination country"
                          isRequired
                        />
                        <FieldError />
                      </TextField>

                      <TextField name="targetDate" isRequired>
                        <Label>Expected Delivery Date</Label>
                        <Input
                          name="targetDate"
                          type="date"
                          // min={new Date().toLocaleDateString("en-CA")}
                          isRequired
                        />
                        <FieldError />
                      </TextField>

                      <TextField name="deliveryTerms">
                        <Label>Delivery Terms</Label>
                        <Input
                          name="deliveryTerms"
                          placeholder="e.g. FOB, CIF, or agreed delivery terms"
                        />
                        <FieldError />
                      </TextField>
                    </FieldGroup>
                  </Fieldset>

                  {/* Payment and requirements */}
                  <Fieldset>
                    <Fieldset.Legend>
                      Payment &amp; Requirements
                    </Fieldset.Legend>

                    <FieldGroup>
                      <TextField name="paymentTerms" isRequired>
                        <Label>Preferred Payment Terms</Label>
                        <Input
                          name="paymentTerms"
                          placeholder="e.g. Bank Transfer or Letter of Credit"
                          isRequired
                        />
                        <FieldError />
                      </TextField>

                      <TextField name="specifications">
                        <Label>Additional Requirements</Label>
                        <TextArea
                          name="specifications"
                          placeholder="Packaging, quality, certification, or other instructions"
                        />
                        <FieldError />
                      </TextField>
                    </FieldGroup>
                  </Fieldset>

                  {/* Dynamic subtotal */}
                  <section className="rounded-xl border border-sky-100 bg-sky-50 p-4">
                    <div className="flex items-center justify-between gap-4">
                      <div>
                        <p className="text-sm font-semibold text-slate-700">
                          Order Subtotal
                        </p>

                        {/* <p className="mt-1 text-xs text-slate-500">
                          {quantity.toLocaleString()}{" "}
                          {product?.unitOfMeasure || "units"} ×{" "}
                          {formatPrice(unitPrice)}
                        </p> */}
                      </div>

                      <p className="text-xl font-extrabold text-[#102A4C]">
                        {totalPrice.toLocaleString("en-US", {
                          style: "currency",
                          currency: "USD",
                        })}
                      </p>
                    </div>

                    <div className="mt-3 border-t border-sky-100 pt-3">
                      <p className="text-xs leading-5 text-slate-500">
                        Shipping, taxes, and additional charges are not
                        included. Final pricing is subject to supplier
                        confirmation.
                      </p>
                    </div>
                  </section>

                  {/* Form actions */}
                  <Fieldset.Actions className="flex flex-col gap-2">
                    <Button
                      type="submit"
                      className="w-full rounded-lg bg-[#102A4C] font-semibold text-white"
                    >
                      Order Now
                    </Button>

                    <Button
                      type="reset"
                      variant="secondary"
                      className="w-full rounded-lg"
                      onPress={() => setQuantity(minimumQuantity)}
                    >
                      Reset Form
                    </Button>
                  </Fieldset.Actions>
                </Form>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>

      {/* Add to Cart */}
      <Button
        variant="secondary"
        className="rounded-lg"
        onPress={handleAddToCart}
      >
        <FaCartPlus className="size-4" />
        Add to Cart
      </Button>
    </div>
  );
};

export default ProductPurchaseActions;
