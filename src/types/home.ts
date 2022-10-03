export type PromiseRes<T = {}> = Promise<homeResult<T>>

export interface homeResult<T = {}> {
    code: number
    result: T[]
}

// 推荐歌单
export interface recommend {
    id: number;
    name: string;
    picUrl: string;
    playCount: number;
}

// 最新音乐
export interface newmusic {
    id: number,
    name: string,
    song: {
        artists: [
            {
                name: string
            }
        ],
        album: {
            name: string
        }
    }
}

// 音频地址
export interface musicurl {
    code: number,
    data: [{
        url: string
    }]
}

// 歌曲详情
export interface musicdetail {
    code: number,
    songs: [
        {
            al: {
                name: string,
                picUrl: string
            }
        }
    ]
}

// 歌词
export interface lyric {
    code: number,
    lrc: {
        lyric: string
    }
}