<template>
    <div class="swatch">
        <div class="color-reference" :class="`color-reference-${name}`"></div>
        <div class="swatch-item text-color-light" v-for="l in 5" :key="`${name}L${6 - l}`" :class="`farbig-${name}-bg-color-l${6 - l}`">{{ `${name}-l${6- l}` }}</div>
        <div class="swatch-item" :class="`farbig-${name}-bg-color-default`"></div>
        <div class="swatch-item text-color-dark" v-for="l in 5" :key="`${name}D${l}`" :class="`farbig-${name}-bg-color-d${l}`">{{ `${name}-d${l}` }}</div>
    </div>
</template>

<script lang="ts" src="./Swatch.ts"></script>
