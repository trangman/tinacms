import { TinaCMS } from 'tinacms'

export const cms = new TinaCMS({
  enabled: process.env.NODE_ENV !== 'production',
  sidebar: true,
  toolbar: true,
})

export default cms
