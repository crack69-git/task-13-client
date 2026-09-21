"use client";
import { patchPostStatus } from "@/lib/actions/patchData";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { Suspense } from "react";

const InspectButton = ({ status, id }) => {
  const router = useRouter();
  const handleApprove = async (id) => {
    const res = await patchPostStatus(id, "approved");
    console.log("Status updated:", res);
    if (res.modifiedCount > 0) {
      alert("Request approved successfully!");
      router.refresh();
    } else {
      alert("Failed to approve the request. Please try again.");
      return;
    }
  };
  return status === "pending" ? (
    <Button
      onClick={() => handleApprove(id)}
      className="rounded-lg"
      size="sm"
      variant="primary"
    >
      Approve
    </Button>
  ) : (
    <Link href={`/admin/inspect/${id}`}>
      <Button className="rounded-lg" size="sm" variant="secondary">
        Inspect
      </Button>
    </Link>
  );
};

export default InspectButton;
