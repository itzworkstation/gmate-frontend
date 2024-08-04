import { defineStore } from 'pinia'
import Storage from '../utils/storage'
export const userStorage = new Storage("user")
export const isAuthorized = () => !!userStorage.get()
import { routerPush } from '../router'
export const useAuthStore = defineStore({
  id: 'auth',
  state: () => ({
    user: {},
    loading: false,
    error: null,
    mobileNumber: null,
    showOtpScreen: false
  }),
  getters: {
    currentUser: (state) => {
      return state.user
    }
  }, 
  actions: {
    async login(mobile) {
      this.loading = true
      try {
        this.user = await fetch('https://jsonplaceholder.typicode.com/posts')
        .then((response) => response.json()) 
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
        this.mobileNumber = mobile
        this.showOtpScreen = true
      }
    },
    async verifyOtp(otp) {
      this.loading = true
      try {
        userStorage.set({name: 'sunil'})
        await routerPush('/home')
        // this.user = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
        // .then((response) => response.json())
      } catch (error) {
        this.error = error
      } finally {
        this.loading = false
      }
    }
  }
})