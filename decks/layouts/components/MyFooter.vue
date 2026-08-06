<template>
  <div
    class="absolute bottom-0 left-0 right-0
           h-10
           bg-slate-100/90
           backdrop-blur
           border-t
           px-6
           flex items-center justify-between
           text-sm">

    <!-- Presentation title -->
    <div>IIoT: Introduction to Industrial Internet of Things</div>

    <!-- Author + Date -->
    <div class="text-center">
      <div>Prof. Adriano Ruseler</div>    
      <div class="text-xs text-gray-500">{{ today }}</div> 
    </div>

    <!-- Slide number -->
    <div class="font-mono">
      {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
    </div>

  </div>
</template>

<script setup lang="ts">
const today = new Intl.DateTimeFormat('en-US', {
  year: 'numeric',
  month: 'long',
  day: 'numeric',
}).format(new Date())
</script>