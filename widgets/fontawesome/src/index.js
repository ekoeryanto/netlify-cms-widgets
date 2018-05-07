import brands from '@fortawesome/fontawesome-free-brands'
import regular from '@fortawesome/fontawesome-free-regular'
import solid from '@fortawesome/fontawesome-free-solid'

import withIcon from './withIcon'

export const Brands = withIcon({brands})
export const Regular = withIcon({regular})
export const Solid = withIcon({solid})

export * from './Preview'
