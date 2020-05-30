<template>
    <div class="swatch-legend">
        <div class="swatch-legend-reference">Reference color</div>
        <div class="swatch-legend-item" v-for="l in 5" :key="`L${6 - l}`">{{ `L${6- l}` }}</div>
        <div class="swatch-legend-item" v-for="l in 5" :key="`D${l}`">{{ `D${l}` }}</div>
    </div>
</template>

<script lang="ts" src="./SwatchLegend.ts"></script>
