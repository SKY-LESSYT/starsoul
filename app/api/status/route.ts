import { NextResponse } from "next/server"

export async function GET() {
  try {
    const response = await fetch("https://api.mcstatus.io/v2/status/java/starsoul.industries", {
      cache: "no-store",
    })

    if (!response.ok) {
      return NextResponse.json({ online: false })
    }

    const data = await response.json()

    return NextResponse.json({
      online: data.online === true,
    })
  } catch {
    return NextResponse.json({ online: false })
  }
}
