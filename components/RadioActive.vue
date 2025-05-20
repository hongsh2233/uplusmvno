<template>
  <div
    class="radio_active"
    :class="{
      item_list: data.option.itemList == 1,
      item_list02: data.option.itemList == 2,
      item_list03: data.option.itemList == 3,
    }"
  >
    <ul>
      <li
        v-for="(a, i) in data.data"
        :key="i"
        :class="{ on: checked == a.id, off: checked != a.id && checked != '' }"
      >
        <div class="radio_item ty01" v-if="data.option.type == 'ty01'">
          <input type="radio" :id="a.id" name="ty01_radio" :value="a.id" v-model="checked" />
          <label :for="a.id">{{ a.value }}</label>
        </div>

        <div class="radio_item ty02" v-if="data.option.type == 'ty02'">
          <input type="radio" :id="a.id" name="ty02_radio" :value="a.id" v-model="checked" />
          <label :for="a.id">
            <img :src="a.img" alt="" v-if="a.img != null" />
            {{ a.value }}
          </label>
        </div>

        <div class="radio_item ty03" v-if="data.option.type == 'ty03'">
          <input type="radio" :id="a.id" name="ty03_radio" :value="a.id" v-model="checked" />
          <label :for="a.id">
            <span class="text_box">
              <span class="desc" v-html="a.value"></span>
              <span class="info" v-html="a.info"></span>
            </span>
          </label>
        </div>

        <div class="radio_item ty04" v-if="data.option.type == 'ty04'">
          <input type="radio" :id="a.id" name="ty04_radio" :value="a.id" v-model="checked" />
          <label :for="a.id">
            <span class="text_box">
              <span class="desc">{{ a.value }}</span>
              <span class="info">{{ a.info }}</span>
            </span>
            <img :src="a.img" alt="" />
          </label>
        </div>

        <div class="radio_item ty05" v-if="data.option.type == 'ty05'">
          <input type="radio" :id="a.id" name="ty05_radio" :value="a.id" v-model="checked" />
          <label :for="a.id">
            <span class="text_box">
              <span class="desc" v-html="a.value"></span>
              <span class="info">{{ a.info }}</span>
            </span>
            <img :src="a.img" alt="" />
          </label>
        </div>

        <div class="radio_item ty08" v-if="data.option.type == 'ty08'">
          <input type="radio" :id="a.id" name="ty08_radio" :value="a.id" v-model="checked" />
          <label :for="a.id">
            <span class="text_box">
              <span class="desc" v-html="a.value"></span>
              <span class="info" v-html="a.info"></span>
            </span>
            <img :src="a.img" alt="" />
          </label>
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "RadioActive",
  emits: ["checkItem"],
  data() {
    return {
      checked: "",
    };
  },
  watch: {
    checked(a) {
      this.$emit("checkItem", a);
    },
  },
  props: {
    data: Object,
  },
};
</script>
