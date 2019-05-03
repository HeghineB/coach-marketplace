 <template>
  <v-carousel hide-controls>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src"></v-carousel-item>
  </v-carousel>
</template>
 

<script>
export default {
  name: "ArticlesLanding",

  data() {
    return {
      items: [
        {
          src: "https://source.unsplash.com/featured/?sports"
        },
        {
          src: "https://source.unsplash.com/featured/?climbing"
        },
        {
          src: "https://source.unsplash.com/featured/?sport"
        },
        {
          src: "https://source.unsplash.com/featured/?fitnes"
        }
      ]
    };
  }
};
</script>

<style scoped>
</style>


