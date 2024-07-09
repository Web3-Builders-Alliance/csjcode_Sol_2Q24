"use client"

import { ColumnDef } from "@tanstack/react-table"
import Image from "next/image";
import { taskTypes, rewardSizes, statuses } from "./data/data"
import { Task, MakerzTask } from "./data/schema"
import { DataTableColumnHeader } from "./data-table-column-header"
import { DataTableRowActions } from "./data-table-row-actions"
import { Checkbox } from "../ui/checkbox"
import { RxHeart, RxHeartFilled } from "react-icons/rx";
import { MdOutlineImage } from "react-icons/md";
import DisplayColumnTitle from "./display-column-title"




export const columns: ColumnDef<Task>[] = [
  {
    id: "select",
    accessorKey: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: "favorite",
    accessorKey: "favorite",
    header: ({ table }) => (
      <RxHeartFilled className="text-zinc-500" />
    ),
    cell: ({ row }) => (
      <RxHeart className="text-zinc-500 cursor-pointer"/>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: "Image",
    accessorKey: "imageThumbnail",
    header: ({ table }) => (
      <MdOutlineImage className="text-zinc-500" />
    ),
    cell: ({ row }) => (
      <div className=""><Image src="/images/ph/75x50.png" alt="project image" width={75} height={50}/></div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "taskIdName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("taskIdName")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const taskType = taskTypes.find((taskType) => taskType.value === row.original.label)

      return (
        <DisplayColumnTitle row={row} label={taskType} />
      )
    },
  },
  {
    accessorKey: "status",
    // header: ({ table }) => (
    //   <div className="flex flex-row justify-start items-center border-zinc-500"><AiOutlineCheckSquare className="text-lg text-zinc-900 dark:text-zinc-100 mr-1" /> <span>Status</span></div>
    // ),

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "rewardSize", //AiOutlineCrown
    // header: ({ column, table }) => (
    //   <div className="flex flex-row justify-start items-center">
    //     <AiOutlineCrown className="text-xl text-zinc-900 dark:text-zinc-100 mr-1" />
    //   <span>Reward</span></div>
    // ),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reward Size" />
    ),
    cell: ({ row }) => {
      const rewardSize = rewardSizes.find(
        (rewardSize) => rewardSize.value === row.getValue("rewardSize")
      )

      if (!rewardSize) {
        return null
      }

      return (
        <div className="flex items-center">
          {rewardSize.icon && (
            <rewardSize.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{rewardSize.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]


export const columnsMakerz: ColumnDef<MakerzTask>[] = [
  {
    id: "select",
    accessorKey: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
        className="translate-y-[2px]"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
        className="translate-y-[2px]"
      />
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: "favorite",
    accessorKey: "favorite",
    header: ({ table }) => (
      <RxHeartFilled className="text-zinc-500" />
    ),
    cell: ({ row }) => (
      <RxHeart className="text-zinc-500 cursor-pointer"/>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    id: "Image",
    accessorKey: "imageThumbnail",
    header: ({ table }) => (
      <MdOutlineImage className="text-zinc-500" />
    ),
    cell: ({ row }) => (
      <div className=""><Image src="/images/ph/75x50.png" alt="project image" width={75} height={50}/></div>
    ),
    enableSorting: false,
    enableHiding: true,
  },
  {
    accessorKey: "taskIdName",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Task Id" />
    ),
    cell: ({ row }) => <div className="w-[80px]">{row.getValue("taskIdName")}</div>,
    enableSorting: true,
    enableHiding: true,
  },
  {
    accessorKey: "title",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Title" />
    ),
    cell: ({ row }) => {
      const taskType = taskTypes.find((taskType) => taskType.value === row.original.label)

      return (
        <DisplayColumnTitle row={row} label={taskType} />
      )
    },
  },
  {
    accessorKey: "ownerUser",
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Owner/User" />
    ),
    cell: ({ row }) => {


      return (
        <div className="">{row.original.ownerUser}</div>
      )
    },
  },
  {
    accessorKey: "status",
    // header: ({ table }) => (
    //   <div className="flex flex-row justify-start items-center border-zinc-500"><AiOutlineCheckSquare className="text-lg text-zinc-900 dark:text-zinc-100 mr-1" /> <span>Status</span></div>
    // ),

    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Status" />
    ),
    cell: ({ row }) => {
      const status = statuses.find(
        (status) => status.value === row.getValue("status")
      )

      if (!status) {
        return null
      }

      return (
        <div className="flex w-[100px] items-center">
          {status.icon && (
            <status.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{status.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    accessorKey: "rewardSize", //AiOutlineCrown
    // header: ({ column, table }) => (
    //   <div className="flex flex-row justify-start items-center">
    //     <AiOutlineCrown className="text-xl text-zinc-900 dark:text-zinc-100 mr-1" />
    //   <span>Reward</span></div>
    // ),
    header: ({ column }) => (
      <DataTableColumnHeader column={column} title="Reward Size" />
    ),
    cell: ({ row }) => {
      const rewardSize = rewardSizes.find(
        (rewardSize) => rewardSize.value === row.getValue("rewardSize")
      )

      if (!rewardSize) {
        return null
      }

      return (
        <div className="flex items-center">
          {rewardSize.icon && (
            <rewardSize.icon className="mr-2 h-4 w-4 text-muted-foreground" />
          )}
          <span>{rewardSize.label}</span>
        </div>
      )
    },
    filterFn: (row, id, value) => {
      return value.includes(row.getValue(id))
    },
  },
  {
    id: "actions",
    cell: ({ row }) => <DataTableRowActions row={row} />,
  },
]