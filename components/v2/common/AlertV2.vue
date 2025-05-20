<template>
  <v-dialog v-model="showDialog" width="auto" :persistent="true">
    <v-card>
      <template v-slot:actions>
        <div class="selfcare-alert" :class="{'confirm': confirm}">
          <div class="pop-content">
            <div class="info-con">
              <p class="icon success"><span class="blind">안내 아이콘</span></p>
              <p class="text" v-html="textData.title"></p>
              <p v-if="textData.description" class="description" v-html="textData.description"></p>
              <p v-if="textData.attention" class="attention-sign" v-html="textData.attention"></p>
              <slot></slot>
            </div>
          </div>
          <div class="pop-footer">
            <div class="btn-group">
              <button type="button" class="button" @click="closeDialog">
                {{ buttonText.cancel }}
              </button>
              <button
                v-if="confirm"
                type="button"
                class="button primary"
                @click="proceed"
              >
                {{ buttonText.confirm }}
              </button>
            </div>
          </div>
        </div>
      </template>
    </v-card>
  </v-dialog>
</template>

<script setup>
  import { ref, defineProps, defineEmits, watch } from 'vue';

  const props = defineProps({
    textData: {
      type: Object,
      default: () => ({
        title: '기본 안내 텍스트',
        description: '기본 설명 텍스트',
        attention: '주의 사항 텍스트'
      })
    },
    buttonText: {
      type: Object,
      default: () => ({
        cancel: '확인',
        confirm: '확인'
      })
    },
    confirm: { type: Boolean, default: false },
    modelValue: { type: Boolean, default: false }
  });

  const emit = defineEmits(['update:modelValue', 'close', 'proceed']);

  const showDialog = ref(props.modelValue);

  watch(
    () => props.modelValue,
    (newVal) => {
      showDialog.value = newVal;
    }
  );

  const closeDialog = () => {
    showDialog.value = false;
    emit('update:modelValue', false);
    emit('close');
  };

  const proceed = () => {
    emit('proceed');
  };
</script>
