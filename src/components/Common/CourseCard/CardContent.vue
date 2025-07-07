<template>
  <div :class="['lxp-course-card__body', { resources: tabText === 'resources' || tab === 'resources' }]">
    <div :class="['lxp-course-card__content', { resources: tabText === 'resources' || tab === 'resources' }]">
      <div v-if="tab !== 'resources'">
        <!-- Non-resource layout -->
        <div class="lxp-course-card__sub-title" @click.stop="$emit('subTitleClick')" v-if="cardSubTitle">
          {{ cardSubTitle }}
        </div>
        <div class="lxp-course-card__title">{{ cardTitle }}</div>
      </div>
      <div v-else>
        <!-- Resource layout (like screenshot) -->
        <div class="resource-main-title" @click.stop="$emit('subTitleClick')" v-if="cardTitle">
          {{ cardTitle }}
        </div>
        <div class="resource-sub-title" v-if="cardSubTitle">
          {{ cardSubTitle }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: ["cardSubTitle", "cardTitle", "tabText", "tab"],
};
</script>

<style lang="scss">
.lxp-course-card__body {
  padding: 8px 16px;
  min-height: 85px;
  max-height: 97px;
  overflow: hidden;

  &.resources {
    padding: 16px 0px;
    min-height: unset;
    max-height: unset;
  }

  .lxp-course-card__content {
    text-align: left;

    &.resources {
      min-height: unset;
      max-height: unset;
    }

    // Normal tab (non-resource)
    .lxp-course-card__sub-title {
      @include label-large($font-color: $brand-neutral-300);
      margin-bottom: 0;
      margin-left: -4px;
      padding: 1.5px 4px;
      display: block;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;

      &:hover {
        background: $brand-neutral-50;
        border-radius: 8px;
      }
    }

    .lxp-course-card__title {
      @include body-regular($brand-neutral-900);
      display: -webkit-box;
      -webkit-line-clamp: 3;
      -webkit-box-orient: vertical;
      overflow: hidden;
      white-space: normal;
    }

    // Resource tab (screenshot style)
    .resource-main-title {
      height: 54px;
      text-align: left;
      font-size: 16px;
      line-height: 24px;
      letter-spacing: .25px;
      font-weight: 400;
      color: #161616;
      display: -webkit-box;
      -webkit-line-clamp: 2;
      -webkit-box-orient: vertical;
      overflow: hidden;
      word-wrap: break-word;
    }

    .resource-sub-title {
    padding-top: 8px;
    font-size: 14px;
    line-height: 21px;
    letter-spacing: .1px;
    font-weight: 500;
    color: #a0a0a0;
    color: #6f6f6f;
    margin-bottom: 0;
    cursor: pointer;
    height: 24px;
    padding: 1.5px 4px;
    margin-left: -4px;
    }
  }
}
</style>
