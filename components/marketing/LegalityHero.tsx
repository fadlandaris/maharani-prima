"use client"

import Crumb from "../reusable/Crumb"
import Button from "../reusable/Button"
import { globalStyles } from "@/styles/styles"
import { Dictionary } from "@/lib/getDictionary"
import { BinaryIcon, GavelIcon, IntersectionIcon, MapPinAreaIcon, NoteBlankIcon, UserIcon } from "@phosphor-icons/react"

const LegalityHero = ({
  dict
} : {
  dict: Dictionary
}) => {

  const legalityData = dict.legality
  return (
    <div className={`${globalStyles.fullContainer} pt-42`}>
      <div className={`${globalStyles.innerContainer} space-y-16`}>
        <div className='space-y-8'>
          <Crumb value={legalityData.crumb}/>
          <h2 className='text-6xl font-semibold tracking-tighter max-w-2xl'>{legalityData.title}</h2>
          <Button value={legalityData.certifications}/>
        </div>
        <div className="h-[500px] relative bg-background bg-neutral-400 text-background">
          <div className="absolute p-8 bg-primary left-1/2 -translate-x-1/2 -bottom-1/4 space-y-8">
            <p className="tracking-tighter font-semibold text-2xl">" {legalityData.desc} "</p>
            <div className="space-y-2">
              <div className="flex items-center gap-x-2">
                <MapPinAreaIcon weight="duotone" size={20}/>
                <p>{legalityData.date}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <IntersectionIcon weight="duotone" size={20}/>
                <p>{legalityData.notarialnumber}</p>
              </div>
              <div className="flex items-center gap-x-2">
                <UserIcon weight="duotone" size={20}/>
                <p>{legalityData.name}</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-48 grid grid-cols-4 bg-card">
          {legalityData.legalityData.map((item, i) => {
            return (
              <div key={i} className={`${i === legalityData.legalityData.length - 1 ? '' : 'border-r-1'} p-8 border-muted/20 space-y-8`}>
                <div className='p-4 bg-primary/5 w-fit'>
                  <GavelIcon weight='duotone' size={32} className='text-primary' />
                </div>
                <div className='space-y-2'>
                  <h4 className='text-foreground text-lg font-semibold'>{item.title}</h4>
                  <p className='text-foreground'>{item.desc}</p>
                </div>
              </div>
            )
          })}
        </div>
      </div>
    </div>
  )
}

export default LegalityHero