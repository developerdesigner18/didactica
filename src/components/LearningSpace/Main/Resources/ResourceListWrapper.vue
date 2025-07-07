<template>
  <div class="w-100 ls-resources_cards">
    <div
      class="ls-resources__results--card"
      v-for="(course, index) in data"
      :key="index"
    >
      <LxpCourseCard
        :card-sub-title="course.org_display_name"
        :card-title="course.title"
        :card-image="course.image_url"
        :tab="tab"
        tag-class="ls-resources__card--tag"
        footer-class="ls-resource__card--footer"
        @card-click="$parent.$emit('card-click', course)"
        @card-subtitle-click="$parent.$emit('card-subtitle-click', course.org)"
      >
        <template #footer>
          <course-card-footer :course="course" :tab="tab"/>
        </template>
      </LxpCourseCard>
    </div>
  </div>
</template>
<script>
import { LxpCourseCard } from "@/components/Common/index.js";
import CourseCardFooter from "../../Shared/CourseCardFooter.vue";
export default {
  props: ["data", "count", "tab"],
  components: {
    LxpCourseCard,
    CourseCardFooter
  },
  methods: {
    pacing(course) {
      return course.pacing === "self" ? "Self-paced" : "Instructor-led";
    }
  }
};
</script>
<style lang="scss">
.ls-resources_cards{
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  .ls-resources__results--card{
    width: 100% !important;
    margin: 0px !important;
    float: unset !important;
  }
}
.ls-resource__card--footer {
  display: flex;
  align-items: flex-end;
  .resource-card__footer {
    @include horizontal-space-between;
    width: 100%;
    .resource-card__footer--div {
      display: flex;
      p {
        @include label-medium(500);
        margin-left: 5px;
      }
    }
    .resource-card__language {
      p {
        text-transform: uppercase;
      }
    }
  }
}
</style>
