1. ¿Qué ventaja tiene usar TypeScript y definir la clase Serie en lugar de usar
objetos literales genéricos (any) como lo haríamos en JavaScript puro al iterar
la tabla?

En TypeScript, puedes implementar tus clases personalizadas. Asi que, puedes tener tu clase Series personalizada. De esta forma, puedes tener aún más control sobre los tipos de datos utilizados en tu aplicación para evitar los errores comunes que cometen los desarrolladores al tratar con datos. Al definir el tipo de dato como any en JavaScript, el compilador no realiza verificaciones, y eres propenso a errores, lo que puede afectar la seguridad y mantenibilidad de tu código. Por otro lado, TypeScript realiza más comprobaciones, proporciona mejores sugerencias de autocompletado y puede detectar errores de forma temprana.

2. En tu función que calcula el promedio, ¿por qué es recomendable usar
variables let para el acumulador de la suma y const para el arreglo de datos?

Es preferible usar let para el acumulador, ya que el valor cambia durante las iteraciones al sumar las temporadas, mientras que const se usa para el array, ya que no cambia de referencia a lo largo de la ejecución. Esto mejora la claridad del código, protege contra cambios no intencionados y es una buena disciplina en programación, ya que distingue entre mutable e inmutable.

3. ¿Qué pasaría en tiempo de compilación si intentas asignar el valor "cinco" al
atributo seasons de una Serie en el archivo data.ts?

Si intentas asignar un valor "cinco" al atributo seasons, TypeScript reportará un error durante la compilación, lo que indica el tipo de valor (cadena) que no puede ser asignado a un número. Esto permite identificar el problema de forma temprana y evita que el programa se ejecute con datos inválidos y previene errores en tiempo de ejecución.

