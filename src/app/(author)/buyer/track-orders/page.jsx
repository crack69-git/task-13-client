import { getPosts } from "@/lib/actions/getData";
import { Button, Chip, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";
import { FaTruckMoving } from "react-icons/fa6";

const page = async () => {
  const orders = await getPosts();
  console.log("Orders:", orders);
  return (
    <div className="w-11/12 mx-auto py-10">
      <div className="flex items-center gap-4 mb-5">
        <FaTruckMoving size={44} color="orange" />
        <div>
          <h5 className="text-xl font-semibold">Your Orders</h5>
          <p className="text-sm text-gray-500">
            Inspect your order status and details
          </p>
        </div>
      </div>
      <Table>
        <Table.ResizableContainer>
          <Table.Content
            aria-label="Table with resizable columns"
            className="min-w-11/12 mx-auto "
          >
            <Table.Header>
              <Table.Column
                isRowHeader
                defaultWidth="1fr"
                id="name"
                minWidth={160}
              >
                Order ID
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="role" minWidth={220}>
                Order Name
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="status" minWidth={100}>
                Order Status
                <Table.ColumnResizer />
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="email" minWidth={200}>
                Order Date
              </Table.Column>
              <Table.Column defaultWidth="1fr" id="actions" minWidth={200}>
                Actions
              </Table.Column>
            </Table.Header>
            <Table.Body>
              {orders.length > 0 ? (
                orders.map((order, index) => (
                  <Table.Row key={index} className="hover:bg-gray-100 ">
                    <Table.Cell className="">
                      {order._id.slice(0, 8)}...
                    </Table.Cell>
                    <Table.Cell>{order.requirementName}</Table.Cell>
                    <Table.Cell>
                      <Chip
                        className={`${order.status === "active" ? "bg-green-100 text-green-800" : "bg-yellow-100 text-yellow-800 border border-yellow-300"}`}
                        size="sm"
                        variant="soft"
                      >
                        {order.status}
                      </Chip>
                    </Table.Cell>
                    <Table.Cell>{order.targetDate}</Table.Cell>
                    <Table.Cell>
                      {order.status === "Pending" ? (
                        <Button
                          variant="primary"
                          size="sm"
                          className="rounded-md bg-orange-600"
                          isDisabled
                        >
                          View Details
                        </Button>
                      ) : (
                        <Link href={`/buyer/track-orders/${order._id}`}>
                          <Button
                            variant="primary"
                            size="sm"
                            className="rounded-md bg-orange-600"
                          >
                            View Details
                          </Button>
                        </Link>
                      )}
                    </Table.Cell>
                  </Table.Row>
                ))
              ) : (
                <Table.Row>
                  <Table.Cell colSpan={5} className="text-center">
                    No orders found.
                  </Table.Cell>
                </Table.Row>
              )}
            </Table.Body>
          </Table.Content>
        </Table.ResizableContainer>
      </Table>
    </div>
  );
};

export default page;
