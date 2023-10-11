{
type User = {
    name: string,
    age: number,
    email: string,
    country: string,
    salary: number
}

const getData = () => {
    return JSON.parse(`{
        "name": "Sandra",
        "age": 28,
        "email": "sandra.larsson@chasacademy,se",
        "county": "SE",
        "salary": "1000",
        "verybadcode": "xxxxx923ndsf" 
}`)
}

const writeToPublicDB = (user: User) => {
    console.log("Log", user)
}

const getUser = () => {
    const user = getData()
    writeToPublicDB(user)
}

getUser()

}
