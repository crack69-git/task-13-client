import { Chip, Table } from "@heroui/react";
import React from "react";
import { FaTruckMoving } from "react-icons/fa6";

const page = () => {
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
            className="min-w-11/12 mx-auto"
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
              <Table.Row>
                <Table.Cell>Kate Moore</Table.Cell>
                <Table.Cell>CEO</Table.Cell>
                <Table.Cell>
                  <Chip color="success" size="sm" variant="soft">
                    Active
                  </Chip>
                </Table.Cell>
                <Table.Cell>kate@acme.com</Table.Cell>
                <Table.Cell>kate@acme.com</Table.Cell>
              </Table.Row>
            </Table.Body>
          </Table.Content>
        </Table.ResizableContainer>
      </Table>
    </div>
  );
};

export default page;
