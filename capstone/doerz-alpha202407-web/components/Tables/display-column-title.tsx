"use client";
import React from "react";
import { Badge } from "../ui/badge";
import {
  AiOutlineShareAlt,
  AiOutlineHeart,
  AiOutlineFileDone,
  AiOutlineFileText,
  AiOutlineCheckSquare,
} from "react-icons/ai";
import { useRouter } from "next/navigation";

type ColumnCellTitleProps = {
  row: any;
  label: any;
};

const DisplayColumnTitle = ({ row, label }: ColumnCellTitleProps) => {
  const [expanded, setExpanded] = React.useState(false);
  const router = useRouter();

  const handleCellTitleClick = () => {
    setExpanded(!expanded);
    console.log(row.getAllCells());
  };

  const handleActionButtonClick =
    (value: string) =>
    (event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
      event.stopPropagation();
      if (value === "validate") {
        router.push(`/doerz/validate/${row.getValue("taskIdName")}`);
      } else if (value === "detail") {
        router.push(`/doerz/detail/${row.getValue("taskIdName")}`);
      } else {
        alert(value);
      }
    };

  // console.log(`${JSON.stringify(row.original.tags)}`);

  return (
    <div
      className="flex cursor-pointer flex-col p-4"
      onClick={handleCellTitleClick}
    >
      {" "}
      <div className="flex flex-col ">
        <div
          className={`flex max-w-[400px] truncate pb-1 font-medium ${expanded && "text-lg"}`}
        >
          {row.original["title"]}
        </div>

        <div className="flex flex-row">
        {label && (
          <div className="">
            <div className="text-xs font-light text-zinc-800 border border-zinc-200 bg-blue-50 px-1 mr-1">{label.label}</div>
          </div>
        )}
          {row.original.tags && row.original.tags.map((tag: string,i:number) => {
            return <div className="text-xs text-zinc-500 border px-1 mr-1" key={tag}>{tag.toUpperCase()}{i < row.original.tags.length-1 && ` `}</div>
          })}
        </div>
      </div>
      {expanded && (
        <div className="mt-4 max-w-[450px]">
          {/* {row.getValue("description")} */}
          {/* <p className="text-md font-bold">{row.getValue("title")}</p> */}
          <p className="font-bold"> {row.original["brand"]}</p>
          <button
            className="text-left font-light"
            onClick={handleActionButtonClick("detail")}
          >
            {row.original["description"]}
          </button>
          <div className="mt-4 flex flex-row justify-start gap-2">
            <button
              className="flex flex-row items-center rounded-xl border border-zinc-200 px-4 py-2"
              onClick={handleActionButtonClick("detail")}
            >
              <AiOutlineFileText className="mr-1" />
              <div className="text-sm">Detail/Images</div>
            </button>

            <button
              className="flex flex-row items-center rounded-xl border border-zinc-200 px-4 py-2"
              onClick={handleActionButtonClick("validate")}
            >
              <AiOutlineCheckSquare className="mr-1" />
              <div className="text-sm">Validate</div>
            </button>

            <button
              className="flex flex-row items-center rounded-xl border border-zinc-200 px-4 py-2"
              onClick={handleActionButtonClick("Favorite")}
            >
              <AiOutlineHeart className="mr-1" />
              <div className="text-sm">Favorite</div>
            </button>

            <button
              className="flex flex-row items-center rounded-xl border border-zinc-200 px-4 py-2"
              onClick={handleActionButtonClick("Share")}
            >
              <AiOutlineShareAlt className="mr-1" />
              <div className="text-sm">Share</div>
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default DisplayColumnTitle;
