export type CertificationDto = {
  title: string
  desc: string
  category: string
}

export type CertificationsResponseDto = {
  data: CertificationDto[]
  nextCursor: number | null
  total: number
}

export type CertificationsParamsDto = {
  category: string
  cursor: number
}
