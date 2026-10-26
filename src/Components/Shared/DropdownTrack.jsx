"use client";
import { Button, Dropdown, Label } from "@heroui/react";
import React from "react";
import { FaChevronDown, FaTruckFast } from "react-icons/fa6";
import NavLink from "./NavLink";

const DropdownTrack = () => {
  return (
    <div>
      <Dropdown>
        <Button
          aria-label="Menu"
          variant="flat"
          className="flex items-center gap-2 text-gray-700"
        >
          <div className="flex items-center gap-1">
            <FaTruckFast />
            Track
          </div>
          <FaChevronDown />
        </Button>
        <Dropdown.Popover>
          <Dropdown.Menu onAction={(key) => console.log(`Selected: ${key}`)}>
            <Dropdown.Item id="new-file" textValue="New file">
              <NavLink href="/buyer/track-orders">Requests</NavLink>
            </Dropdown.Item>
            <Dropdown.Item id="copy-link" textValue="Copy link">
              <NavLink href="/buyer/available-orders">Orders</NavLink>
            </Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown.Popover>
      </Dropdown>
    </div>
  );
};

export default DropdownTrack;
