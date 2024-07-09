"use client"
import { Input } from "@/components/ui/input"
import { zodResolver } from "@hookform/resolvers/zod"
import React from "react"
import { useForm, SubmitHandler } from "react-hook-form"
import { taskSchemaMakerzForm } from "./schemaForms"


type Inputs = {
  taskIdName: string
}

const OWNER_USER = "csjcodetest";

export default function TestForm() {

  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(taskSchemaMakerzForm),
  });

  const onSubmit: SubmitHandler<Inputs> = (data) => console.log(data)

  const [taskIdName, setTaskIdName] = React.useState("");
  const [draft, setDraft] = React.useState(true);
  const [taskType, setTaskType] = React.useState("");
  const [title, setTitle] = React.useState("");
  const [description, setDescription] = React.useState("");
  const [ownerGroup, setOwnerGroup] = React.useState(OWNER_USER);
  const [ownerAdmin, setOwnerAdmin] = React.useState(OWNER_USER);
  const [rewardInDOERZ, setRewardInDOERZ] = React.useState("");
  const [image, setImage] = React.useState("");

  // console.log(watch("example")) // watch input value by passing the name of it

  const handleFormChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    const { name, value } = e.target;
    console.log(`Changing ${name} to ${value}`);
    // setValue(name, value);
    switch (name) {
      case "taskIdName":
        setTaskIdName(value);
        break;
      case "taskType":
        setTaskType(value);
        break;
      case "draft":
        setDraft(value === "true");
        break;
      case "title":
        setTitle(value);
        break;
      case "description":
        setDescription(value);
        break;
      case "ownerGroup":
        setOwnerGroup(value);
        break;
      case "ownerAdmin":
        setOwnerAdmin(value);
        break;
      case "rewardInDOERZ":
        setRewardInDOERZ(value);
        break;
      case "image":
        setImage(value);
        break;
      default:
        break;
    }
  };

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form onSubmit={handleSubmit(onSubmit)}>


      <div className="mr-2">
                <label className="text-sm text-zinc-600 dark:text-zinc-400">
                  Task ID
                </label>
                <Input
                  className="w-24"
                  {...register("taskIdName", {
                    onChange: (e) => handleFormChange(e),
                  })}
                />
                {errors.taskIdName && (
                  <p>{errors.taskIdName.message as string}</p>
                )}
              </div>


      <input type="submit" />
    </form>
  )
}