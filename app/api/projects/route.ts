import { NextRequest, NextResponse } from 'next/server'
import en from '@/messages/en.json'

const LIMIT = 10

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url)
  const category = searchParams.get('category') ?? 'All'
  const cursor   = parseInt(searchParams.get('cursor') ?? '0', 10)

  let data = en.Projects.projetsData as typeof en.Projects.projetsData
  if (category !== 'All') {
    data = data.filter((p) => p.category === category)
  }

  const total      = data.length
  const items      = data.slice(cursor, cursor + LIMIT)
  const nextCursor = cursor + LIMIT < total ? cursor + LIMIT : null

  return NextResponse.json({ data: items, nextCursor, total })
}
