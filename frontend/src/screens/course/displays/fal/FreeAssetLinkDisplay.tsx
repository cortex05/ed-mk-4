import React from 'react'
import type { IAssetLink } from '../../../../types/types'

type Props = {
  asset: IAssetLink
}

const FreeAssetLinkDisplay = (props: Props) => {
  const { asset } = props 
  return (
    <div>
      {asset.mediaType}  
    </div>
  )
}

export default FreeAssetLinkDisplay