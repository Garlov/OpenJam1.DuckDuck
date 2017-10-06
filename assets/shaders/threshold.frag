precision mediump float;
varying vec2 vTextureCoord;
varying vec4 vColor;
uniform sampler2D uSampler;

void main(void) {
    vec4 color = texture2D(uSampler, vec2(vTextureCoord.x, vTextureCoord.y));
    float thresh = step(0.3, color.a);
    vec4 sum = vec4(thresh * 1.0, thresh * 0.1, thresh * 0.1, thresh);
    gl_FragColor = sum;
}