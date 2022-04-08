const isManagerSignUp = async (req, res, next) => {
    if (req.body.role == "manager") {
        const requireFields = ['name', 'email', 'auditoriumName', 'address', 'city', 'capacity', 'costPerHour']

        const manager = await Object.keys(req.body)
        const isValidManager =await requireFields.every((field) => manager.includes(field))
        if (!isValidManager)
            return res.status(400).send({ error: "Please fill all required fields" })
    }
    next()
}

const isManager = async (req, res, next) => {
    if (req.user.role !== "manager")
        return res.status(401).send({ error: "Unauthorized Perosn.." })
    next()
}

const isAdmin = async (req, res, next) => {
    if (req.user.role !== "admin")
        return res.status(401).send({ error: "Unauthorized Perosn.." })
    next()
}

const isOrganizer = async (req, res, next) => {
    if (req.user.role !== "Event Organizer")
        return res.status(401).send({ error: "Unauthorized Perosn.." })
    next()
}

const isCustomer = async (req, res, next) => {
    if (req.user.role !== "customer")
        return res.status(401).send({ error: "Unauthorized Perosn.." })
    next()
}

module.exports = { isManager, isAdmin, isCustomer, isOrganizer, isManagerSignUp }