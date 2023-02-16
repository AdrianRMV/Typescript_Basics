enum Role {
    ADMIN,
    READ_ONLY,
    AUTHOR,
}

const person = {
    name: 'Adrian',
    age: 21,
    hobbies: ['gym', 'read'],
    role: Role.ADMIN
};

console.log(Role.READ_ONLY)

// Aqui se establece un arreglo que solo tendra strings
let arrayString: string[];

// Any describe que se puede user cualqueir tipo de dato
// ! No es muy recomendable hacer esto por que seria lo mismo que usar JS
let anyTypeArray: any[];
anyTypeArray = [2, 3, 'asd'];

// No da errores por que TS interfiere que como nos estamos refiriendo a un arreglo de SOLO strings entonces cada hijo de el podemos acceder sin problemas a las funciones que tiene cualquier string.
for (const hobby of person.hobbies) {
    console.log(hobby.toString());
}
