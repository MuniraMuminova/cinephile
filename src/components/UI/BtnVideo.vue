 <template>
    <button class="more more-trailer">
         <fa icon="play" class="more__icon" />
        <span class="more__text">Смотерть трейлер</span>
    </button>
</template>
    

  
  <script>
  export default {
   props: {
    id: Number,
    page: {
      type: String,
    },
   

  },
  }
  </script>
  
  <style lang="scss">
  .more {
    cursor: pointer;
    width: 250px;
    height: 50px;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    background: #149a03;
    border-radius: 10px;
    color: white;
    &__icon {
      font-size: 20px;
    }
    &__span {
      font-size: 20px;
      line-height: 30px;
    }
  }
  </style>