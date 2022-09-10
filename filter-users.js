import {getUsers} from "./users.js";

export const userfilter = (filter = {}) => {
    if (Object.keys(filter).length > 0) {

        if ("skill" in filter) {
            const {skill} = filter
            const users = getUsers()
            return users.filter(user => user.skill === skill)
        }


        if ("name" in filter) {
            const {name} = filter
            const users = getUsers()
            return users.filter(user => (user.name).toLowerCase().indexOf(filter.name) > -1)
        }
        return []
    }
    return getUsers()
}
