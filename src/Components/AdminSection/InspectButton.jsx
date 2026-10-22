"use client";
import { deletePost } from "@/lib/actions/deleteDataa";
import { patchPostStatus } from "@/lib/actions/patchData";
import { Button, Modal } from "@heroui/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaTrash, FaTrashCan } from "react-icons/fa6";

const InspectButton = ({ status, id, token }) => {
  const router = useRouter();
  const handleApprove = async (id) => {
    const res = await patchPostStatus(id, "approved", token);
    console.log("Status updated:", res);
    if (res.modifiedCount > 0) {
      alert("Request approved successfully!");
      router.refresh();
    } else {
      alert("Failed to approve the request. Please try again.");
      return;
    }
  };
  const handleDelete = async (id) => {
    const res = await deletePost(id);
    console.log("Delete response:", res);
    if (res.deletedCount > 0) {
      alert("Request deleted successfully!");
      router.refresh();
    } else {
      alert("Failed to delete the request. Please try again.");
      return;
    }
  };
  return (
    <div className="flex gap-2 justify-end">
      {status === "pending" ? (
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
      )}
      <Modal>
        <Button variant="danger" size="sm" className="rounded-lg">
          <FaTrash className="mr-2" />
          Delete
        </Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                <Modal.Icon className="bg-default text-foreground">
                  <FaTrashCan color="red" />
                </Modal.Icon>
                <Modal.Heading>Are you sure?</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <p>
                  This action cannot be undone. Are you sure you want to delete
                  this item?
                </p>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  onClick={() => handleDelete(id)}
                  variant="danger"
                  className="rounded-lg"
                >
                  Delete
                </Button>
              </Modal.Footer>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default InspectButton;
