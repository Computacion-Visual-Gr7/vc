precision mediump float;

// source (image or video) is sent by the sketch
uniform sampler2D source;
uniform sampler2D palette;


uniform float cols;

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
  mediump float avg7;
  mediump float luma7;
  mediump float zluma;
  mediump float rluma;
  mediump float zavg;
  mediump float ravg;
  if(avg){
    avg7 =  AVG(key.rgb) * cols;
    zavg = floor(avg7)+ symbolCoord.s;
    ravg = zavg/cols;
    vec2 fcord = vec2(ravg,symbolCoord.t);
    vec4 paletteTexel = texture2D(palette, fcord);
    gl_FragColor =  paletteTexel;
  }else{
    luma7 =  luma(key.rgb) * cols;
    zluma = floor(luma7)+ symbolCoord.s;
    rluma = zluma/cols;
    vec2 fcord = vec2(rluma,symbolCoord.t);
    vec4 paletteTexel = texture2D(palette, fcord);
    gl_FragColor =  paletteTexel;
  } 
}