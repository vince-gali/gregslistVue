import { Profile } from "./Account.js"

export class Car {
    constructor(data) {
        this.id = data.id
        this.make = data.make
        this.model = data.model
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.engineType = data.engineType
        this.createdAt = new Date(data.createdAt)
        this.creatorId = data.creatorId
        // NOTE this is unneccessary but provides more intellisense when accessing properties on the 'creator' because it has been mapped to a class
        this.creator = new Profile(data.creator)
    }
}
