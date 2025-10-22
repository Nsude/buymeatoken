"use client";

import { useState } from "react";
import CardButton from "../buttons/CardButton";
import CustomInputElement from "../global/CustomInput";
import PrimaryButton from "../buttons/PrimaryButton";
import LinkIcon from "../../public/icons/LinkIcon";
import MaximiseIcon from "../../public/icons/MaximiseIcon";
import CopyIcon from "../../public/icons/CopyIcon";
import DotIcon from "../../public/icons/DotIcon";
import NoBgButton from "../buttons/NoBgButton";
import WithdrawIcon from "../../public/icons/WithdrawIcon";

type Tabs = "Social Link" | "Widget";
type WidgetTab = "Code" | "Preview";

export default function CreateLinkCard() {
  const [selectedTab, setSelectedTab] = useState<Tabs>("Social Link");
  const [widgetTab, setWidgetTab] = useState<WidgetTab>("Code");
  const [username, setUsername] = useState('');

  return (
    <div className="relative w-full h-full bg-card-bg-gradient rounded-[6px] p-[0.9375rem]
    flex flex-col justify-between">
      {/* controls */}
      <div className="flex items-center gap-x-[3px]">
        <CardButton
          label="Social Link"
          handleClick={() => setSelectedTab("Social Link")}
          preselect={true}
        />
        <CardButton
          label="Widget"
          handleClick={() => setSelectedTab("Widget")}
        />
      </div>

      {/* Social Link */}
      {
        selectedTab === "Social Link" &&
        <div className="flex gap-x-[3px]">
          <span className="flex-2 relative">
            <span className="absolute -top-[60%] text-label-gray truncate">
              This username will be shown to your donors.
            </span>
            <CustomInputElement
              placeHolder="your socials username"
              handleChange={(e) => setUsername(e.currentTarget.value)}
              value={username}
            />
          </span>

          <PrimaryButton
            label="Create Link"
            Icon={<LinkIcon />}
            handleClick={() => { }}
          />
        </div>
      }

      {/* Widget */}
      {
        selectedTab === 'Widget' &&
        <div className="relative w-full h-[76%] bg-black rounded-[8px]">
          {/* code widget */}
          {
            widgetTab === "Code" &&
            <div>
              <span className="absolute right-[0.625rem] top-[0.625rem] flex gap-x-[3px]">
                <button className="widget-icon" title="maximise">
                  <MaximiseIcon />
                </button>

                <button className="widget-icon" title="copy">
                  <CopyIcon />
                </button>
              </span>
            </div>
          }

          {/* preview */}
          {
            widgetTab === "Preview" &&
            <span className="w-full h-full flex justify-center items-center">
              <PrimaryButton 
                label="Buy Me a Token"
                Icon={<WithdrawIcon />}
                fullyRounded={true}
                handleClick={() => {}}
              />
            </span>
          }
        </div>
      }

      {
        selectedTab === "Widget" &&
        <div className="absolute right-[0.9375rem] top-[0.9375rem] flex gap-x-[0.625rem]
        items-center ">
          <NoBgButton
            label="Code"
            preselect={true}
            handleClick={() => setWidgetTab("Code")}
          />
          <DotIcon />
          <NoBgButton
            label="Preview"
            handleClick={() => setWidgetTab("Preview")}
          />
        </div>
      }
    </div>
  )
}