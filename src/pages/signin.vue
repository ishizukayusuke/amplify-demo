<template lang="pug">
    amplify-sign-out(
      v-if="isLoggedIn"
    )
    amplify-authenticator(
      v-else
      :authConfig="authConfig"
    )
</template>

<script>
import { Auth } from 'aws-amplify'

export default {
  data () {
    return {
      isLoggedIn: false,
      authConfig: {
        usernameAttributes: 'My user name',
        signUpConfig: {
          header: 'My Customized Sign Up!',
          hideAllDefaults: true,
          defaultCountryCode: '1',
          signUpFields: [
            {
              label: 'My user name',
              key: 'username',
              required: true,
              displayOrder: 1,
              type: 'string'
            },
            {
              label: 'Password',
              key: 'password',
              required: true,
              displayOrder: 2,
              type: 'password'
            },
            {
              label: 'Email Address',
              key: 'email',
              required: true,
              displayOrder: 3,
              type: 'string'
            }
          ]
        }
      }
    }
  },
  async mounted () {
    const currentUserInfo = await Auth.currentUserInfo()
    this.isLoggedIn = Boolean(currentUserInfo)
  }
}
</script>