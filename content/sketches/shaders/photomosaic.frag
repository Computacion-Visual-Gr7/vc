precision mediump float;

// source (image or video) is sent by the sketch
uniform sampler2D source;

// palette is sent by the sketch
uniform sampler2D palette;
// number of cols are sent by the sketch
uniform float cols;

// toggles debug
uniform bool debug;

// toggles coloring
uniform bool color_on;
uniform vec4 background;
uniform vec4 foreground;

// target horizontal & vertical resolution
uniform float resolution;

uniform bool avg;

// interpolated color (same name and type as in vertex shader)
varying vec4 vVertexColor;
// interpolated texcoord (same name and type as in vertex shader)
varying vec2 vTexCoord;

float luma(vec3 color) {
  return 0.299 * color.r + 0.587 * color.g + 0.114 * color.b;
}

float AVG(vec3 color) {
  return  0.333 *color.r +0.333 *color.g + 0.333 *color.b ;
}

void main() {
  // define symbolCoord in [0.0, resolution] ∈ R
  vec2 symbolCoord = vTexCoord * resolution;
  // define stepCoord in [0.0, resolution] ∈ Z
  vec2 stepCoord = floor(symbolCoord);
  // remap symbolCoord to [0.0, 1.0] ∈ R
  symbolCoord = symbolCoord - stepCoord;
  // remap stepCoord to [0.0, 1.0] ∈ R
  stepCoord = stepCoord / vec2(resolution);
  // get vec4 color hash key
  vec4 key = texture2D(source, stepCoord);
  if(avg){
    vec2 paletteCoord = vec2((floor(AVG(key.rgb) * cols) + symbolCoord.s) / cols, symbolCoord.t);
    vec4 paletteTexel = texture2D(palette, paletteCoord);
    gl_FragColor = color_on ? (all(equal(paletteTexel, foreground)) ? key : background) : paletteTexel;
  }else{
    vec2 paletteCoord = vec2((floor(luma(key.rgb) * cols) + symbolCoord.s) / cols, symbolCoord.t);
    vec4 paletteTexel = texture2D(palette, paletteCoord);
    gl_FragColor = color_on ? (all(equal(paletteTexel, foreground)) ? key : background) : paletteTexel;
  }
}