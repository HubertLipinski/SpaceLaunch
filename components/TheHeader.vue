<template>
  <div class="container mx-auto h-32 sticky top-0 flex justify-between items-center z-10">
    <h1 class="text-logo">SpaceLaunch</h1>
    <nav class="w-1/4 text-center">
      <ul class="w-100 flex justify-between">
        <li>
          <nuxt-link to="/" class="nav-link">Home</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/details" class="nav-link">Details</nuxt-link>
        </li>
        <li>
          <nuxt-link to="/rockets" class="nav-link">Rockets</nuxt-link>
        </li>
      </ul>
    </nav>
  </div>
</template>
