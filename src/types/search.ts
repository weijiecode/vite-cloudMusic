export type PromiseRes<T = {}> = Promise<hotsRes<T>>
export type PromiseSearchRes<T = {}> = Promise<searchRes<T>>

export interface hotsRes<T = {}> {
    code: number,
    result: T
}

export interface searchRes<T = {}> {
    code: number,
    result: T
}

export interface sear {
    allMatch: [{
        keyword: string
    }]
}

export interface songlist {
    songs: [{
        id: number,
        name: string,
        al: {
            name: string
        },
        ar: [{
                name: string
            }]
    }]
}



// 热门搜索
export interface hotsres {
    hots: [{
        first: string
    }]
}