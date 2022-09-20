export type Result<T = {}> = Promise<homeResult>

export interface homeResult{
    code: number
    result: [
        {
            id: number;
            name: string;
            picUrl: string;
            playCount: number;
        }
    ]
}
// // 测试
// export interface homeData {
//     blocks: []
// }
// // 推荐音乐
// export interface recommend {
//     id: number;
//     name: string;
//     picUrl: string;
//     playCount: number;
// }