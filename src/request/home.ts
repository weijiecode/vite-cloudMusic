import request from './request'
import { Result } from '../types/home'


// 测试
// export const homeApi = ():Result<homeData> => request.get('/homepage/block/page')
// 推荐音乐
export const recommendApi = ():Result => request.get('/personalized?limit=6')