export type PromiseRes<T = {}> = Promise<hotsRes<T>>

export interface hotsRes<T = {}> {
    code: number,
    result: T
}

// 热门搜索
export interface hotsres {
    hots: [{
        first: string
    }]
}