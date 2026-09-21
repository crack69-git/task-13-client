import BuyerForm from "@/Components/BuyerSection/BuyerForm";
export const metadata = {
  title: "SourceX-Buyer Dashboard",
  description: "Buyer dashboard for SourceX",
};
export default function Home() {
  return (
    <div className="bg-neutral-50">
      <BuyerForm />
    </div>
  );
}
