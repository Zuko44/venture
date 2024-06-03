<script setup lang="ts">
import { Alert, Space } from "ant-design-vue";

interface Props {
  error: String;
}

const props = defineProps<Props>();
</script>

<template>
  <div>
    <Alert message="Error" :description="props.error" type="error" showIcon />
  </div>
</template>
