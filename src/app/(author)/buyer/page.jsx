import BuyerForm from "@/Components/BuyerSection/BuyerForm";
import { auth } from "@/lib/auth";
import { authClient } from "@/lib/auth-client";
import { headers } from "next/headers";
export const metadata = {
  title: "SourceX-Buyer Dashboard",
  description: "Buyer dashboard for SourceX",
};
export default async function Home() {
  const token = await auth.api.getToken({
    headers: await headers(),
  });

  return (
    <div className="bg-neutral-50">
      <BuyerForm token={token.token} />
    </div>
  );
}
