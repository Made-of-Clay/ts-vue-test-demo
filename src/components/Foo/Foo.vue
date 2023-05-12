<template>
    <div class="foo" :class="{ 'foo--dark': dark }">
        <slot />
    </div>
</template>

<script setup lang="ts">
defineProps({
    dark: Boolean,
});
</script>
