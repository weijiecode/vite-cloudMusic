import request from './request'
import { PromiseRes, recommend, newmusic, musicurl, musicdetail, lyric } from '../types/home'


// 测试
// export const homeApi = ():Result<homeData> => request.get('/homepage/block/page')
// 推荐音乐
export const getRecommend = ():PromiseRes<recommend> => request.get('personalized?limit=6')

// 最新音乐
export const getNewMusic = ():PromiseRes<newmusic> => request.get("personalized/newsong")

// 获取音频地址
export const getMusicUrl = (params: string):Promise<musicurl> => request.get("song/url?id="+params)

// 获取音乐名、专辑
export const getMusicdetail = (params: string):Promise<musicdetail> => request.get("song/detail?ids="+params)

// 获取歌词
export const getlyric = (params: string):Promise<lyric> => request.get("lyric?id="+params)