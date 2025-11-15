<template>
 <div class="message-box-container">
      <!-- 弹窗遮罩层 -->
       <Transition name="messagefade">
        <div
          v-if="visible"
          class="message-box-mask"
          @click="handleMaskClick"
        ></div>
       </Transition>

      <!-- 弹窗内容 -->
       <Transition name="boxfade">
      <div
        v-if="visible"
        class="message-box"
        :class="messageBoxClass"
        @click.stop  
      >
        <button
          v-if="autoClose"
          class="message-box__close"
          @click="handleClose"
          aria-label="关闭弹窗"
        >
        <svg width="28" height="28" viewBox="0 0 48 48" fill="none"><path d="M8 8L40 40" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/><path d="M8 40L40 8" stroke="#ffffff" stroke-width="4" stroke-linecap="round" stroke-linejoin="round"/></svg>
        </button>
         <div class="message-box__header">
            <h3 class="message-box__header-title">{{ titleDefault }}</h3>
          </div>

        <!-- 图标 -->
        <div class="message-middle-container">
        <div class="message-box__icon">
            <bm-icon v-if ="type === 'info'" :type="'fa-circle-info'" class="message-box__icon" color="var(--bm-color-default-text)" size="5x"/>
            <bm-icon v-if ="type === 'alert'" :type="'fa-bell'" class="message-box__icon" color="var(--bm-color-default-text)" size="5x"/>
            <bm-icon v-if ="type === 'prompt'" :type="'fa-pencil'" class="message-box__icon" color="var(--bm-color-default-text)" size="5x"/>
            <bm-icon v-if ="type === 'error'" :type="'fa-exclamation-triangle'" class="message-box__icon" color="var(--bm-color-default-text)" size="5x"/>
            <bm-icon v-if ="type === 'success'" :type="'fa-check-circle'" class="message-box__icon" color="var(--bm-color-default-text)" size="5x"/>
            <bm-icon v-if ="type === 'check'" :type="'fa-question-circle'" class="message-box__icon" color="var(--bm-color-default-text)" size="5x"/>
            
          </div>
         <!-- 内容区 -->
        <div class="message-box__text">
         
          <div class="message-box__content" :class="messageClass">
            <slot>
              <span v-if="typeof message === 'string' || message === undefined">{{ messageDefault }}</span>
              <component :is="message" v-else-if="message" />
            </slot>
          </div>
            <bm-input
            v-if="type === 'prompt'"
            class="message-box__input"
            v-model="inputValue"
            :placeholder="placeholder"
            @keyup.enter="handleConfirm"
            ref="inputRef"
 
            aria-label="输入内容"
        />
        </div>
 
      </div>
        <!-- 底部按钮区 -->
        <div class="message-box__footer">
          
          <!-- 确认按钮 -->
          <bm-button
            type="primary"
            class="message-box__footer-btn message-box__footer-btn--confirm"
            @click="handleConfirm"
          >
            {{ confirmButtonText }}
          </bm-button>

          <!-- 取消按钮（alert 类型隐藏） -->
          <bm-button
            type="default"
          
            class="message-box__footer-btn message-box__footer-btn--cancel"
            @click="handleCancel"
          >
            {{ cancelButtonText }}
          </bm-button>

        </div>
      </div>
       </Transition>
  </div>
</template>
<script lang="ts" setup>

import './styles/index.less'
import { ref , computed ,onMounted} from 'vue'
import type { MessageBoxProps } from './props'
 

const titleDefault : any = computed(()=>{
  if(props.title){
    return props.title
  }
    switch(props.type){
        case 'prompt':
            return '请输入'
        case 'alert':
            return '提示'
        case 'error':
            return '错误'
        case 'success':
            return '成功'
        case 'check':
            return '确认'
        case 'info':
            return '信息'
        default:
            return '标题'
    }
})
const messageDefault : any = computed(()=>{
  if(props.message){
    return props.message
  }
    switch(props.type){
        case 'prompt':
            return '请输入信息'
        case 'alert':
            return '好像有什么问题'
        case 'error':
            return '发生了错误'
        case 'success':
            return '操作成功'
        case 'check':
            return '请再次仔细确认'
        case 'info':
            return '有些信息需要被传达'
        default:
            return '消息内容'
    }
})
const messageClass = computed(()=>{
    return `message-box__content--${props.type}`
})
const props = withDefaults(defineProps<MessageBoxProps>(), {
  size: 'm',
  type: 'alert',
  confirmButtonText: '确定',
  cancelButtonText: '取消',
  closeOnClickModal: true,
  autoClose: true,
  defaultValue: ''
})

const messageBoxClass = computed(()=>{
    return `message-box-${props.size}`
})
const emit = defineEmits<{
    'update:visible': [visible: boolean]
    confirm: [result: string]
    cancel: []
    close: []
}>()

const inputValue = ref(props.defaultValue||'')
const inputRef = ref<HTMLInputElement>()
const handleMaskClick = ()=>{
    if(props.closeOnClickModal){
        handleCancel();
    }
}
const handleClose = ()=>{
    emit('close')
    emit('update:visible', false)
}
const handleCancel = ()=>{
    emit('cancel')
    emit('update:visible', false)
}
const handleConfirm = ()=>{
    emit('confirm', inputValue.value)
    emit('update:visible', false)
}
 
</script>