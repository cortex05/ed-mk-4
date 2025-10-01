import { useState } from 'react'

import styles from './UnitDisplay.module.css'
import type { IUnit } from '../../../../types/types'
import FreeAssetLinkDisplay from '../fal/FreeAssetLinkDisplay'

type Props = {
  unit: IUnit
}

const UnitDisplay = (props: Props) => {
  const { unit } = props
  const { description, freeAssetLinks } = unit
  const [isCollapseOpen, setIsCollapseOpen] = useState<boolean>(false)

  return (
    <div onClick={() => setIsCollapseOpen(!isCollapseOpen)} className={`${styles.unitBody} mb-2`}>
      <p className={`${isCollapseOpen ? styles.nameDisplay : ''}`}>{unit.name}</p>
      {isCollapseOpen && 
        <div className={`${styles.descriptionBody} p-2`}>
          <div>
            {description.map((description) => {
              return <div className='mb-2' key={description.id}>
                {description.text}
              </div>
            })}
          </div>
          <div className={`${styles.linkField} flex flex-row flex-wrap`}>
            {freeAssetLinks.map((FAL, index) => {
              return <FreeAssetLinkDisplay key={index} asset={FAL}/>
            })}
          </div>
        </div>
      }
    </div>
  )
}

export default UnitDisplay