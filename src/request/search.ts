import request from './request'
import { PromiseRes, hotsres, PromiseSearchRes, sear, songlist } from '../types/search'

// 获取热门搜索
export const getHots = (): PromiseRes<hotsres> => request.get('search/hot')
// 后去推荐搜索
export const getSearch = (params: string): PromiseSearchRes<sear> => request.get('search/suggest?keywords=' + params + '&type=mobile')
// 获取搜索数据
export const getsong = (params: string):PromiseSearchRes<songlist> => request.get('cloudsearch?keywords=' + params)
