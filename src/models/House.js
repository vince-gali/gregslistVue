import { Profile } from "./Account.js"

export class House {
    constructor(data) {
        this.id = data.id
        this.bedrooms = data.bedrooms
        this.bathrooms = data.bathrooms
        this.imgUrl = data.imgUrl
        this.year = data.year
        this.price = data.price
        this.description = data.description
        this.levels = data.levels
        this.creatorId = data.creatorId
        
        this.creator = new Profile(data.creator)
    }
}
