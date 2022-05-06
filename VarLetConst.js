/* Diferencias entre  var - let - const

	VAR:
		- Nos permite cambiar el valor de la variable.
		- Tiene un ambito (scope) de funcion. Se puede acceder a esa variable dentro de la funcion.
		- Pueden ser redeclaradas.	

	LET:
		- Al igual que "var" nos permite cambiar su valor.
		- Tiene un ambito (scope) de bloque. Su alcance se limita a la estructura contenedora en la que se encuentra.

	CONST:
		- Nos permite definir variables inmutables, es decir no cambian su valor.
		- Tiene un ambito (scope) de bloque.
*/

// EJEMPLO:

function variables()
{
const c = "fin"; // tiene que ser definido con su valor.
	var a;
  a = 1;
	console.log (a);
  for (a = 2; a < 3; a++)
  {
  	let b = "hola"; // solo esta definida en este bloque
  	console.log (a);
    console.log (b);
    console.log (c); // esta dentro de la funcion.
  }
  //console.log (b); // no puede acceder ya que esta fuera del bloque en el que estab definido.
  
  //otro ejemplo de const:
  if (a == 2)
  {
  const d = 3;
  console.log (d);
  }
  //console.log (d); // no puede acceder a "d" ya que fue definido en el bloque anterior.

}
variables();
