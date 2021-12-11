# Algoritmos de visibilidad
La determinación de las caras ocultas (HSR), en gráficos por computadores, es el proceso usado para determinar que superficies y partes de superficies son visibles o no desde algún ángulo de observación y ha sido un problema esencial desde sus inicios. 
Una variedad de algoritmos de HSR (hidden surface determination) fueron desarrollados en los años 70, para resolver el problema de la determinación de secciones visibles de los objetos en la imagen final. El problema en la actualidad se considera resuelto y para la mayoría de las aplicaciones interactivas el algoritmo de selección es el: z buffer.

Otro ejemplo de estos algoritmos es: 

# Painter's Algorithm
Cuando se proyecta una escena de tres dimensiones en un plano de dos, es necesario determinar qué polígonos son visibles y cuáles no. El nombre del algoritmo se da por la analogía de un pintor que primero dibuja los elementos lejanos de una escena y después los cubre con los más cercanos. El algoritmo del pintor ordena todos los polígonos de una escena en función de su profundidad y después los pinta en ese orden, pintando encima de las partes que no son visibles y solucionando así el problema de la visibilidad. 

div class="img" style="display: flex; justify-content: center;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Painter%27s_algorithm.png" alt="drawing" width="400" > 
    </img>
</div><br>

pseudocodigo

time complexity

gif de funcionamiento

ventajas

problemas

imagen problema




## Referencias
- https://es.wikipedia.org/wiki/Determinaci%C3%B3n_de_cara_oculta
- https://grafica2016a.files.wordpress.com/2016/03/algoritmos-de-visibilidad.pdf
- 