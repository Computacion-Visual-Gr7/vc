# <b>Algoritmos de visibilidad</b>
La determinación de las caras ocultas (HSR), en gráficos por computadores, es el proceso usado para determinar que superficies y partes de superficies son visibles o no desde algún ángulo de observación y ha sido un problema esencial desde sus inicios. 

<div class="img" style="display: flex; justify-content: center;">
    <img src="https://docs.imgtec.com/Architecture_Guides/PowerVR_Architecture/images/overdraw.jpg" alt="drawing" width="250" > 
    </img>
</div>
<br>
<div class="text" style="text-align: justify;">
Una variedad de algoritmos de HSR (hidden surface determination) fueron desarrollados en los años 70, para resolver el problema de la determinación de secciones visibles de los objetos en la imagen final. El problema en la actualidad se considera resuelto y para la mayoría de las aplicaciones interactivas el algoritmo de selección es el: z buffer.
</div>

Otro ejemplo de estos algoritmos es: 
### <b>Painter's Algorithm</b>
<div class="text" style="text-align: justify;">
Cuando se proyecta una escena de tres dimensiones en un plano de dos, es necesario determinar qué polígonos son visibles y cuáles no. El nombre del algoritmo se da por la analogía de un pintor que primero dibuja los elementos lejanos de una escena y después los cubre con los más cercanos. El algoritmo del pintor ordena todos los polígonos de una escena en función de su profundidad y después los pinta en ese orden, pintando encima de las partes que no son visibles y solucionando así el problema de la visibilidad. 
</div>
<br>
<div class="img" style="display: flex; justify-content: center;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/8/84/Painter%27s_algorithm.png" alt="drawing" width="800" > 
    </img>
</div>

En términos de progamación, su pseudocódigo sería:
<div class="img" style="display: flex;">
    <img src="https://i.ibb.co/YWsgRd9/code.png" width="300" > 
    </img>
</div>

La complejidad del algoritmo del pintor depende del algoritmo de ordenamiento que se utilice para organizar los polígonos. Asumiendo que se usa el algoritmo más óptimo, el peor caso para el pintor sería de O(nlogn + m*n), siendo n el número de polígonos y m el número de pixeles por rellenar.


EL algoritmo del pintor tiene dos grandes ventajas:
- Estructura gráfica básica: Su simplicidad lo vuelve muy útil en escenarios computacionales gráficos básicos donde no se requiere de renderizados sofisticados.
- Memoria eficiente: Prioriza el uso eficiente de memoria (a costa del alto poder de procesamiento necesario para renderizar cada parte de cada imagen)

Por otro lado cuenta con algunos problemas, principalmente la superposición como se muestra a continuación: 

<div class="img" style="display: flex; justify-content: center;">
    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/7/78/Painters_problem.svg/800px-Painters_problem.svg.png" alt="drawing" width="300" > 
    </img>
</div>

Debido a que las figuras se intersecan, no es posible determinar cuál polígono está por encima de otro, de forma que para solucionarlo habría que cortar las figuras de alguna forma para su correcta ordenación.
Otra desventaja sería la ineficiencia, puesto que el sistema al tener que renderizar cada punto de cada polígono en el plano visible hace que para escenas con gran nivel de detalle el hardware sea fuertemente afectado

## Referencias
- https://es.wikipedia.org/wiki/Determinaci%C3%B3n_de_cara_oculta
- https://grafica2016a.files.wordpress.com/2016/03/algoritmos-de-visibilidad.pdf
- https://en.wikipedia.org/wiki/Painter%27s_algorithm