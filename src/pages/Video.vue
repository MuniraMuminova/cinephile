<template>
  <div class="block" v-if="movie">
    <fa icon="xmark" class="main__info-close" @click="$emit('close')"/>
     <iframe :src="movie" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"></iframe>
  </div>
  
  </template>
  
  <script>
  export default {
  props:['movie']
  }
  </script>
  
  <style>
  .main__medias {
    position: relative;
  }
  .video {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  
  }
  iframe{
     width: 1000px;
     height: 600px;
     border: none;
     padding: 20px;
     background: grey;
  }
  </style>