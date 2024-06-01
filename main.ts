// 1. Null: Signifies the absence of a value
let nullableValue: string | null = null;
console.log(`Nullable value: ${nullableValue}`);

// Assigning a non-null value
nullableValue = "Hello, TypeScript!";
console.log(`Updated value: ${nullableValue}`);

// 2. Type Alias: Creating custom type names
type UserId = number;
type UserName = string;

type User = {
    id: UserId;
    name: UserName;
    age?: number; // Optional property
};

const user: User = {
    id: 1,
    name: "John Doe",
};

console.log(`User: ${user.name}, ID: ${user.id}`);

// 3. Structural Interface: Defining object shapes
interface Product {
    id: number;
    name: string;
    price: number;
    description?: string; // Optional property
}

const product: Product = {
    id: 101,
    name: "Laptop",
    price: 1200,
};

function printProductDetails(product: Product) {
    console.log(`Product Name: ${product.name}, Price: $${product.price}`);
    if (product.description) {
        console.log(`Description: ${product.description}`);
    }
}

printProductDetails(product);

// 4. Narrowing: Refining types based on conditions
function printValue(value: string | number | null) {
    if (value === null) {
        console.log("Value is null");
    } else if (typeof value === "string") {
        console.log(`String value: ${value}`);
    } else {
        console.log(`Number value: ${value}`);
    }
}

printValue(null);
printValue("Hello");
printValue(42);
