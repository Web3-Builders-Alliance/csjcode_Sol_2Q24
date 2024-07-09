import { NextRequest, NextResponse } from "next/server";
// import { DEFAULT_TOKENS } from "../../../../app/config";
import { fetchWithRetry } from "@/utils/fetchWithRetry";
import { FetchOptions } from "@/app/api/types";

export async function GET(req: NextRequest) {
  try {

    // const params = new URLSearchParams({
    //   ids: "",
    //   vs_currency: "usd",
    //   order: "market_cap_desc",
    //   price_change_percentage: "24h,7d",
    // });

    // params.append('cache_fresh', Date.now().toString());

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

    // console.log(`backend data: ${data}`);

    return new NextResponse(JSON.stringify(data), {
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
