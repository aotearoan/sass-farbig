<template>
    <div class="swatch">
        <div class="color-reference" :class="`color-reference-${name}`"></div>
        <div
          class="swatch-item"
          v-for="l in 5"
          :key="`${name}L${6 - l}`"
          :class="[
            `farbig-${name}-bg-color-l${6 - l}`,
            name === 'low-contrast' && l === 5 ? 'text-color-dark' : 'text-color-light',
          ]"
        >{{ `${name}-l${6- l}` }}</div>
        <div
          class="swatch-item"
          v-for="l in 5"
          :key="`${name}D${l}`"
          :class="[
            `farbig-${name}-bg-color-d${l}`,
            name === 'low-contrast' && l <= 2 ? 'text-color-light' : 'text-color-dark',
          ]"
        >{{ `${name}-d${l}` }}</div>
    </div>
</template>

<script lang="ts" src="./Swatch.ts"></script>
