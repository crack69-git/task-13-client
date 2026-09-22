import AdminTable from "@/Components/AdminSection/AdminTable";
import { getPosts } from "@/lib/actions/getData";
import { auth } from "@/lib/auth";
import { Card } from "@heroui/react";
import { headers } from "next/headers";

import { BiTask } from "react-icons/bi";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { LuRefreshCcw } from "react-icons/lu";
import { MdVerified } from "react-icons/md";
export const metadata = {
  title: "SourceX-Admin",
  description: "Admin page for SourceX",
};
const page = async () => {
  const { token } = await auth.api.getToken({
    headers: await headers(),
  });
  const totalRequests = await getPosts(token);
  const pendingRequests = totalRequests.filter(
    (request) => request.status === "pending",
  );
  const verifiedRequests = totalRequests.filter(
    (request) => request.status === "approved",
  );
  const completedRequests = totalRequests.filter(
    (request) => request.status === "completed",
  );

  return (
    <div className="mx-auto w-full max-w-[1440px] px-3 py-4 sm:px-5 sm:py-5 lg:px-8">
      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 xl:grid-cols-4 xl:gap-4">
        <Card className="w-full" variant="default">
          <Card.Header>
            <Card.Title>
              <div className=" bg-gray-100 text-gray-600 p-2 rounded-full w-fit">
                <BiTask size={24} />
              </div>
              Total Requests
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-4xl font-bold text-gray-600">
              {totalRequests.length}
            </p>
          </Card.Content>
        </Card>
        <Card className="w-full" variant="default">
          <Card.Header>
            <Card.Title>
              <div className=" bg-yellow-100 text-yellow-600 p-2 rounded-full w-fit">
                <LuRefreshCcw size={24} />
              </div>
              Pending Requests
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-4xl font-bold text-gray-600">
              {pendingRequests.length}
            </p>
          </Card.Content>
        </Card>
        <Card className="w-full" variant="default">
          <Card.Header>
            <Card.Title>
              <div className=" bg-green-100 text-green-600 p-2 rounded-full w-fit">
                <MdVerified size={24} />
              </div>
              Verified Requests
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-4xl font-bold text-gray-600">
              {verifiedRequests.length}
            </p>
          </Card.Content>
        </Card>
        <Card className="w-full" variant="default">
          <Card.Header>
            <Card.Title>
              <div className=" bg-green-100 text-green-600 p-2 rounded-full w-fit">
                <IoCheckmarkCircleOutline size={24} />
              </div>
              Completed Requests
            </Card.Title>
          </Card.Header>
          <Card.Content>
            <p className="text-4xl font-bold text-gray-600">
              {completedRequests.length}
            </p>
          </Card.Content>
        </Card>
      </div>
      <AdminTable />
    </div>
  );
};

export default page;
