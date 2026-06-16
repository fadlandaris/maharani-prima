import { Dictionary } from '@/lib/getDictionary'
import { globalStyles } from '@/styles/styles'
import Title from '../reusable/Title'
import ProjectsPageClient from '../reusable/ProjectsPageClient'

const INITIAL_LIMIT = 10

const ProjectsPage = ({ dict }: { dict: Dictionary }) => {
  const projectsData  = dict.Projects
  const all           = projectsData.projetsData
  const initialItems  = all.slice(0, INITIAL_LIMIT)
  const initialNext   = all.length > INITIAL_LIMIT ? INITIAL_LIMIT : null

  return (
    <div className={`${globalStyles.mainContainer}`}>
      <div className={`${globalStyles.innerContainer} space-y-16`}>
        <Title value={projectsData.title} crumb={projectsData.crumb} />
        <ProjectsPageClient
          categories={projectsData.category}
          initialItems={initialItems}
          initialNextCursor={initialNext}
        />
      </div>
    </div>
  )
}

export default ProjectsPage
