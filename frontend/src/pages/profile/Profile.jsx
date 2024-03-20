import React from "react";

import {
  Button,
  Img,
  Input,
  Line,
  List,
  SelectBox,
  Text,
  TextArea,
} from "../../components";
import InputField from "../../components/InputField";
import { IoSearch } from "react-icons/io5";
import { CloseSVG } from "./../../assets/svg/close";

const userTwoOptionsList = [
  { label: "User", value: "User" },
  { label: "Artist", value: "Artist" },
  { label: "Admin", value: "Admin" },
];

export default function Profile() {
  const [searchinputvalue, setSearchinputvalue] = React.useState("");

  return (
    <div>
      <div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto pb-[34px] w-full">
        <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:px-5 w-full">
          <div className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between outline outline-gray-100 p-[34px] sm:px-5 w-full">
           <div className="flex gap-1 items-center justify-center">
            <InputField
              name="SearchInput"
              placeholder="Search items, collections..."
              value={searchinputvalue}
              onChange={(e) => setSearchinputvalue(e)}
              className="!placeholder:text-gray-500 !text-gray-500 px-10 text-left text-sm tracking-[0.14px] w-[120%] "
              wrapClassName="border border-gray-300 border-solid flex md:flex-1 md:mt-0 my-0.5 md:w-full"
              prefix={
                <Img
                  className="cursor-pointer h-6 my-3.5 mx-4"
                  src="images/img_search.svg"
                  alt="search"
                />
              }
              shape="round"
              size="md"
            />
            <IoSearch className="w-6 h-6 translate-y-2 text-gray-700 cursor-pointer hover:scale-110 duration-100"/>
            </div>

            <div className="flex flex-row font-urbanist gap-[30px] items-center justify-center md:mt-0 my-0.5">
            
              <Button
                className="flex h-40 w-40 items-center justify-center rounded-full"
                shape="circle"
                color="gray_100"
                size="lg"
                variant="outline"
              >
                <Img className="h-6" src="images/img_lock.svg" alt="lock" />
              </Button>
              <SelectBox
                className="w-[27%] sm:w-full"
                indicator={
                  <Img
                    className="h-6 mr-[0] w-6"
                    src="images/img_arrowdown.svg"
                    alt="arrow_down"
                  />
                }
                isMulti={false}
                name="user Two"
                isSearchable={false}
                options={userTwoOptionsList}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
