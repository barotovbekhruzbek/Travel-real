<template>

  <div class="icons">


    <svg
        width="30"
        height="30"
        viewBox="0 0 36 22"
        xmlns="http://www.w3.org/2000/svg"
        :class="{active : is_active}"
    >
      <g transform="matrix(1,0,0,1,-419.5,-274.131)">
        <g id="arrow_rocket">
          <path
              id="top"
              d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631"
          />
          <g transform="matrix(1,-1.22465e-16,-1.22465e-16,-1,0,569.277)">
            <path
                id="bottom"
                d="M420,274.631L450,274.631C450,274.631 459.044,284.599 450,284.599C440.956,284.599 420,284.646 420,284.646L430.014,274.631"
            />
          </g>
          <g transform="matrix(1,0,0,1,0,-0.0234189)">
            <path id="middle" d="M420,284.646L450,284.646" />
          </g>
        </g>
      </g>
    </svg>
  </div>

</template>

<script>
export default {
  name: "Burger-btn",
  props : {
  is_active : Boolean
  },


}
</script>

<style scoped>
svg {
  fill-rule: evenodd;
  clip-rule: evenodd;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-miterlimit: 1.5;
  cursor:pointer;

}

svg path {
  fill: none;
  stroke: white;
  stroke-width: 2px;
}

svg + svg {
  margin-left: 1.5rem;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: Segoe UI, sans-serif;
}

body {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  background: #7f00ff;
  background: -webkit-linear-gradient(to right, #e100ff, #7f00ff);
  background: linear-gradient(to right, #e100ff, #7f00ff);
  color: white;
  padding: 1rem;
}

h1 {
  font-size: 2.5rem;
  text-transform: uppercase;
  letter-spacing: 5px;
  text-align: center;
  margin-bottom: 2rem;
}

.icons {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  color: white;

}

#top,
#bottom {
  stroke-dasharray: 30, 75.39;
  transition: all 0.6s cubic-bezier(0.6, 0.33, 0.67, 1.29);
}

svg.active #top,
svg.active #bottom {
  stroke-dasharray: 75.39;
  stroke-dashoffset: -60;
}

svg:nth-child(2) {
  transform: rotate(0deg);
  transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
}

svg:nth-child(2) path {
  transition: all 0.4s ease-in-out 0.6s;
}

svg:nth-child(2).active {
  transform: rotate(180deg);
}

.rocket #top {
  stroke-dasharray: 30, 88;
}
</style>