<template>
  <div class="app-wrapper">
    <header>
      <h1>SASS Farbig test application</h1>
      <div class="theme-switcher">
        <span :class="{ 'theme-selected': theme === 'light' }" @click="switchTheme('light')">light</span>
        <span :class="{ 'theme-selected': theme === 'dark' }" @click="switchTheme('dark')">dark</span>
      </div>
    </header>
    <div id="app" class="app">
      <swatch-legend></swatch-legend>
      <swatch name="low-contrast"></swatch>
      <swatch name="neutral"></swatch>
      <swatch name="high-contrast"></swatch>
      <swatch name="primary"></swatch>
      <swatch name="info"></swatch>
      <swatch name="success"></swatch>
      <swatch name="warn"></swatch>
      <swatch name="error"></swatch>
      <div class="validation-failed">
        <h2>Contrast ratio validation errors</h2>
        <div class="validation-error-container">
          <div v-for="i in 360" :key="`validation-l${i}`" class="validation-error" :class="`validation-error-l1-${i}`">L1 hue = {{ i }}</div>
          <div v-for="i in 360" :key="`validation-d${i}`" class="validation-error" :class="`validation-error-d1-${i}`">D1 hue = {{ i }}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
