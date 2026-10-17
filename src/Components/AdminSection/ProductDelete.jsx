"use client";
import { deleteProduct } from "@/lib/actions/deleteDataa";
import { Button } from "@heroui/react";
import { useRouter } from "next/navigation";
import React from "react";
import { FaTrash } from "react-icons/fa6";

const ProductDelete = ({ product }) => {
  const router = useRouter();
  const handleDelete = async (id) => {
    const res = await deleteProduct(id);
    console.log("Delete response:", res);
    if (res.deletedCount > 0) {
      alert("Product deleted successfully!");
      router.refresh();
    } else {
      alert("Failed to delete the product. Please try again.");
      return;
    }
  };
  return (
    <div>
      {" "}
      <Button
        onClick={() => handleDelete(product._id)}
        size="sm"
        isIconOnly
        variant="flat"
        aria-label={`Delete ${product.productName}`}
        className="bg-[#FFF1EE] text-[#E74C27] hover:bg-[#FFE5DF]"
      >
        <FaTrash />
      </Button>
    </div>
  );
};

export default ProductDelete;
