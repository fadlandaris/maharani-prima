import { SealCheckIcon } from '@phosphor-icons/react'
import { BuildingIcon, BulldozerIcon, CalendarIcon, CalendarCheckIcon } from '@phosphor-icons/react'
import Button from './Button'

const ProjectsCard = ({
  project,
  client,
  owner,
  year,
  scope,
  category,
  className,
  index,
  value,
  cta
} : {
  project: string,
  client: string,
  owner: string,
  year: string,
  scope: string,
  category: string,
  className?: string,
  index: number,
  value?: string,
  cta?:string
}) => {
  return (
    <div className={`${className} grid grid-cols-3 gap-x-4`}>
      <div className='w-full h-full flex flex-col justify-between gap-4'>
        <div className='bg-card w-full h-full p-8 flex flex-col justify-between'>
          <div className='space-y-2'>
            <h3 className='text-foreground text-lg font-semibold'>{project}</h3>
            <div className='flex items-start gap-x-1'>
              <p>{client}</p>
              <SealCheckIcon weight='duotone' className='text-secondary mt-1.5' size={14}/>
            </div>
          </div>
          <div className='grid grid-cols-1'>
            <div className='flex items-center gap-x-4 py-4 border-b border-muted/20'>
              <BulldozerIcon className='text-primary' weight='duotone' size={20}/>
              <p>{scope}</p>
            </div>
            <div className='flex items-center gap-x-4 py-4 border-b border-muted/20'>
              <BuildingIcon className='text-secondary' weight='duotone' size={20}/>
              <p>{owner}</p>
            </div>
            <div className='flex items-center gap-x-4 py-4'>
              <CalendarIcon className='text-tertiary' weight='duotone' size={20}/>
              <p>{year}</p>
            </div>
          </div>
        </div>
        <div className='bg-card w-full p-8 flex items-center justify-between'>
          <div className='flex items-center gap-x-4 font-medium'>
            <CalendarCheckIcon/>
            <p>Completed in {year}</p>
          </div>
          <Button variant="primary" value={cta}/>
        </div>
      </div>
      <div className='col-span-2 w-full h-[500px] bg-neutral-500'>

      </div>
    </div>
  )
}

export default ProjectsCard