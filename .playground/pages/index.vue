<script setup lang="ts">
definePageMeta({
  layout: 'webapp',
})
const value = ref(0)
</script>

<template>
  <div>
    <TgSection title="Заголовок секции">
      <TgCell title="Название" description="Названьице" type="button" color="danger">
        <template #right>
          123
        </template>
      </TgCell>
      <TgCell title="Название" type="button" icon="fluent:accessibility-16-regular" />
      <template #append>
        Навали туда большого текста пожалуйста, давай там лорем ипсум хуипсум это всё
      </template>
    </TgSection>

    <TgSection content>
      <TgButton size="lg" to="/_dev" icon="material-symbols:qr-code">
        Go to dev page
      </TgButton>
    </TgSection>

    <TgSection title="Is --- still your number?" content>
      <p class="tg-hint text-xs mb-4">
        Keep your number up to date to ensure you can always log into Telegram
      </p>
      <div class="flex space-x-2">
        <TgButton color="primary">
          Yes
        </TgButton>
        <TgButton color="primary">
          No
        </TgButton>
      </div>
    </TgSection>

    <TgSection title="Account">
      <TgCell title="@username" description="Username">
        <template #right>
          <TgButton size="sm">
            Add username
          </TgButton>
        </template>
      </TgCell>
      <TgCell title="Bio" description="Add a few words about yourself">
        <template #right>
          <TgStepper v-model:value="value" title="Add" />
        </template>
      </TgCell>
    </TgSection>

    <TgSection title="Settings">
      <TgCell title="Chat Settings" icon="solar:chat-round-outline" to="/" />
      <TgCell title="Privacy And Security" icon="heroicons:lock-closed" to="/" />
    </TgSection>

    <TgSection title="This device">
      <TgCell title="Samsung Galaxy S22 Ultra" subtitle="Telegram Android 10.1.3" description="Moscow, Russia • online">
        <template #icon>
          <TgIconBox icon="material-symbols:android" round color="primary" />
        </template>
      </TgCell>
      <TgCell title="Terminate All Other Sessions" icon="ion:hand-left-outline" color="danger" />
    </TgSection>

    <TgSection title="Notifications for chats">
      <TgCell title="Private Chats" description="Off, 73 exceptions" />
      <TgCell title="Groups" description="Off, 73 exceptions" />
      <TgCell title="Groups" description="Off, 73 exceptions" />
    </TgSection>
  </div>
</template>
