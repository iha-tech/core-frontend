<template>
  <article class="colors">
    <section class="colors__row">
      <h2 class="colors__name">Primary | Radical Red</h2>

      <div class="colors__grid">
        <div class="colors__item colors__item--primary-light3">light3</div>
        <div class="colors__item colors__item--primary-light2">light2</div>
        <div class="colors__item colors__item--primary-light1">light1</div>
        <div class="colors__item colors__item--primary-base">base</div>
        <div class="colors__item colors__item--primary-dark1">dark1</div>
        <div class="colors__item colors__item--primary-dark2">dark2</div>
        <div class="colors__item colors__item--primary-dark3">dark3</div>
      </div>
    </section>

    <section class="colors__row">
      <h2 class="colors__name">Secondary | Sea Green</h2>

      <div class="colors__grid">
        <div class="colors__item colors__item--secondary-light3">light3</div>
        <div class="colors__item colors__item--secondary-light2">light2</div>
        <div class="colors__item colors__item--secondary-light1">light1</div>
        <div class="colors__item colors__item--secondary-base">base</div>
        <div class="colors__item colors__item--secondary-dark1">dark1</div>
        <div class="colors__item colors__item--secondary-dark2">dark2</div>
        <div class="colors__item colors__item--secondary-dark3">dark3</div>
      </div>
    </section>

    <section class="colors__row">
      <h2 class="colors__name">Tertiary | Xanthic</h2>

      <div class="colors__grid">
        <div class="colors__item colors__item--tertiary-light3">light3</div>
        <div class="colors__item colors__item--tertiary-light2">light2</div>
        <div class="colors__item colors__item--tertiary-light1">light1</div>
        <div class="colors__item colors__item--tertiary-base">base</div>
        <div class="colors__item colors__item--tertiary-dark1">dark1</div>
        <div class="colors__item colors__item--tertiary-dark2">dark2</div>
        <div class="colors__item colors__item--tertiary-dark3">dark3</div>
      </div>
    </section>

    <section class="colors__row">
      <h2 class="colors__name">Neutral | Gray</h2>

      <div class="colors__grid">
        <div class="colors__item colors__item--neutral-light3">light3</div>
        <div class="colors__item colors__item--neutral-light2">light2</div>
        <div class="colors__item colors__item--neutral-light1">light1</div>
        <div class="colors__item colors__item--neutral-base">base</div>
        <div class="colors__item colors__item--neutral-dark1">dark1</div>
        <div class="colors__item colors__item--neutral-dark2">dark2</div>
        <div class="colors__item colors__item--neutral-dark3">dark3</div>
      </div>
    </section>
  </article>
</template>

<style lang="scss" scoped>
  @import '@/styles/main';

  .colors {
    &__colors {
      display: block;
    }

    &__row {
      &:not(:last-child) {
        margin-bottom: $base * 9;
      }
    }

    &__grid {
      display: flex;
      flex-direction: row;
      flex-wrap: wrap;
      gap: $base;
    }

    &__item {
      border-radius: $base;
      height: $base * 20;
      padding: $base * 2;
      width: $base * 40;

      &--primary-dark3 {
        background-color: $color-primary-dark3;
        color: $white;
      }

      &--primary-dark2 {
        background-color: $color-primary-dark2;
        color: $white;
      }

      &--primary-dark1 {
        background-color: $color-primary-dark1;
        color: $white;
      }

      &--primary-base {
        background-color: $color-primary-base;
        color: $white;
      }

      &--primary-light1 {
        background-color: $color-primary-light1;
      }

      &--primary-light2 {
        background-color: $color-primary-light2;
      }

      &--primary-light3 {
        background-color: $color-primary-light3;
      }

      &--secondary-dark3 {
        background-color: $color-secondary-dark3;
        color: $white;
      }

      &--secondary-dark2 {
        background-color: $color-secondary-dark2;
        color: $white;
      }

      &--secondary-dark1 {
        background-color: $color-secondary-dark1;
        color: $white;
      }

      &--secondary-base {
        background-color: $color-secondary-base;
      }

      &--secondary-light1 {
        background-color: $color-secondary-light1;
      }

      &--secondary-light2 {
        background-color: $color-secondary-light2;
      }

      &--secondary-light3 {
        background-color: $color-secondary-light3;
      }

      &--tertiary-dark3 {
        background-color: $color-tertiary-dark3;
        color: $white;
      }

      &--tertiary-dark2 {
        background-color: $color-tertiary-dark2;
        color: $white;
      }

      &--tertiary-dark1 {
        background-color: $color-tertiary-dark1;
      }

      &--tertiary-base {
        background-color: $color-tertiary-base;
      }

      &--tertiary-light1 {
        background-color: $color-tertiary-light1;
      }

      &--tertiary-light2 {
        background-color: $color-tertiary-light2;
      }

      &--tertiary-light3 {
        background-color: $color-tertiary-light3;
      }

      &--neutral-dark3 {
        background-color: $color-neutral-dark3;
        color: $white;
      }

      &--neutral-dark2 {
        background-color: $color-neutral-dark2;
        color: $white;
      }

      &--neutral-dark1 {
        background-color: $color-neutral-dark1;
        color: $white;
      }

      &--neutral-base {
        background-color: $color-neutral-base;
        color: $white;
      }

      &--neutral-light1 {
        background-color: $color-neutral-light1;
      }

      &--neutral-light2 {
        background-color: $color-neutral-light2;
      }

      &--neutral-light3 {
        background-color: $color-neutral-light3;
      }
    }
  }
</style>
