import Buyable from './Buyable';

export default class Movie implements Buyable {
    constructor(
        readonly id: number,
        readonly name: string,
        readonly author: string,
        readonly price: number,
        readonly origName: string,
        readonly year: number,
        readonly country: string,
        readonly description: string,
        readonly genres: string,
        readonly time: number,
    ) { }
}