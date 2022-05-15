<template>
  <article>
    <section class="home__section-title">
      <h1 class="home__title">
        Home
      </h1>
    </section>

    <section class="home__section-body">
      <p class="home__text">
        Some content here...
      </p>
    </section>

    <section class="home__section-body">
      <p class="home__text">
        Want to know more about me?
      </p>

      <router-link :to="{ name: 'Home' }">
        Go to About Me
      </router-link>
    </section>

    <section class="home__section-body">
      <p class="home__text">
        Some content also here...
      </p>
    </section>
  </article>
</template>
