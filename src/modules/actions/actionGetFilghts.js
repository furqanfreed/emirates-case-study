const actionGetFilghts = async () => {
    try {
        const response = await fetch("./flights.json")
        const data = await response.json()

        return data
    } catch (error) {
        console.error("Error in actionGetFilghts", error)
    }
}

export default actionGetFilghts