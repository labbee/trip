import * as core from '../core'
import setLoader from './loader'
import setLayer from './layer'
import setTram from './tram'
import setHuman from './human'
export {key} from './monitor'


export const load = setLoader(core)
export const Layer = setLayer(core)
export const Tram = setTram(core)
export const Human = setHuman(core)
export {core}


