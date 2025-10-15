"use client";

import { useState } from "react";
import CardButton from "../buttons/CardButton";
import CustomInputElement from "./CustomInput";
import PrimaryButton from "../buttons/PrimaryButton";
import LinkIcon from "../../public/icons/LinkIcon";

type Tabs = "Social Link" | "Widget";

export default function CreateLinkCard (){
  const [selectedTab, setSelectedTab] = useState<Tabs>("Social Link");
  const [username, setUsername] = useState('');

  return (
    <div className="w-full h-[17rem] bg-card-bg-gradient rounded-[6px] p-[0.9375rem]
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
          <span className="w-[55%]">
            <CustomInputElement 
              placeHolder="your socials username"
              handleChange={(e) => setUsername(e.currentTarget.value)}
              value={username}
            />
          </span>

          <PrimaryButton 
            label="Create Link"
            Icon={<LinkIcon />}
            handleClick={() => {}}
          />
        </div>
      }

      {/* Widget */}
    </div>
  )
}