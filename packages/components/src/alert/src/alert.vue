<template>
    <!-- 提示框组件 -->
    <Transition name="tas-alert-fade">
      <div :class="alertClassNames" class="tas-alert" v-if="isShow">
        <tass-icon :name="iconName" class="tas-alert__icon" v-if="showIcon" />
        <div class="tas-alert__content">
          <h3 class="tas-alert__title tas-global-ellipsis">
            {{ title }}
          </h3>
          <p class="tas-alert__desc" v-if="content">
            {{ content }}
          </p>
          <tass-icon
            name="cross"
            class="tas-alert__close-btn"
            v-if="closeable"
            @click="handltaslose"
          />
        </div>
      </div>
    </Transition>
</template>
<template>
    <Transition name="ol-alert-fade">
        
    </Transition>
</template>