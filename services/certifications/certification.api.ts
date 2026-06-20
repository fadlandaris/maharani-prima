import { http } from '@/lib/api'
import type { CertificationsParamsDto, CertificationsResponseDto } from './certification.dto'

export const certificationsApi = {
  async getCertifications(params: CertificationsParamsDto): Promise<CertificationsResponseDto> {
    const res = await http.get<CertificationsResponseDto>('certifications', { params })
    return res.data
  },
}
