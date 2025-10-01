import type { IAssetLink } from '../../../../types/types'
import styles from './FreeAssetLinkDisplay.module.css'

type Props = {
  asset: IAssetLink
}

const FreeAssetLinkDisplay = (props: Props) => {
  const { asset } = props

  const falColor = (mediaType: string) => {
    switch(mediaType){
      case "YouTube":
        return styles.youtube
      case "Documents":
        return styles.docs
      default:
        return styles.generic
    }
  }

  return (
    <div className={`${styles.falBody} py-[1px] px-[8px] rounded-lg mr-2 mb-2 ${falColor(asset.mediaType)}`}>
      {asset.mediaType}  
    </div>
  )
}

export default FreeAssetLinkDisplay