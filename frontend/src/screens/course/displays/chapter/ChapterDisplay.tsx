import { useState } from 'react'
import type { IChapter } from '../../../../types/types'
import styles from './ChapterDisplay.module.css'
import UnitDisplay from '../unit/UnitDisplay'

type Props = {
  chapter: IChapter
}
const ChapterDisplay = (props: Props) => {
  const { chapter } = props
  const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(false)

  return (
    <div className={`${styles.chapterBody} mb-2 md:mb-4 p-1 md:p-2`}>
      <div className={`${isCollapseOpen ? styles.openTop : ''} p-2`} onClick={() => setIsCollapseOpen(!isCollapseOpen)}>
        <h2 className='text-xl md:text-2xl'>{chapter.name}</h2>
      </div>
      {isCollapseOpen && 
        <div className={`${styles.unitsField} p-2`}>
          {chapter.units.map((unit) => {
            return <UnitDisplay key={unit.name} unit={unit}/>
          })}
        </div>
      }
    </div>
  )
}

export default ChapterDisplay