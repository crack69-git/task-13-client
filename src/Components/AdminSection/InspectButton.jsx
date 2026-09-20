"use client";
import { patchPostStatus } from "@/lib/actions/patchData";
import { Button } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

const InspectButton = ({ status, id }) => {
  const router = useRouter();
  const handleApprove = async (id) => {
    const res = await patchPostStatus(id, "Approved");
    console.log("Status updated:", res);
    if (res.modifiedCount > 0) {
      alert("Request approved successfully!");
      router.refresh();
    } else {
      alert("Failed to approve the request. Please try again.");
      return;
    }
  };
  return status === "Pending" ? (
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
      <Button variant="primary" size="sm" className="bg-green-950 rounded-lg">
        Inspect
      </Button>
    </Link>
  );
};

export default InspectButton;
