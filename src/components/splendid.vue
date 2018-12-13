<template>
  <div class="splendid">
    <!-- <hgroup>
      将h标签包起来
      <h1></h1>
    </hgroup>
    <header>
      头
      <nav>标题</nav>
    </header>
    <aside>侧边栏</aside>

    <footer>
      底部
    </footer> -->
    <!-- <iframe src="localhost:" frameborder="0"></iframe> -->
    <!-- <div class="wrap">
      
    </div> -->
    <canvas id="canvas" width="600" height="600" style="background-color: #ccc;"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Splendid',
  data () {
    return {
    }
  },
  mounted(){
    console.log('111');
    let canvas = document.getElementById('canvas');
    let context = canvas.getContext('2d');

    context.fillRect(10,10,50,50);
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="scss" scoped>
  .splendid{
    margin: 0;
    height: 100%;
    width: 100%;
    background-color: #fff;
    border: 1px solid red;
  }
  .wrap{
    width: 800px;
    height: 200px;
    background-color: #fff;
    margin: 80px auto;
  }
</style>
