import { NextRequest, NextResponse } from "next/server";
// import { DEFAULT_TOKENS } from "../../../../app/config";
import { fetchWithRetry } from "@/utils/fetchWithRetry";
import { FetchOptions } from "@/app/api/types";
import { Task } from "@/types";

export async function GET(req: NextRequest, { params }: { params: { username: string } }) {
  try {

    // Attempt to fetch with retries
    const options: FetchOptions = {
      method: "GET",
      headers: {
      },
    };

    // http://localhost:3003/tasks?${params}

    const externalApiResponse = await fetchWithRetry(
      `http://localhost:3003/tasks`,
      options,
      3, // Number of retries
      500 // Initial backoff time in ms
    );

    if (!externalApiResponse.ok) {
      throw new Error(`HTTP error! Status: ${externalApiResponse.status}`);
    }

    const data = await externalApiResponse.json();

    // console.log(`params username: ${params.username}`);
    // console.log(`params username: ${params.username}`);


    const pickMakerzTasks = data.filter((task: Task) => task.ownerUser === params.username);

    // console.log(`backend data: ${JSON.stringify(data)}`);
    // console.log(`backend data pickMakerzTasks: ${JSON.stringify(pickMakerzTasks)}`);
    // console.log(`backend data: ${data}`);

    return new NextResponse(JSON.stringify(pickMakerzTasks), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error: any) {
    return new NextResponse(
      JSON.stringify({ error: error.message || "Something went wrong" }),
      {
        status: 500,
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
  }
}
