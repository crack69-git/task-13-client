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
import React from "react";
import {
  FaArrowRight,
  FaLocationDot,
  FaSquareArrowUpRight,
} from "react-icons/fa6";

const BuyerForm = () => {
  const router = useRouter();
  const { data: session } = authClient.useSession();

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
    const res = await postRequirements(requiremntsData);
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
    <div className="mx-auto flex flex-col items-center justify-center w-full max-w-md min-h-[calc(100vh-30vh)] gap-4 py-10">
      <Card
        className="w-2xl bg-white border shadow-md py-10 px-10"
        variant="secondary"
      >
        <Card.Header>
          <Card.Title className="text-2xl flex items-center gap-2">
            <FaSquareArrowUpRight />
            Create Sourcing Request
          </Card.Title>
          <p className="text-sm text-gray-500 mb-5">
            Submit your requirement details to receive fast verified supplier
            quotes.
          </p>
          <Form className="grid grid-cols-3 w-full gap-4" onSubmit={onSubmit}>
            <TextField
              isRequired
              name="requirementName"
              type="text"
              className="col-span-3"
            >
              <Label>Requirement/Product Name</Label>
              <Input placeholder="product name" />
              <FieldError />
            </TextField>
            <TextField
              isRequired
              name="targetQuantity"
              type="number"
              className="col-span-2"
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
              className="w-full max-w-[280px]"
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
              className="w-full col-span-2"
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
            <div className="flex flex-col gap-4 col-span-3 ">
              <TextField isRequired>
                <Label>Quality Tier</Label>
                <RadioGroup
                  defaultValue="pro"
                  name="qualityTier"
                  orientation="horizontal"
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
            <DatePicker
              className="w-full col-span-1"
              isRequired
              name="targetDate"
            >
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
            <TextField name="attachmentLink" type="text" className="col-span-2">
              <Label>Attachment Link</Label>
              <Input placeholder="Google Drive File link" />
              <FieldError />
            </TextField>
            <TextField
              className="flex flex-col gap-2 col-span-3"
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
            <div className="flex gap-2">
              <Button type="submit" className="rounded-lg bg-blue-900 px-10">
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
