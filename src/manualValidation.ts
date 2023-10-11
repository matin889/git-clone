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
        "name": "X",
        "age": 28,
        "email": "sandra.larsson@chasacademy,se",
        "county": "SE",
        "salary": "1000",
        "verybadcode": "xxxxx923ndsf" 
}`)
}

const isValidString = (
    str: unknown, 
    minLength: number, 
    maxLength: number):boolean => {
    if(typeof str == "string" && 
    str.length > minLength && 
    str.length < maxLength) {
        return true;
    }
    return false;
};

const writeToPublicDB = (user: User) => {
    console.log("Log", user)
}

const getUser = () => {
    const user = getData()

    const safeUser: User = {
        name: user.name,
        age: user.age,
        email: user.email,
        country: user.country,
        salary: user.salary
    }

    if(!isValidString(safeUser.name, 2, 30)) {
        throw Error("invalid or missing name")
    }
    writeToPublicDB(safeUser)
}

getUser()

}
