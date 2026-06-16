"use client"

const ProjectsFilter = ({
  data,
  active,
  onChange,
}: {
  data: string[]
  active: string
  onChange: (value: string) => void
}) => {
  const items = data

  return (
    <div className='inline-flex'>
      <div className='bg-card flex items-center'>
        {items.map((item, i) => (
          <button
            key={item}
            onClick={() => onChange(item)}
            className={`
              ${i === 0 ? '' : 'border-l'} border-muted/20 py-2 px-4 cursor-pointer transition-all duration-300
              ${active === item
                ? 'bg-primary text-background px-8'
                : 'hover:px-8 hover:bg-foreground hover:text-background'
              }
            `}
          >
            <p className='tracking-tighter font-medium'>{item}</p>
          </button>
        ))}
      </div>
    </div>
  )
}

export default ProjectsFilter
