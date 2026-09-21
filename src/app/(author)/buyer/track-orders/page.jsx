import { getPosts } from "@/lib/actions/getData";
import { Button, Chip, Table } from "@heroui/react";
import Link from "next/link";

import { FaTruckMoving } from "react-icons/fa6";

const page = async () => {
  const orders = await getPosts();
  console.log("Orders:", orders);
  return (
    <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-6 sm:py-10 lg:px-8">
      <div className="mb-5 flex items-center gap-3 sm:gap-4">
        <FaTruckMoving className="shrink-0 text-[34px] text-orange-500 sm:text-[44px]" />
        <div>
          <h5 className="text-xl font-semibold">Your Orders</h5>
          <p className="text-sm text-gray-500">
            Inspect your order status and details
          </p>
        </div>
      </div>
      <div className="w-full overflow-x-auto rounded-lg border border-slate-200 bg-white">
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
                  Order Deadline
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
                          className={`${order.status === "approved" ? "bg-green-100 text-green-800 border border-green-300" : "bg-yellow-100 text-yellow-800 border border-yellow-300"}`}
                          size="sm"
                          variant="soft"
                        >
                          {order.status.toUpperCase()}
                        </Chip>
                      </Table.Cell>
                      <Table.Cell>{order.targetDate}</Table.Cell>
                      <Table.Cell>
                        <Link href={`/buyer/track-orders/${order._id}`}>
                          <Button
                            variant="primary"
                            size="sm"
                            className="rounded-md bg-orange-600"
                          >
                            View Details
                          </Button>
                        </Link>
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
    </div>
  );
};

export default page;
