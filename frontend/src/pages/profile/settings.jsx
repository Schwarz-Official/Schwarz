import React from "react";

// import { Sidebar } from "react-pro-sidebar";
// import { useNavigate } from "react-router-dom";

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

import { CloseSVG } from "./../../assets/svg/close";

const userTwoOptionsList = [
  { label: "Option1", value: "option1" },
  { label: "Option2", value: "option2" },
  { label: "Option3", value: "option3" },
];


export default function  SettingsPage ()  {
//   const navigate = useNavigate();

  const [searchinputvalue, setSearchinputvalue] = React.useState("");

  return (

<div className="">
      
<div className="bg-white-A700 flex sm:flex-col md:flex-col flex-row font-outfit sm:gap-5 md:gap-5 items-start mx-auto pb-[34px] w-full">
       
       <div className="flex flex-1 flex-col gap-[34px] items-center justify-start md:px-5 w-full">
         <disv className="bg-white-A700 flex md:flex-col flex-row md:gap-10 items-center justify-between outline outline-gray-100 p-[34px] sm:px-5 w-full">
         <InputField
             name="SearchInput"
             placeholder="Search items, collections, and users"
             value={searchinputvalue}
             onChange={(e) => setSearchinputvalue(e)}
             className="!placeholder:text-gray-500 !text-gray-500 p-0 text-left text-sm tracking-[0.14px] w-full"
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
           <div className="flex flex-row font-urbanist gap-[30px] items-center justify-center md:mt-0 my-0.5">
             <Button
               className="cursor-pointer flex items-center justify-center min-w-[137px]"
               leftIcon={
                 <Img
                   className="h-6 ml-4 mr-2.5 my-3.5"
                   src="images/img_sort.svg"
                   alt="sort"
                 />
               }
               shape="round"
               color="gray_100"
               size="xl"
               variant="outline"
             >
               <div className="font-medium text-base text-left tracking-[0.16px]">
                 3,421 ETH
               </div>
             </Button>
             <Button
               className="flex h-[52px] items-center justify-center rounded-[50%] w-[52px]"
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
         </disv>
         <div className="flex flex-col font-urbanist gap-[30px] items-center justify-start w-[95%] md:w-full">
           <div className="flex md:flex-col flex-row md:gap-10 items-center justify-between w-full">
             <div className="flex flex-col gap-2.5 items-start justify-start">
               <Text
                 className="text-2xl md:text-[22px] text-black-900 sm:text-xl"
                 size="txtUrbanistSemiBold24"
               >
                 General Settings
               </Text>
               <Text
                 className="text-gray-500 text-sm tracking-[0.14px]"
                 size="txtUrbanistMedium14Gray500"
               >
                 Update your photo and personal details here.
               </Text>
             </div>
             <div className="flex md:flex-1 sm:flex-col flex-row gap-[18px] items-center justify-between w-[43%] md:w-full">
               <Text
                 className="text-black-900 text-sm tracking-[0.14px]"
                 size="txtUrbanistMedium14Black900"
               >
                 Every changes automaticly saved
               </Text>
               <div className="flex flex-row gap-3 items-center justify-between w-1/2 sm:w-full">
                 <Button
                   className="cursor-pointer font-medium min-w-[106px] rounded-lg text-center text-sm tracking-[0.14px]"
                   shape="round"
                   color="gray_900"
                   size="lg"
                   variant="fill"
                 >
                   Preview
                 </Button>
                 <Button
                   className="cursor-pointer font-medium min-w-[106px] rounded-lg text-center text-sm tracking-[0.14px]"
                   shape="round"
                   color="gray_100"
                   size="lg"
                   variant="fill"
                 >
                   Cancel
                 </Button>
               </div>
             </div>
           </div>
           <div className="flex md:flex-col flex-row gap-[34px] items-start justify-between w-full">
             <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[66%] md:w-full">
               <div className="bg-white-A700 flex flex-col items-start justify-start outline outline-[0.75px] outline-gray-100 py-6 rounded-[15px] shadow-bs1 w-full">
                 <Text
                   className="ml-6 md:ml-[0] text-black-900 text-lg tracking-[0.18px]"
                   size="txtUrbanistMedium18Black900"
                 >
                   Personal Information
                 </Text>
                 <Line className="bg-gray-100 h-[1.5px] mt-6 w-full" />
                 <div className="flex flex-col items-center justify-start ml-6 md:ml-[0] mt-8 pt-0.5 w-[94%] md:w-full">
                   <div className="flex flex-col gap-6 items-center justify-start w-full">
                     <div className="flex flex-col items-center justify-start w-full">
                       <div className="flex md:flex-col flex-row gap-6 items-center justify-between w-full">
                         <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[49%] md:w-full">
                           <Text
                             className="text-base text-black-900 tracking-[0.16px]"
                             size="txtUrbanistMedium16"
                           >
                             <span className="text-black-900 font-urbanist text-left font-medium">
                               First Name
                             </span>
                             <span className="text-red-600 font-urbanist text-left font-medium">
                               *
                             </span>
                           </Text>
                           <InputField
                             name="SearchInput One"
                             placeholder="Kevin"
                             className="p-0 placeholder:text-black-900 text-left text-sm tracking-[0.14px] w-full"
                             wrapClassName="flex rounded-lg w-full"
                             prefix={
                               <Img
                                 className="mt-3.5 mb-[13px] h-6 ml-4 mr-3"
                                 src="images/img_user_2.svg"
                                 alt="user"
                               />
                             }
                             color="gray_400"
                             size="md"
                             variant="outline"
                           />
                         </div>
                         <div className="flex md:flex-1 flex-col gap-3 items-start justify-start w-[49%] md:w-full">
                           <Text
                             className="text-base text-black-900 tracking-[0.16px]"
                             size="txtUrbanistMedium16"
                           >
                             <span className="text-black-900 font-urbanist text-left font-medium">
                               Last Name
                             </span>
                             <span className="text-red-600 font-urbanist text-left font-medium">
                               *
                             </span>
                           </Text>
                           <InputField
                             name="SearchInput Two"
                             placeholder="Cranel"
                             className="p-0 placeholder:text-black-900 text-left text-sm tracking-[0.14px] w-full"
                             wrapClassName="rounded-lg w-full"
                             color="gray_400"
                             size="md"
                             variant="outline"
                           />
                         </div>
                       </div>
                       <div className="flex flex-col gap-3 items-start justify-start mt-6 w-full">
                         <Text
                           className="text-base text-black-900 tracking-[0.16px]"
                           size="txtUrbanistMedium16"
                         >
                           <span className="text-black-900 font-urbanist text-left font-medium">
                             Email Address
                           </span>
                           <span className="text-red-600 font-urbanist text-left font-medium">
                             *
                           </span>
                         </Text>
                         <InputField
                           name="email"
                           placeholder="hello.kevincranel@workmail.com"
                           className="p-0 placeholder:text-black-900 text-left text-sm tracking-[0.14px] w-full"
                           wrapClassName="flex rounded-lg w-full"
                           type="email"
                           prefix={
                             <Img
                               className="mt-3.5 mb-[13px] h-6 ml-4 mr-3"
                               src="images/img_checkmark_1.svg"
                               alt="checkmark"
                             />
                           }
                           suffix={
                             <Img
                               className="h-6 ml-[35px] mr-3.5 my-3.5"
                               src="images/img_checkmark_2.svg"
                               alt="checkmark"
                             />
                           }
                           color="gray_400"
                           size="md"
                           variant="outline"
                         />
                       </div>
                       <div className="flex flex-col gap-3 items-start justify-start mt-[26px] w-full">
                         <Text
                           className="text-base text-black-900 tracking-[0.16px]"
                           size="txtUrbanistMedium16"
                         >
                           Username
                         </Text>
                         <InputField
                           name="searchinput Three"
                           placeholder=""
                           className="p-0 w-full"
                           wrapClassName="flex rounded-lg w-full"
                           prefix={
                             <Img
                               className="mt-3.5 mb-[13px] h-6 ml-4 mr-[35px]"
                               src="images/img_link.svg"
                               alt="link"
                             />
                           }
                           suffix={
                             <Img
                               className="h-6 ml-[35px] mr-3.5 my-3.5"
                               src="images/img_checkmark_2.svg"
                               alt="checkmark"
                             />
                           }
                           color="gray_400"
                           variant="outline"
                        />
                       <div className="flex flex-col gap-3 items-start justify-start mt-6 w-full">
                         <Text
                           className="text-base text-black-900 tracking-[0.16px]"
                           size="txtUrbanistMedium16"
                         >
                           Biography
                         </Text>
                         <TextArea
                           className="bg-transparent border border-gray-400 border-solid pb-[35px] pl-4 sm:pr-5 pr-[35px] pt-[23px] rounded-lg placeholder:text-black-900 text-black-900 text-left text-sm tracking-[0.14px] w-full"
                           name="searchinput Four"
                           placeholder="Dedicated to create amazing for art exhibition information please check link below:"
                         ></TextArea>
                       </div>
                     </div>
                     <div className="flex flex-col gap-3 items-start justify-start w-full">
                       <Text
                         className="text-base text-black-900 tracking-[0.16px]"
                         size="txtUrbanistMedium16"
                       >
                         Website
                       </Text>
                       <InputField
                         name="weburl"
                         placeholder="weloveart.com/kevincranel"
                         className="p-0 placeholder:text-black-900 text-left text-sm tracking-[0.14px] w-full"
                         wrapClassName="flex rounded-lg w-full"
                         prefix={
                           <Img
                             className="mt-3.5 mb-[13px] h-6 ml-4 mr-3"
                             src="images/img_globe.svg"
                             alt="globe"
                           />
                         }
                         color="gray_400"
                         size="md"
                         variant="outline"
                       />
                   </div>
                 </div>
               </div>
               <div className="bg-white-A700 flex flex-col gap-[33px] items-center justify-start outline outline-[0.75px] outline-gray-100 py-6 rounded-[15px] shadow-bs1 w-full">
                 <div className="flex flex-col gap-6 justify-start w-full">
                   <Text
                     className="ml-6 md:ml-[0] text-black-900 text-lg tracking-[0.18px]"
                     size="txtUrbanistMedium18Black900"
                   >
                     Notification Settings
                   </Text>
                   <Line className="bg-gray-100 h-[1.5px] w-full" />
                 </div>
                 <List
                   className="flex flex-col items-center pb-[100px] w-[94%]"
                   orientation="vertical"
                 >
                   <div className="flex flex-row sm:gap-10 items-center justify-between pb-1 w-full">
                     <div className="flex flex-col gap-3 items-start justify-start">
                       <Text
                         className="text-base text-black-900 tracking-[0.16px]"
                         size="txtUrbanistMedium16"
                       >
                         Item Sold
                       </Text>
                       <Text
                         className="text-gray-500 text-sm tracking-[0.14px]"
                         size="txtUrbanistRegular14Gray500"
                       >
                         When someone purchased one of your items
                       </Text>
                     </div>
                     <Img
                       className="h-6"
                       src="images/img_camera.svg"
                       alt="camera"
                     />
                   </div>
                   <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                   <div className="flex flex-row sm:gap-10 items-center justify-between pb-1 w-full">
                     <div className="flex flex-col gap-3 items-start justify-start">
                       <Text
                         className="text-base text-black-900 tracking-[0.16px]"
                         size="txtUrbanistMedium16"
                       >
                         Successful Purchase
                       </Text>
                       <Text
                         className="text-gray-500 text-sm tracking-[0.14px]"
                         size="txtUrbanistRegular14Gray500"
                       >
                         When you successfully buy an item
                       </Text>
                     </div>
                     <Img
                       className="h-6"
                       src="images/img_camera.svg"
                       alt="camera One"
                     />
                   </div>
                   <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                   <div className="flex flex-row sm:gap-10 items-center justify-between pb-1 w-full">
                     <div className="flex flex-col gap-3 items-start justify-start">
                       <Text
                         className="text-base text-black-900 tracking-[0.16px]"
                         size="txtUrbanistMedium16"
                       >
                         Auction Expirates
                       </Text>
                       <Text
                         className="text-gray-500 text-sm tracking-[0.14px]"
                         size="txtUrbanistRegular14Gray500"
                       >
                         When a timed auction you created ends
                       </Text>
                     </div>
                     <Img
                       className="h-6"
                       src="images/img_camera_24X40.svg"
                       alt="camera Two"
                     />
                   </div>
                   <Line className="self-center h-[1.5px] bg-gray-100 w-full" />
                   <div className="flex sm:flex-col flex-row sm:gap-10 items-center justify-between pb-1 w-full">
                     <div className="flex flex-col gap-3 items-start justify-start">
                       <Text
                         className="text-base text-black-900 tracking-[0.16px]"
                         size="txtUrbanistMedium16"
                       >
                         Owned Item Updates
                       </Text>
                       <Text
                         className="text-gray-500 text-sm tracking-[0.14px]"
                         size="txtUrbanistRegular14Gray500"
                       >
                         When a significant update occurs for one of the items
                         you have purchased on Enefthy
                       </Text>
                     </div>
                     <Img
                       className="h-6"
                       src="images/img_camera_24X40.svg"
                       alt="camera Three"
                     />
                   </div>
                 </List>
               </div>
             </div>
             <div className="flex md:flex-1 flex-col gap-[30px] items-center justify-start w-[31%] md:w-full">
               <div className="bg-white-A700 flex flex-col gap-[33px] items-center justify-start outline outline-[0.75px] outline-gray-100 py-6 rounded-[15px] shadow-bs1 w-full">
                 <div className="flex flex-col gap-6 justify-start w-full">
                   <Text
                     className="ml-6 md:ml-[0] text-black-900 text-lg tracking-[0.18px]"
                     size="txtUrbanistMedium18Black900"
                   >
                     Your Photo
                   </Text>
                   <Line className="bg-gray-100 h-[1.5px] w-full" />
                 </div>
                 <div className="flex flex-col gap-6 items-start justify-start w-[86%] md:w-full">
                   <div className="flex flex-row gap-4 items-center justify-start w-[68%] md:w-full">
                     <Img
                       className="h-16 md:h-auto rounded-[50%] w-16"
                       src="images/img_ellipse1015.png"
                       alt="Ellipse1023"
                     />
                     <div className="flex flex-col gap-2.5 items-start justify-start w-[58%]">
                       <Text
                         className="text-base text-black-900 tracking-[0.16px]"
                         size="txtUrbanistMedium16"
                       >
                         Edit your photo
                       </Text>
                       <div className="flex flex-row font-outfit gap-2.5 items-center justify-start w-[92%] md:w-full">
                         <Text
                           className="text-gray-500 text-sm tracking-[0.14px]"
                           size="txtOutfitRegular14"
                         >
                           Delete
                         </Text>
                         <Text
                           className="text-red-600 text-sm tracking-[0.14px]"
                           size="txtOutfitRegular14Red600"
                         >
                           Update
                         </Text>
                       </div>
                     </div>
                   </div>
                   <div className="bg-white-A700 flex flex-col gap-3.5 items-center justify-start outline-[0.75px] outline-dashed outline-gray-901 p-3.5 rounded-[15px] w-full">
                     <Button
                       className="flex h-12 items-center justify-center rounded-[50%] w-12"
                       shape="circle"
                       color="gray_50"
                       size="lg"
                       variant="fill"
                     >
                       <Img
                         className="h-[22px]"
                         src="images/img_cloud.svg"
                         alt="cloud"
                       />
                     </Button>
                     <div className="flex flex-col gap-2.5 items-center justify-start">
                       <Text
                         className="text-gray-900 text-sm tracking-[0.14px]"
                         size="txtUrbanistMedium14Gray900"
                       >
                         Click to upload or drag and drop
                       </Text>
                       <Text
                         className="leading-[130.00%] text-center text-gray-500 text-xs tracking-[0.12px]"
                         size="txtUrbanistMedium12Gray500"
                       >
                         <>
                           PNG, JPG or Gif
                           <br />
                           Max 20Mb
                         </>
                       </Text>
                     </div>
                   </div>
                 </div>
               </div>
               <div className="bg-white-A700 flex flex-col gap-8 items-center justify-start outline outline-[0.75px] outline-gray-100 py-6 rounded-[15px] shadow-bs1 w-full">
                 <div className="flex flex-col gap-6 justify-start w-full">
                   <Text
                     className="ml-6 md:ml-[0] text-black-900 text-lg tracking-[0.18px]"
                     size="txtUrbanistMedium18Black900"
                   >
                     Social Linked
                   </Text>
                   <Line className="bg-gray-100 h-[1.5px] w-full" />
                 </div>
                 <div className="flex flex-col gap-[11px] items-start justify-start w-[86%] md:w-full">
                   <div className="flex flex-row items-center justify-between w-full">
                     <Img
                       className="h-7"
                       src="images/img_signal.svg"
                       alt="signal"
                     />
                     <Button
                       className="cursor-pointer font-medium min-w-[96px] rounded-lg text-center text-sm tracking-[0.14px]"
                       shape="round"
                       color="green_600"
                       size="xs"
                       variant="fill"
                     >
                       Connected
                     </Button>
                   </div>
                   <div className="flex flex-col gap-2.5 items-start justify-start">
                     <Text
                       className="text-base text-black-900 tracking-[0.16px]"
                       size="txtUrbanistMedium16"
                     >
                       Edit your photo
                     </Text>
                     <Text
                       className="leading-[180.00%] text-gray-500 text-sm tracking-[0.14px]"
                       size="txtUrbanistRegular14Gray500"
                     >
                       <>
                         Use Google to sign in to your account.
                         <br />
                         Click here to learn more.
                       </>
                     </Text>
                   </div>
                 </div>
               </div>
             </div>
           </div>
         </div>
       </div>
     </div>
</div>
</div>
</div>
  );
};




