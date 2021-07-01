<template>
  <main>
    <div class="input">
      <div class="height flex">
        <p>身長</p>
        <input type="text" v-model="test.height" />
      </div>
      <div class="height flex">
        <p>体重</p>
        <input type="text" v-model="test.weight" />
      </div>
      <!-- <div class="height flex">
        <p>年齢</p>
        <input type="text" />
      </div>
      <div class="height flex">
        <p>性別</p>
        <input type="text" />
      </div>
      <div class="height flex">
        <p>地域</p>
        <input type="text" />
      </div> -->
    </div>
    <div class="new-submit-btn" @click="submit()">送信</div>
  </main>
</template>

<script>
export default {
  data() {
    return {
      test: {
        height: "",
        weight: "",
      },
    };
  },
  methods: {
    async submit() {
      let params = new URLSearchParams();
      params.append('text', 'テストだよー');
      this.$axios
        .$post("json/retort", this.test)
        .then((resopnse) => {
          console.log("送信したテキスト：" + resopnse.data.text);
        });
      console.log(params);
    },
  },
};
</script>

<style>
.input {
  display: flex;
  flex-flow: column;
  justify-content: center;
  align-items: center;
}
.flex {
  display: flex;
}
</style>
