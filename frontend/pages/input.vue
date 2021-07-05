<template>
  <main>
    <div class="input">
      <div class="height flex">
        <p>身長</p>
        <input type="text" v-model="personally_information.height" />
      </div>
      <div class="height flex">
        <p>体重</p>
        <input type="text" v-model="personally_information.weight" />
      </div>
      <div class="height flex">
        <p>年齢</p>
        <input type="text" v-model="personally_information.age" />
      </div>
      <div class="height flex">
        <p>性別</p>
        <select v-model="personally_information.sex" id="">
          <option>男</option>
          <option>女</option>
        </select>
      </div>
      <div class="height flex">
        <p>活動レベル</p>
        <select v-model="personally_information.work_level" id="">
          <option :value="1.2">ほぼ運動しない。通勤、デスクワーク程度</option>
          <option :value="1.375">軽い運動。週に1回〜2回程度の運動</option>
          <option :value="1.55">中程度の運動。週に3回〜5回程度の運動</option>
          <option :value="1.725">激しい運動。週に6回〜7回程度の運動</option>
          <option :value="1.9">非常に激しい運動。１日に2回程度の運動</option>
        </select>
      </div>
      <div class="height flex">
        <p>地域</p>
        <input type="text" v-model="personally_information.area" />
      </div>
    </div>
    <div class="new-submit-btn" @click="submit()">送信</div>
    {{ resopnse }}
  </main>
</template>

<script>
export default {
  data() {
    return {
      personally_information: {
        height: "",
        weight: "",
        age: "",
        sex: "",
        work_level: "",
        area: "",
      },
      resopnse: null,
    };
  },
  methods: {
    async submit() {
      this.$axios
        .$post("/json/retort", this.personally_information)
        .then((resopnse) => {
          console.log("送信したテキスト：" + resopnse);
          console.log("受け取り");
          this.resopnse = resopnse;
        });
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
