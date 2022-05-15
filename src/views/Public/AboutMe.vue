<template>
  <article>
    <section class="about-me__section-title">
      <h1 class="about-me__title">
        About me
      </h1>

      <p class="about-me__subtitle">
        I constantly mind blow myself
      </p>
    </section>

    <section class="about-me__section-body">
      <p class="about-me__text">
        Some content here...
      </p>
    </section>

    <section class="about-me__section-body">
      <p class="about-me__text">
        Want to go somewhere else?
      </p>

      <router-link :to="{ name: 'Home' }">
        Go to Home
      </router-link>
    </section>

    <section class="about-me__section-body">
      <p class="about-me__text">
        Some content also here...
      </p>
    </section>
  </article>
</template>
