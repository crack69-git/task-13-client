"use client";
import { postSupplier } from "@/lib/actions/postData";
import {
  Button,
  FieldError,
  Form,
  Input,
  Label,
  Modal,
  TextField,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import { FaMailchimp } from "react-icons/fa6";

const SupplierModal = ({ id }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const router = useRouter();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());
    console.log(data);
    const supplier = {
      productId: id,
      supplierCompany: data.supplierCompany,
      supplierName: data.supplierName,
      supplierContact: data.supplierContact,
      supplierPrice: data.supplierPrice,
    };
    const res = await postSupplier(supplier);
    console.log(res);
    if (res.acknowledged) {
      alert("Supplier added successfully");
      setIsOpen(false);
      router.refresh();
    } else {
      alert("Failed to add supplier");
      return;
    }
  };
  return (
    <div>
      <Modal open={isOpen} onOpenChange={setIsOpen}>
        <Button
          onClick={() => setIsOpen(true)}
          variant="secondary"
          className="w-full rounded-lg mt-5"
          size="sm"
        >
          <FaMailchimp className="mr-1 inline" />
          Update Status
        </Button>
        <Modal.Backdrop>
          <Modal.Container>
            <Modal.Dialog className="sm:max-w-[360px]">
              <Modal.CloseTrigger />
              <Modal.Header>
                {/* <Modal.Icon className="bg-default text-foreground">
                        <Rocket className="size-5" />
                      </Modal.Icon> */}
                <Modal.Heading>Update Info</Modal.Heading>
              </Modal.Header>
              <Modal.Body>
                <Form
                  className="flex w-full flex-col gap-4"
                  onSubmit={onSubmit}
                >
                  <TextField isRequired name="supplierCompany" type="text">
                    <Label>Supplier Company</Label>
                    <Input placeholder="eg.XYZ" />
                    <FieldError />
                  </TextField>
                  <TextField isRequired name="supplierName" type="text">
                    <Label>Supplier Name</Label>
                    <Input placeholder="eg.John Doe" />
                    <FieldError />
                  </TextField>
                  <TextField isRequired name="supplierContact" type="text">
                    <Label>Supplier Contact</Label>
                    <Input placeholder="eg.+1-555-1234" />
                    <FieldError />
                  </TextField>
                  <TextField isRequired name="supplierPrice" type="number">
                    <Label>Supplier Price</Label>
                    <Input placeholder="eg. $45" />
                    <FieldError />
                  </TextField>

                  <div className="flex gap-2">
                    <Button type="submit">Submit</Button>
                    <Button type="reset" variant="secondary">
                      Reset
                    </Button>
                  </div>
                </Form>
              </Modal.Body>
            </Modal.Dialog>
          </Modal.Container>
        </Modal.Backdrop>
      </Modal>
    </div>
  );
};

export default SupplierModal;
