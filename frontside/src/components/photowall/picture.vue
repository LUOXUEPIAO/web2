<template>
<div class="pic">
      
              <a  target="_blank" class="card"
                ref="card"
                 @mousemove="move"
                @mouseleave="leave"
                @mouseover="over" >
                  <div class="reflection" ref="refl"></div>
            <img :src="img" class="image" />
          </a> 
   
   </div>

          
</template>
<script>
export default {
    props: ["img"],
    mounted() {},
  data: () => ({
    debounce: null }),

  methods: {
    over() {
      const refl = this.$refs.refl;
         refl.style.opacity = 1;
    },
  
    leave() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;
      card.style.transform = `perspective(500px) scale(1)`;
      refl.style.opacity = 0;
    },
    move() {
      const card = this.$refs.card;
      const refl = this.$refs.refl;

      const relX = (event.offsetX + 1) / card.offsetWidth;
      const relY = (event.offsetY + 1) / card.offsetHeight;
      const rotY = `rotateY(${(relX - 0.5) * 60}deg)`;
      const rotX = `rotateX(${(relY - 0.5) * -60}deg)`;
      card.style.transform = `perspective(500px) scale(2) ${rotY} ${rotX}`;

      const lightX = this.scale(relX, 0, 1, 150, -50);
      const lightY = this.scale(relY, 0, 1, 30, -100);
      const lightConstrain = Math.min(Math.max(relY, 0.3), 0.7);
      const lightOpacity = this.scale(lightConstrain, 0.3, 1, 1, 0) * 255;
      const lightShade = `rgba(${lightOpacity}, ${lightOpacity}, ${lightOpacity}, 1)`;
      const lightShadeBlack = `rgba(0, 0, 0, 1)`;
      refl.style.backgroundImage = `radial-gradient(circle at ${lightX}% ${lightY}%, ${lightShade} 20%, ${lightShadeBlack})`;
    },
    scale(val, inMin, inMax, outMin, outMax){
       
    return outMin + (val - inMin) * (outMax - outMin) / (inMax - inMin) 
    } 
    
}
}
</script>
<style scoped>
.pic{
    margin: 0;
	
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	padding: 0 40px;
	font-family: "Source Sans Pro", Helvetica, sans-serif;
	font-weight: 300;
	
}
/* a{
    transform: perspective(500px) scale(1);
} */
/* #grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, 150px);
  grid-column-gap: 30px;
  grid-row-gap: 30px;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 700px;
} */
#grid .card {
  background-color: #ccc;
  width: 170px;
  height: 120px;
  transition: all 0.1s ease;
  border-radius: 3px;
  position: relative;
  z-index: 1;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0);
  overflow: hidden;
  cursor: pointer;
}
#grid .card:hover {
  -webkit-transform: scale(2);
          transform: scale(2);
  z-index: 2;
  box-shadow: 0 10px 20px rgba(0, 0, 0, 0.4);
}
#grid .card:hover img {
  -webkit-filter: grayscale(0);
          filter: grayscale(0);
}
#grid .card .reflection {
  position: absolute;
  width: 100%;
  height: 100%;
  z-index: 2;
  left: 0;
  top: 0;
  transition: all 0.1s ease;
  opacity: 0;
  mix-blend-mode: soft-light;
}
#grid .card img {
  width: 100%;
  height: 100%;
  -o-object-fit: cover;
     object-fit: cover;
  -webkit-filter: grayscale(0.65);
          filter: grayscale(0.65);
  transition: all 0.3s ease;
}
</style>