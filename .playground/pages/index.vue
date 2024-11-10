<script setup lang="ts">
definePageMeta({
  layout: 'webapp',
})
const value = ref(0)

usePlatform('ios')
</script>

<template>
  <TgContent>
    <TgSection content inset>
      <TgButton size="lg" to="/_dev" icon="material-symbols:qr-code">
        Go to dev page
      </TgButton>
    </TgSection>

    <TgSection title="Is --- still your number?" content inset>
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

    <TgSection title="Account" inset>
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

    <TgSection title="Settings" inset>
      <TgCell title="Chat Settings" to="/">
        <template #prepend>
          <TgIconBox icon="solar:chat-round-outline" size="sm" :round="false" class="bg-lime-500" />
        </template>
      </TgCell>
      <TgCell title="Privacy And Security" icon="heroicons:lock-closed" to="/" />
    </TgSection>

    <TgSection inset>
      <TgCell title="Chat Settings" to="/">
        <template #icon>
          <TgIconBox icon="solar:chat-round-outline" size="sm" :round="false" class="bg-gradient-to-br from-lime-500 to-green-800" />
        </template>
      </TgCell>
      <TgCell title="Privacy And Security" icon="heroicons:lock-closed" to="/" />
    </TgSection>

    <TgSection title="This device" inset>
      <TgCell title="Samsung Galaxy S22 Ultra" subtitle="Telegram Android 10.1.3" description="Moscow, Russia • online">
        <template #icon>
          <TgIconBox icon="material-symbols:android" round color="primary" />
        </template>
      </TgCell>
      <TgCell title="Terminate All Other Sessions" icon="ion:hand-left-outline" color="danger" />
    </TgSection>

    <TgSection title="Notifications for chats" inset>
      <TgCell title="Private Chats" description="Off, 73 exceptions" />
      <TgCell title="Groups" description="Off, 73 exceptions" />
      <TgCell title="Groups" description="Off, 73 exceptions" />
    </TgSection>

    <TgSection title="TgSection Title" class="mb-6">
      <TgCell title="Simple TgCell without icon" />
      <TgCell title="TgCell with to prop" to="/" />
      <TgCell title="TgCell with to prop and link color" to="/" color="link" />
      <TgCell title="TgCell with icon and to prop" icon="heroicons:lock-closed" to="/" icon-color="lime" />
      <TgCell title="This is title" icon="fluent:alert-badge-16-regular" description="This is description for this beautiful cell" icon-color="sky" />
      <TgCell
        title="This is title"
        subtitle="This is subtitle"
        description="This is description for this beautiful cell"
        icon="fluent:add-square-32-regular"
        icon-color="red"
      />

      <template #append>
        This is TgSection append slot. Used for some descriptions
      </template>
    </TgSection>

    <TgSection title="Section title">
      <TgCell title="Cell 1" />
      <TgCell title="Cell 2" />
    </TgSection>

    <TgSection title="Section title" content>
      <p>Some section content</p>
    </TgSection>

    <div class="p-16" />
  </TgContent>
</template>
