import { ref, computed } from "vue";
import { defineStore } from "pinia";
import axios from "axios";

const apiKey = "AIzaSyAeAWdKSf27dPMB_s3eTS3fuPz_ZcaCB34";

export const useAuthStore = defineStore("auth", () => {
  const userInfo = ref<Object>({
    token: "",
    email: "",
    userId: "",
    refreshToken: "",
    expiresIn: "",
  });
  const error = ref<string>("");
  const loader = ref<boolean>(false);

  const signup = async (payload: Object) => {
    error.value = "";
    loader.value = true;
    try {
      const response = await axios.post(
        `https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=${apiKey}`,
        {
          ...payload,
          returnSecureToken: true,
        },
      );
      userInfo.value = {
        token: response.data.idToken,
        email: response.data.email,
        userId: response.data.localId,
        refreshToken: response.data.refreshToken,
        expiresIn: response.data.expiresIn,
      };
      loader.value = false;
    } catch (err) {
      switch (err.response.data.error.message) {
        case "EMAIL_EXISTS":
          error.value = "Email exists";
          break;
        case "OPERATION_NOT_ALLOWED":
          error.value = "Operation not allowed";
          break;
        default:
          error.value = "Error";
          break;
      }
      loader.value = false;
    }
  };

  return { signup, userInfo, error, loader };
});
