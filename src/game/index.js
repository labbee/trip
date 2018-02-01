import * as core from '../core'
import setLoader from './loader'
import setLayer from './layer'
import setTram from './tram'
import setHuman from './human'
import setKey from './monitor'


export const load = setLoader(core)
export const Layer = setLayer(core)
export const Tram = setTram(core)
export const Human = setHuman(core)
export const key = setKey(core)
export {core}


