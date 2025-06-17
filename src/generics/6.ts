type Errors = {
  email?: string[];
  firstName?: string[];
  lastName?: string[];
  phone?: string[];
};

type Form = {
  email: string | null;
  firstName: string | null;
  lastName: string | null;
  phone: string | null;
  errors: Errors;
};

// Реалізуйте Params так,
// щоб унеможливити поле 'errors' з типу Form
type Params = Omit<Form, "errors">;

const params: Params = {
  email: "@gmail.com",
  firstName: "Bohdan",
  lastName: "Miskov",
  phone: "+380",
};

console.log("------------Generics 6------------");
console.log("🚀 ~ params:", params);
