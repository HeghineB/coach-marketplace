 <template>
  <v-carousel hide-controls>
    <v-carousel-item v-for="(item,i) in items" :key="i" :src="item.src">
      <v-container class="articleImg" fill-height fluid>
        <v-layout fill-height align-start>
          <v-flex xs12 sm4 flexbox>
            <span
              class="headline white--text font-weight-thin font-italic"
            >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
          </v-flex>
        </v-layout>
      </v-container>
    </v-carousel-item>
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
.articleImg {
  background: linear-gradient(
    to left,
    rgba(0, 0, 0, 0),
    70%,
    rgba(0, 0, 0, 0.9)
  );
}
</style>


