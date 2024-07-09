import { NextRequest, NextResponse } from "next/server";
import { fetchWithRetry } from "../../../../../../utils/fetchWithRetry";
import { FetchOptions } from "../../../../types";
export async function GET(
  req: NextRequest,
  { params }: { params: { querySymbol: string } },
) {
  try {
    const { querySymbol } = params;

    const options: FetchOptions = {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    };

    const externalApiResponse = await fetchWithRetry(
      `https://api.dexscreener.com/latest/dex/search?q=${querySymbol}`,
      options,
      3, // Number of retries
      500, // Initial backoff time in ms
    );

    if (!externalApiResponse.ok) {
      throw new Error(`HTTP error! Status: ${externalApiResponse.status}`);
    }

    const data = await externalApiResponse.json();

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
      },
    );
  }
}
