import { getPosts } from "@/lib/actions/getData";
import { Button, Chip, Table } from "@heroui/react";
import Link from "next/link";
import React from "react";

const AdminTable = async () => {
  const data = await getPosts();
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
                <Table.Row key={item.id}>
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
                      className={`${item.status === "Pending" ? "bg-yellow-100 text-yellow-600 border border-yellow-300" : "bg-green-100 text-green-600 border border-green-600"}`}
                    >
                      {item.status}
                    </Chip>
                  </Table.Cell>
                  <Table.Cell>
                    <Link href={`/admin/inspect/${item._id}`}>
                      <Button
                        variant="primary"
                        size="sm"
                        className="bg-green-950 rounded-lg"
                      >
                        Inspect
                      </Button>
                    </Link>
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
