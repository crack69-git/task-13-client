"use client";
import { postRequirements } from "@/lib/actions/postData";
import { authClient } from "@/lib/auth-client";
import {
  Button,
  Card,
  Description,
  FieldError,
  Form,
  Input,
  Label,
  ListBox,
  TextField,
  Select,
  InputGroup,
  Radio,
  RadioGroup,
  Calendar,
  DateField,
  DatePicker,
  TextArea,
} from "@heroui/react";
import { useRouter } from "next/navigation";

import {
  FaArrowRight,
  FaLocationDot,
  FaSquareArrowUpRight,
} from "react-icons/fa6";

const BuyerForm = ({ token }) => {
  console.log("token:", token);
  const router = useRouter();
  const session = authClient.getSession();
  const onSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData.entries());

    const requiremntsData = {
      userId: session?.user?.id,
      requirementName: data.requirementName,
      targetQuantity: data.targetQuantity,
      unitOfMeasure: data.unitOfMeasure,
      price: data.price,
      deliveryAddress: data.DeliveryAddress,
      qualityTier: data.qualityTier,
      targetDate: data.targetDate,
      attachmentLink: data.attachmentLink,
      specifications: data.specifications,
      createdAt: new Date().toISOString(),
      status: "pending",
      delivaryStatus: ["searching"],
    };
    const res = await postRequirements(requiremntsData, token);
    if (res.acknowledged) {
      alert("Requirement submitted successfully!");
      router.push("/buyer/track-orders");
    } else {
      alert("Failed to submit requirement. Please try again.");
      return;
    }
  };
  const units = (
    <>
      <ListBox.Item id="MT" textValue="Metric Tons">
        Metric Tons
        <ListBox.ItemIndicator />
      </ListBox.Item>
      <ListBox.Item id="KG" textValue="Kilograms">
        Kilograms
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="G" textValue="Grams">
        Grams
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="LBS" textValue="Pounds">
        Pounds
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="OZ" textValue="Ounces">
        Ounces
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="L" textValue="Liters">
        Liters
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="ML" textValue="Milliliters">
        Milliliters
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="GAL" textValue="Gallons">
        Gallons
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="CBM" textValue="Cubic Meters">
        Cubic Meters
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="M" textValue="Meters">
        Meters
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="CM" textValue="Centimeters">
        Centimeters
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="FT" textValue="Feet">
        Feet
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="IN" textValue="Inches">
        Inches
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="PCS" textValue="Pieces">
        Pieces
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="BOX" textValue="Boxes">
        Boxes
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="CTN" textValue="Cartons">
        Cartons
        <ListBox.ItemIndicator />
      </ListBox.Item>

      <ListBox.Item id="SET" textValue="Sets">
        Sets
        <ListBox.ItemIndicator />
      </ListBox.Item>
    </>
  );
  return (
    <div className="mx-auto flex min-h-[70vh] w-full max-w-5xl flex-col items-center justify-center gap-4 px-3 py-6 sm:px-6 sm:py-10">
      <Card
        className="w-full border bg-white px-4 py-6 shadow-md sm:px-8 sm:py-10 lg:px-10"
        variant="secondary"
      >
        <Card.Header>
          <Card.Title className="flex items-center gap-2 text-xl sm:text-2xl">
            <FaSquareArrowUpRight />
            Create Sourcing Request
          </Card.Title>
          <p className="text-sm text-gray-500 mb-5">
            Submit your requirement details to receive fast verified supplier
            quotes.
          </p>
          <Form
            className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3"
            onSubmit={onSubmit}
          >
            <TextField
              isRequired
              name="requirementName"
              type="text"
              className="col-span-full"
            >
              <Label>Requirement/Product Name</Label>
              <Input placeholder="product name" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="targetQuantity"
              type="number"
              className="col-span-1"
            >
              <Label>Target Quantity</Label>
              <Input placeholder="product name" />
              <FieldError />
            </TextField>
            <Select
              className="w-full"
              isRequired
              placeholder="Select one"
              name="unitOfMeasure"
            >
              <Label>Unit of Measure</Label>
              <Select.Trigger>
                <Select.Value />
                <Select.Indicator />
              </Select.Trigger>
              <Select.Popover>
                <ListBox>{units}</ListBox>
              </Select.Popover>
            </Select>
            <TextField
              className="w-full"
              defaultValue="10"
              name="price"
              isRequired
            >
              <Label>Set a price</Label>
              <InputGroup>
                <InputGroup.Prefix>$</InputGroup.Prefix>
                <InputGroup.Input className="w-full max-w-full" type="number" />
                <InputGroup.Suffix>USD</InputGroup.Suffix>
              </InputGroup>
            </TextField>
            <TextField
              className="w-full col-span-full sm:col-span-2"
              defaultValue="Chittagong, Bangladesh"
              name="DeliveryAddress"
              isRequired
            >
              <Label>Delivery Address</Label>
              <InputGroup>
                <InputGroup.Prefix>
                  <FaLocationDot className="size-4 text-muted" />
                </InputGroup.Prefix>
                <InputGroup.Input className="w-full max-w-full" />
              </InputGroup>
            </TextField>
            <div className="col-span-full flex flex-col gap-4">
              <TextField isRequired>
                <Label>Quality Tier</Label>
                <RadioGroup
                  defaultValue="pro"
                  name="qualityTier"
                  orientation="horizontal"
                  className="flex-wrap"
                  isRequired
                >
                  <Radio
                    className="border p-2 rounded-2xl bg-green-50"
                    value="standard"
                  >
                    <Radio.Content>
                      <Radio.Control>
                        <Radio.Indicator className="border rounded-full" />
                      </Radio.Control>
                      Standard
                    </Radio.Content>
                    <Description>Commercial Grade</Description>
                  </Radio>
                  <Radio
                    className="border p-2 rounded-2xl bg-green-50"
                    value="premium"
                  >
                    <Radio.Content>
                      <Radio.Control>
                        <Radio.Indicator className="border rounded-full" />
                      </Radio.Control>
                      Premium Export
                    </Radio.Content>
                    <Description>Lab Batch Tested</Description>
                  </Radio>
                  <Radio
                    className="border p-2 rounded-2xl bg-green-50"
                    value="organic"
                  >
                    <Radio.Content>
                      <Radio.Control>
                        <Radio.Indicator className="border rounded-full" />
                      </Radio.Control>
                      Organic
                    </Radio.Content>
                    <Description>Non-GMO Certified</Description>
                  </Radio>
                </RadioGroup>
              </TextField>
            </div>
            <DatePicker className="w-full" isRequired name="targetDate">
              <Label>Target Date/Needed By</Label>
              <DateField.Group fullWidth>
                <DateField.Input>
                  {(segment) => <DateField.Segment segment={segment} />}
                </DateField.Input>
                <DateField.Suffix>
                  <DatePicker.Trigger>
                    <DatePicker.TriggerIndicator />
                  </DatePicker.Trigger>
                </DateField.Suffix>
              </DateField.Group>
              <DatePicker.Popover>
                <Calendar aria-label="Event date">
                  <Calendar.Header>
                    <Calendar.YearPickerTrigger>
                      <Calendar.YearPickerTriggerHeading />
                      <Calendar.YearPickerTriggerIndicator />
                    </Calendar.YearPickerTrigger>
                    <Calendar.NavButton slot="previous" />
                    <Calendar.NavButton slot="next" />
                  </Calendar.Header>
                  <Calendar.Grid>
                    <Calendar.GridHeader>
                      {(day) => (
                        <Calendar.HeaderCell>{day}</Calendar.HeaderCell>
                      )}
                    </Calendar.GridHeader>
                    <Calendar.GridBody>
                      {(date) => <Calendar.Cell date={date} />}
                    </Calendar.GridBody>
                  </Calendar.Grid>
                  <Calendar.YearPickerGrid>
                    <Calendar.YearPickerGridBody>
                      {({ year }) => <Calendar.YearPickerCell year={year} />}
                    </Calendar.YearPickerGridBody>
                  </Calendar.YearPickerGrid>
                </Calendar>
              </DatePicker.Popover>
            </DatePicker>
            <TextField
              name="attachmentLink"
              type="text"
              className="col-span-full sm:col-span-2"
            >
              <Label>Attachment Link</Label>
              <Input placeholder="Google Drive File link" />
              <FieldError />
            </TextField>
            <TextField
              className="col-span-full flex flex-col gap-2"
              name="specifications"
            >
              <Label htmlFor="textarea-rows-6">Specifications</Label>
              <TextArea
                aria-label="Specifications"
                id="textarea-rows-6"
                placeholder="Write out the full meeting notes..."
                rows={6}
                style={{ resize: "vertical" }}
              />
            </TextField>
            <div className="col-span-full flex gap-2">
              <Button
                type="submit"
                className="w-full rounded-lg bg-blue-900 px-6 sm:w-auto sm:px-10"
              >
                Submit
                <FaArrowRight />
              </Button>
            </div>
          </Form>
        </Card.Header>
      </Card>
    </div>
  );
};

export default BuyerForm;
