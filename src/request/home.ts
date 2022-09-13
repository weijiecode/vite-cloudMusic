import request from './request'


type Result<T> = Promise<homeResult<T>>

interface homeResult<T> {
    code: number
    data: T
}

interface homeRes {
    blocks: []
}

export const homeApi = ():Result<homeRes> => request.get('/homepage/block/page')