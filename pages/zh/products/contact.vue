<template>
  <div class="contact-page">
    <UiSection :title="$t('contact.title')">
      <div class="contact-layout">
        <!-- Contact Form -->
        <div class="contact-form-wrapper">
          <form class="contact-form" @submit.prevent="handleSubmit">
            <div class="form-group">
              <label for="name">{{ $t('contact.name') }} *</label>
              <input id="name" v-model="form.name" type="text" required />
            </div>
            <div class="form-group">
              <label for="email">{{ $t('contact.email') }} *</label>
              <input id="email" v-model="form.email" type="email" required />
            </div>
            <div class="form-group">
              <label for="phone">{{ $t('contact.phone') }}</label>
              <input id="phone" v-model="form.phone" type="tel" />
            </div>
            <div class="form-group">
              <label for="subject">{{ $t('contact.subject') }}</label>
              <input id="subject" v-model="form.subject" type="text" />
            </div>
            <div class="form-group">
              <label for="message">{{ $t('contact.message') }} *</label>
              <textarea id="message" v-model="form.message" rows="5" required></textarea>
            </div>
            <button type="submit" class="btn-submit" :disabled="isSubmitting">
              {{ isSubmitting ? $t('common.loading') : $t('contact.send') }}
            </button>
            <p v-if="successMessage" class="success-msg">{{ $t('contact.successMessage') }}</p>
            <p v-if="errorMessage" class="error-msg">{{ $t('contact.errorMessage') }}</p>
          </form>
        </div>

        <!-- Contact Info -->
        <aside class="contact-info">
          <div class="info-card">
            <h3>{{ $t('footer.contactInfo') }}</h3>
            <address>
              <p>
                <strong>{{ $t('footer.address') }}</strong>
              </p>
              <p>
                <a :href="'tel:' + $t('footer.phone').replace(/\s/g, '')">{{ $t('footer.phone') }}</a>
              </p>
              <p>
                <a :href="'mailto:' + $t('footer.email')">{{ $t('footer.email') }}</a>
              </p>
              <p>
                <a :href="'https://wa.me/61498855910'" target="_blank" rel="noopener">{{ $t('footer.whatsapp') }}</a>
              </p>
            </address>

            <div class="social-section">
              <h4>{{ $t('footer.followUs') }}</h4>
              <div class="social-links">
                <a href="https://www.facebook.com/share/14ziZmy3s2/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer">Facebook</a>
                <a href="https://www.instagram.com/divers_fishing_charters/profilecard/?igsh=MWE3a2RpcTJ6NHdsMQ==" target="_blank" rel="noopener noreferrer">Instagram</a>
              </div>
            </div>
          </div>
        </aside>
      </div>
    </UiSection>
  </div>
</template>

<script setup lang="ts">
const { t } = useI18n()
const { useTravelAgency, useBreadcrumbList } = useJsonLd()

useTravelAgency()
useBreadcrumbList([{ name: 'Home', path: '/' }, { name: 'Contact', path: '/contact' }])

const form = reactive({
  name: '',
  email: '',
  phone: '',
  subject: '',
  message: '',
})

const isSubmitting = ref(false)
const successMessage = ref(false)
const errorMessage = ref(false)

async function handleSubmit() {
  isSubmitting.value = true
  errorMessage.value = false
  successMessage.value = false

  // Simulate form submission (replace with actual API call)
  await new Promise(resolve => setTimeout(resolve, 1000))

  successMessage.value = true
  isSubmitting.value = false

  // Reset form
  Object.assign(form, { name: '', email: '', phone: '', subject: '', message: '' })
}

useHead({
  title: `${t('contact.title')} | Diver's Fishing Charters Hobart`,
  meta: [
    { name: 'description', content: t('seo.contactDescription') },
  ],
  link: [{ rel: 'canonical', href: 'https://www.tasyachttrip.com.au/contact' }],
})
</script>

<style lang="scss" scoped>
.contact-layout {
  display: grid;
  grid-template-columns: 1fr;
  gap: 3rem;

  @include lg {
    grid-template-columns: 1fr 340px;
  }
}

.contact-form {
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
}

.form-group {
  display: flex;
  flex-direction: column;
  gap: 0.375rem;

  label {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-gray-700;
  }

  input,
  textarea {
    padding: 0.75rem 1rem;
    font-size: $font-size-base;
    border: 1px solid $color-gray-300;
    border-radius: $radius-md;
    transition: border-color $transition-fast;
    background: $color-white;

    &:focus {
      outline: none;
      border-color: $color-primary;
    }
  }
}

.btn-submit {
  @include button-base;
  background: $color-primary;
  color: $color-white;
  align-self: flex-start;
  padding: 0.875rem 2rem;

  &:hover:not(:disabled) {
    background: $color-primary-dark;
    color: $color-white;
  }

  &:disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
}

.success-msg {
  color: $color-success;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
}

.error-msg {
  color: $color-danger;
  font-size: $font-size-sm;
  font-weight: $font-weight-medium;
}

.info-card {
  background: $color-gray-50;
  border: 1px solid $color-gray-200;
  border-radius: $radius-lg;
  padding: 1.5rem;

  h3 {
    font-size: $font-size-lg;
    margin-bottom: 1rem;
  }

  address {
    font-style: normal;
    display: flex;
    flex-direction: column;
    gap: 0.5rem;
    margin-bottom: 1.5rem;

    p {
      font-size: $font-size-sm;
      color: $color-gray-700;
    }

    a {
      color: $color-primary;

      &:hover {
        color: $color-primary-dark;
      }
    }
  }
}

.social-section {
  padding-top: 1.5rem;
  border-top: 1px solid $color-gray-200;

  h4 {
    font-size: $font-size-sm;
    font-weight: $font-weight-semibold;
    margin-bottom: 0.75rem;
  }
}

.social-links {
  display: flex;
  gap: 1rem;

  a {
    font-size: $font-size-sm;
    font-weight: $font-weight-medium;
    color: $color-primary;

    &:hover {
      color: $color-primary-dark;
    }
  }
}
</style>
