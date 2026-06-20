import { Dictionary } from "@/lib/getDictionary"
import { globalStyles } from "@/styles/styles"
import Title from "../reusable/Title"
import DataClient from "../reusable/DataClient"

const INITIAL_LIMIT = 10

const Certifications = ({ dict }: { dict: Dictionary }) => {
  const data         = dict.companycertifications
  const all          = data.certificationsData
  const initialItems = all.slice(0, INITIAL_LIMIT)
  const initialNext  = all.length > INITIAL_LIMIT ? INITIAL_LIMIT : null

  return (
    <div className={`${globalStyles.mainContainer}`}>
      <div className={`${globalStyles.innerContainer} space-y-16`}>
        <Title value={data.titles} crumb={data.crumb} />
        <DataClient
          endpoint="certifications"
          categories={data.category}
          initialItems={initialItems}
          initialNextCursor={initialNext}
        />
      </div>
    </div>
  )
}

export default Certifications
