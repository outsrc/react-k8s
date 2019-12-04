import { createRenderer } from 'fela'
import typescript from 'fela-plugin-typescript'

export default createRenderer({
  plugins: [typescript()]
})
