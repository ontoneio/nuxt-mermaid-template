import Vue from 'vue'
const mermaid = require("mermaid");

var config = {
  startOnLoad: true,
  flowchart: {
    useMaxWidth: true,
    htmlLabels: true
  }
};

mermaid.initialize(config);


Vue.prototype.$mermaidRender = () => mermaid.mermaidAPI