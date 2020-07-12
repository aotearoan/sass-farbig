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
      <swatch name="brand"></swatch>
      <swatch name="primary"></swatch>
      <swatch name="info"></swatch>
      <swatch name="success"></swatch>
      <swatch name="warn"></swatch>
      <swatch name="error"></swatch>
    </div>
  </div>
</template>

<script lang="ts" src="./App.ts"></script>
<style lang="scss" src="./App.scss"></style>
