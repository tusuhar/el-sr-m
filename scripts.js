// Ejemplo de uso de .length
// Contar los caracteres de una contraseña
let contrasena = "segura123";
console.log("La contraseña tiene:", contrasena.length, "caracteres"); // 9

// Ejemplo de .includes()
// Revisar si un texto contiene la palabra "Java"
let curso = "Estoy aprendiendo JavaScript";
console.log("¿El curso contiene 'Java'?:", curso.includes("Java")); // true

// Ejemplo de .concat()
// Unir dos cadenas para formar un mensaje
let saludo1 = "Hola";
let saludo2 = "Mundo";
let mensaje = saludo1.concat(" ", saludo2, "!");
console.log(mensaje); // "Hola Mundo!"

// Ejemplo de .replace()
// Cambiar una palabra en una oración
let frase = "El clima está frío";
let nuevaFrase = frase.replace("frío", "caliente");
console.log(nuevaFrase); // "El clima está caliente"

// Ejemplo de .split()
// Dividir una lista de materias separadas por comas
let materias = "Matemáticas,Inglés,Programación";
let listaMaterias = materias.split(",");
console.log(listaMaterias); // ["Matemáticas", "Inglés", "Programación"]

// Ejemplo de .toUpperCase()
// Pasar un nombre a mayúsculas
let estudiante = "sofia gutierrez";
console.log(estudiante.toUpperCase()); // "SOFIA GUTIERREZ"

// Objeto Math
// Redondear diferentes números
console.log("Floor de 7.8:", Math.floor(7.8)); // 7
console.log("Ceil de 7.2:", Math.ceil(7.2));   // 8
console.log("Round de 7.5:", Math.round(7.5)); // 8

// Generar una nota aleatoria entre 0 y 100
let notaFinal = Math.round(Math.random() * 100);
console.log("La nota del estudiante es:", notaFinal);

// Raíz cuadrada de 81
console.log("Raíz cuadrada de 81:", Math.sqrt(81)); // 9

// Potencia: 3 elevado a la 4
console.log("3^4 =", Math.pow(3, 4)); // 81
