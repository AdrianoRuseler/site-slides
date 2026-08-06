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
    <div>IIoT: Template</div>

    <!-- Author + Date -->
    <div class="text-center">
      <div>Prof. Adriano Ruseler</div>    
      <div class="text-xs text-gray-500">06/07/2026</div> 
    </div>

    <!-- Slide number -->
    <div class="font-mono">
      {{ $slidev.nav.currentPage }} / {{ $slidev.nav.total }}
    </div>

  </div>
</template>
