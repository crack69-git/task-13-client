import { getPosts } from "@/lib/actions/getData";
import { Button, Chip, Table } from "@heroui/react";
import Link from "next/link";

import InspectButton from "./InspectButton";
import { auth } from "@/lib/auth";
import { headers } from "next/headers";

const AdminTable = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const data = await getPosts(token);
  console.log(data);
  return (
    <div className="mt-5">
      <Table variant="secondary">
        <Table.ScrollContainer>
          <Table.Content aria-label="Team members" className="min-w-full">
            <Table.Header>
              <Table.Column isRowHeader>Request ID</Table.Column>
              <Table.Column isRowHeader>Buyer Name</Table.Column>
              <Table.Column isRowHeader>Requirement</Table.Column>
              <Table.Column isRowHeader>Quantity</Table.Column>
              <Table.Column isRowHeader>Budget</Table.Column>
              <Table.Column isRowHeader>Status</Table.Column>
              <Table.Column isRowHeader>Action</Table.Column>
            </Table.Header>
            <Table.Body>
              {data.map((item) => (
                <Table.Row key={item._id}>
                  <Table.Cell>{item._id.slice(0, 8)}...</Table.Cell>
                  <Table.Cell>Buyer</Table.Cell>
                  <Table.Cell>{item.requirementName}</Table.Cell>
                  <Table.Cell>
                    {item.targetQuantity} {item.unitOfMeasure}
                  </Table.Cell>
                  <Table.Cell>${item.price}</Table.Cell>
                  <Table.Cell>
                    <Chip
                      variant="flat"
                      className={`${item.status === "pending" ? "bg-yellow-100 text-yellow-600 border border-yellow-300" : item.status === "approved" ? "bg-green-100 text-green-600 border border-green-600" : "bg-purple-100 text-purple-600 border border-purple-300"}`}
                    >
                      {(item?.status || "unknown").toUpperCase()}
                    </Chip>
                    .
                  </Table.Cell>
                  <Table.Cell>
                    <InspectButton
                      status={item.status}
                      id={item._id}
                      token={token}
                    />
                  </Table.Cell>
                </Table.Row>
              ))}
            </Table.Body>
          </Table.Content>
        </Table.ScrollContainer>
      </Table>
    </div>
  );
};

export default AdminTable;
