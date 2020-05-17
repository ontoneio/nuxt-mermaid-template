<template>
  
  <div class='container'>
    <aside>
        <textarea 
        v-model="textAreaData"
        name="" id="" cols="50" rows="10"
        >
        </textarea>
        <button>
    </aside>
    <div :id="graphID" v-html="svgElement" class="mermaid">
      {{ textAreaData }}
    </div>
  </div>
</template>

<script>


export default {
  data(){
    return {
      graphID: 'graphArea',
      textAreaData: ``,
      svgElement: ``
    }
  },
  components: {},
  methods: {
    updateGraph(graphString){      
      this.$mermaidRender(this.graphID, graphString, this.svgCallback)
    },
    svgCallback(svgGraph) {
      svgGraph = this.svgElement
      console.log(this.svgElement)
      return this.svgElement
    }
  }
};
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  text-align: center;
}
aside {
  background-color: red
}
main {
  background-color: lightcyan
}

</style>
