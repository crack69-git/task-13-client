"use client";
import { deleteOrder } from "@/lib/actions/deleteDataa";
import { Button, Link } from "@heroui/react";
import React from "react";
import { RiDeleteBin5Fill } from "react-icons/ri";

const OrderAction = ({ id }) => {
  console.log("OrderAction received ID:", id);
  const handleDelete = async () => {
    const res = await deleteOrder(id);
    console.log("Delete response:", res);
    if (res.deleteCount > 0) {
      alert("Order deleted successfully!");
    } else {
      alert("Failed to delete order.");
      return;
    }
  };
  return (
    <div className="flex gap-2">
      <Link href={`/admin/ordered-products/${id}`}>
        <Button size="sm" className="rounded-lg">
          Inspect
        </Button>
      </Link>
      <Button
        size="sm"
        variant="flat"
        className=" text-red-600 "
        onClick={() => handleDelete()}
      >
        <RiDeleteBin5Fill className="size-4" />
      </Button>
    </div>
  );
};

export default OrderAction;
