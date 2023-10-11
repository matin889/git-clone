
    import {z} from "Zod";

    const UserSchema = z.object({
        name: z.string().trim().min(2, {message: "You have to have a longer name than Bo"}).max(30),
        age: z.number().positive().optional(),
        email: z.string().email(),
        country: z.literal("SE"),
        salary: z.number().min(0).max(1000000)

    }).strict()

    type User = z.infer<typeof UserSchema>


    const getData = () => {
        return JSON.parse(`{
            "name": "Sandra",
            "age": 28,
            "email": "sandra.larsson@chasacademy.se",
            "country": "SE",
            "salary": 1000,
            "verybadcode": "xxxxx923ndsf" 
    }`)
}
    
    const writeToPublicDatabase = (user: User) => {
        console.log("Log:", user)
      }
      

    const validateUser = (user: unknown) => {
        // Zod validering - parse / safepars
        return UserSchema.safeParse(user)
    }

     const user = getData()

     const validUser = validateUser(user);

     if(validUser.success) {
        console.log(validUser)
        writeToPublicDatabase(validUser.data as User)
     } else {
        console.log(validUser.error)
     }
    

 
    