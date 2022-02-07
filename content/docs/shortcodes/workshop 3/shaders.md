# Trabajos

photomosaic algoritm

1. analisis de la imagen source

en este paso se busca pixelar la imagen a una resolucion determinada, se partido del fragment shader parte del ejercicio propuesto para esta seccion del curso.

{{< expand "fragment shader spacial coherence">}}

```js

precision mediump float;

// img (image or video) is sent by the sketch
uniform sampler2D img;
// om is sent by the sketch
uniform sampler2D om;
// displays original
uniform bool original;
// toggles om display
uniform bool om_on;
// target horizontal & vertical resolution
uniform float resolution;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

void main() {
  if (original) {
    gl_FragColor = texture2D(img, vTexCoord);
  }
  else {
    // remap omCoord to [0.0, resolution] ∈ R
    vec2 omCoord = vTexCoord * resolution;
    // remap imgCoord to [0.0, resolution] ∈ Z
    vec2 imgCoord = floor(omCoord);
    // remap omCoord to [0.0, 1.0] ∈ R
    omCoord = omCoord - imgCoord;
    // remap imgCoord to [0.0, 1.0] ∈ R
    imgCoord = imgCoord / vec2(resolution);
    // image texel (may be used as color hash key, e.g., photomosaic)
    vec4 imgTexel = texture2D(img, imgCoord);
    if(om_on) {
      vec4 black = vec4(0.0, 0.0, 0.0, 1.0);
      vec4 omTexel = texture2D(om, omCoord);
      // glsl all: https://thebookofshaders.com/glossary/?search=all
      // glsl equal: https://thebookofshaders.com/glossary/?search=equal
      gl_FragColor = all(equal(omTexel, black)) ? imgTexel : omTexel;
    }
    else {
      gl_FragColor = imgTexel;
    }
  }
}
```
{{< /expand >}}

a partir e ese fragment shader se destacaron partes del codigo usables para el mosaico 
{{< expand "fragment shader spacial coherence partes utilizadas">}}

```js

// img (image or video) is sent by the sketch
uniform sampler2D img;

// target horizontal & vertical resolution
uniform float resolution;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

void main() {
    // remap omCoord to [0.0, resolution] ∈ R
    vec2 omCoord = vTexCoord * resolution;
    // remap imgCoord to [0.0, resolution] ∈ Z
    vec2 imgCoord = floor(omCoord);
    // remap omCoord to [0.0, 1.0] ∈ R
    omCoord = omCoord - imgCoord;
    // remap imgCoord to [0.0, 1.0] ∈ R
    imgCoord = imgCoord / vec2(resolution);
    // image texel (may be used as color hash key, e.g., photomosaic)
    vec4 imgTexel = texture2D(img, imgCoord);
    
    gl_FragColor = imgTexel;
    
}
```
{{< /expand >}}
se añadio la posibilidad de cargar las imagenes por medio de un boton 
{{< p5-iframe2 sketch="/vc/sketches/pas1.js" width="610" height="610" >}}

# WEBCRAWLER

Al ejecutar el archivo webcrawler.js se imprime en consola una serie de imágenes obtenidas de una url

2. Ordenamiento de los elementos de la paleta

para este ordenamiento se hace uso de la libreria Quadrille de p5 que tiene 3 modos  o criterios de ordenamiento,
LUMA, AVG y DISTANCE, para este ejemplo se usa una paleta con 10 imagenes 
{{< p5-iframe2 sketch="/vc/sketches/pas2.js" width="1010" height="170" >}}

3. Hacer el reemplazo de los pixeles a baja reolución con los elementos de la paleta

para este paso se leen las 10 imagenes 

{{< p5-iframe2 sketch="/vc/sketches/mosaic.js" width="610" height="610" >}}

Para  la implementacion de paletas propias se hace uso de un script en el que se pueden cargar una a una las imagenes de la paleta esto se puede hacer mediante el boton seleccionar archivo, tras escoger las imagenes que compondran la paleta se debe escoger el metodo de organizacion de los elementos de la paleta(LUMA, AVG o DISTANCE) mediate el boton de seleccion "seleccione el tipo de sort", posteriormente tras elegir el tipo de sort se puede descargar la imagen de la paleta haciendo click en el boton "descargar paleta" tras esto se genera una imagen de la paleta que se podra usar en el siguiente script.
{{< p5-iframe2 sketch="/vc/sketches/paleta.js" width="1010" height="170" >}}

En el siguiente script hay dos botones que permiten cargar archivo el que se encuentra en la parte superior es para la carga de la imagen del fotmosaico, el que se encuentra en la parte inferior es para cargar la paleta generada en el script anterior este tendra como nombre photo.png y estara en la carpeta de descargas, este script no trae la opcion de cambiar el prdenamoento pues esto se hace al momento de generar la paleta en el paso anterior.

{{< p5-iframe2 sketch="/vc/sketches/mosaic2.js" width="610" height="610" >}}





