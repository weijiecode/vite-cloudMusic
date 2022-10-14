import request from './request'
import { PromiseRes, hotsres } from '../types/search'

export const getHots = ():PromiseRes<hotsres> => request.get('search/hot')
