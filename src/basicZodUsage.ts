import { z } from "Zod";

// Skapar ett schema för en sträng
const mySchema = z.string();

// Parsing
//mySchema.parse("sandra")
//mySchema.parse(3143) // Kastar ett Zod-fel

// "safe"-parsing - kastar inte ett fel om valideringen misslyckas
//console.log(mySchema.safeParse("sandra"))
//console.log(mySchema.safeParse(12344))

const userSchema = z.object({
  name: z.string(),
  age: z.number(),
});

const response = userSchema.safeParse({ name: "Matin", age: "40" });
console.log(response);

type User = z.infer<typeof userSchema>;
