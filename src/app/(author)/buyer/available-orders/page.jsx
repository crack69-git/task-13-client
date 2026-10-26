import React from "react";
import { Table, Button } from "@heroui/react";
import { FiTruck } from "react-icons/fi";
import { getOrders } from "@/lib/actions/getData";

const statusStyles = {
  PROGRESS: "border-amber-300 bg-amber-50 text-amber-700",
  COMPLETED: "border-purple-300 bg-purple-50 text-purple-700",
  APPROVED: "border-emerald-300 bg-emerald-50 text-emerald-700",
};

export default async function OrdersTable() {
  const orders = await getOrders();
  console.log("Fetched orders:", orders);
  return (
    <section className="w-full bg-white px-4 py-6 sm:px-6">
      {/* Heading */}
      <div className="mb-5 flex items-center gap-4">
        <FiTruck className="size-10 shrink-0 text-orange-500" />

        <div>
          <h2 className="text-xl font-semibold text-slate-900">Your Orders</h2>
          <p className="mt-1 text-sm text-slate-500">
            Inspect your order status and details
          </p>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm">
        <Table>
          <Table.ScrollContainer>
            <Table.Content
              aria-label="Your orders"
              className="min-w-[760px] border-separate border-spacing-0"
            >
              <Table.Header>
                <Table.Column isRowHeader className="bg-[#F0F0F0]">
                  Order ID
                </Table.Column>
                <Table.Column className="bg-[#F0F0F0]">Order Name</Table.Column>
                <Table.Column className="bg-[#F0F0F0]">
                  Order Status
                </Table.Column>
                <Table.Column className="bg-[#F0F0F0]">
                  Order Deadline
                </Table.Column>
                <Table.Column className="bg-[#F0F0F0]">Actions</Table.Column>
              </Table.Header>

              <Table.Body>
                {orders.map((order) => (
                  <Table.Row key={order.id}>
                    <Table.Cell>
                      <span
                        title={order.id}
                        className="font-medium text-slate-700"
                      >
                        {order.id.slice(0, 8)}...
                      </span>
                    </Table.Cell>

                    <Table.Cell>
                      <span className="font-medium text-slate-900">
                        {order.productName}
                      </span>
                    </Table.Cell>

                    <Table.Cell>
                      <span
                        className={`inline-flex rounded-full border px-2 py-1 text-[11px] font-semibold ${
                          statusStyles[order.status] ||
                          "border-slate-200 bg-slate-50 text-slate-600"
                        }`}
                      >
                        {order.status}
                      </span>
                    </Table.Cell>

                    <Table.Cell>
                      <span className="whitespace-nowrap text-slate-700">
                        {order.targetDate}
                      </span>
                    </Table.Cell>

                    <Table.Cell>
                      <Button
                        size="sm"
                        className="rounded-lg bg-orange-600 px-3 font-semibold text-white hover:bg-orange-700"
                      >
                        View Details
                      </Button>
                    </Table.Cell>
                  </Table.Row>
                ))}
              </Table.Body>
            </Table.Content>
          </Table.ScrollContainer>
        </Table>
      </div>
    </section>
  );
}
