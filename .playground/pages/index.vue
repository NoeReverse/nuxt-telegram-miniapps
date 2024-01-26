<script setup lang="ts">
definePageMeta({
  layout: 'webapp',
})
const value = ref(0)
</script>

<template>
  <div>
    <TgPanel content>
      <TgButton size="lg" to="/" icon="material-symbols:qr-code">
        Link Desktop Device
      </TgButton>
    </TgPanel>

    <TgPanel title="Is --- still your number?" content>
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
    </TgPanel>

    <TgPanel title="Account">
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
    </TgPanel>

    <TgPanel title="Settings">
      <TgCell title="Chat Settings" icon="solar:chat-round-outline" to="/" />
      <TgCell title="Privacy And Security" icon="heroicons:lock-closed" to="/" />
    </TgPanel>

    <TgPanel title="This device">
      <TgCell title="Samsung Galaxy S22 Ultra" subtitle="Telegram Android 10.1.3" description="Moscow, Russia • online">
        <template #icon>
          <TgIconBox icon="material-symbols:android" round color="primary" />
        </template>
      </TgCell>
      <TgCell title="Terminate All Other Sessions" icon="ion:hand-left-outline" color="danger" />
    </TgPanel>

    <tgPanel title="Notifications for chats">
      <TgCell title="Private Chats" description="Off, 73 exceptions" />
      <TgCell title="Groups" description="Off, 73 exceptions" />
      <TgCell title="Groups" description="Off, 73 exceptions" />
    </tgPanel>
  </div>
</template>
