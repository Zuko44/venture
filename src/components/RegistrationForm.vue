<script setup lang="ts">
import { registration } from "../api/api";
import router from "../router";
import { ref } from "vue";

const userName = ref<string>();
const phoneNumber = ref<number>();
const password = ref<string>();
const file = ref<File | null>();
const msg = ref<string>();
const success = ref<boolean>();

const handleFileChange = (e: any) => {
  if (e.target && e.target.files) {
    file.value = e.target.files[0];
  }
};

const clearInputs = () => {
  userName.value = "";
  phoneNumber.value = null;
  password.value = "";
};

const registrationHandler = () => {
  registration(
    userName.value,
    phoneNumber.value,
    password.value,
    file.value,
  ).then((result) => {
    console.log(result);
    console.log(result.success);
    console.log(result.msg);

    msg.value = result.msg;
    success.value = result.success;

    clearInputs();

    setTimeout(() => {
      if (result.success === true) {
        router.push({ name: "home" });
      }
    }, 1500);
  });
};
</script>

<template>
  <div class="wrapper">
    <div class="leftPart">
      <img
        class="mainFoto"
        src="../assets/images/mainFoto.jpg"
        alt="mainFoto"
      />
      <div class="companyName">Travelista tours</div>
      <div class="justText">
        <pre>
        Путешествие — единственная покупка, которая обогащает
        вас помимо материальных благ
        </pre>
      </div>
    </div>
    <div class="rightPart">
      <div class="formWrapper">
        <h1>Добро пожаловать</h1>
        <div :class="{ error: success === false, success: success === true }">
          {{ msg }}
        </div>
        <form action="" method="POST">
          <fieldset>
            <legend>Имя</legend>
            <input
              v-model="userName"
              name="userName"
              type="text"
              class="phoneNumber"
            />
          </fieldset>
          <fieldset>
            <legend>Номер телефона</legend>
            <input
              v-model="phoneNumber"
              name="phoneNumber"
              type="tel"
              class="password"
            />
          </fieldset>
          <fieldset>
            <legend>Пароль</legend>
            <input
              v-model="password"
              name="password"
              type="password"
              class="password"
            />
          </fieldset>
          <fieldset>
            <legend>Аватар</legend>
            <input
              @change="handleFileChange"
              name="file"
              type="file"
              class="password"
            />
          </fieldset>
          <div class="auth">
            <RouterLink to="/authorization">Авторизация</RouterLink>
          </div>
          <button
            type="button"
            class="btn"
            @click.prevent="registrationHandler"
          >
            Регистрация
          </button>
        </form>
      </div>
      <img class="plane" src="../assets/images/plane.jpg" alt="plane" />
      <img class="India" src="../assets/images/India.jpg" alt="India" />
      <img class="Europa" src="../assets/images/Europa.jpg" alt="Europa" />
    </div>
  </div>
</template>

<style scoped>
.loader {
  margin: 0px 0px 0px 275px;
}

.wrapper {
  display: flex;
  flex-direction: row;
  border-radius: 20px;
  font-family: "Cabinet Grotesk Regular";
  background: white;
}

img {
  width: 100%;
  height: 100%;
  box-sizing: border-box;
}

.mainFoto {
  border-radius: 20px 0 0 20px;
}

.leftPart {
  width: 50%;
  border-radius: 20px;
}

.rightPart {
  width: 50%;
  height: 100%;
  position: relative;
  border-radius: 20px;
}

.companyName {
  position: absolute;
  top: 19%;
  left: 13%;
  color: white;
  font-family: "Emotional Rescue Personal Use Regular";
  font-style: normal;
  font-weight: normal;
  font-size: 3rem;
}

.justText {
  color: white;
  position: absolute;
  text-align: center;
  top: 30%;
  left: 6%;
  font-style: normal;
  font-weight: normal;
  font-size: 1rem;
}

.plane {
  width: 224px;
  height: 47px;
  position: absolute;
  left: 61%;
  top: 50px;
  bottom: 0;
  right: 0;
}

.Europa {
  width: 237px;
  height: 136px;
  position: absolute;
  left: 59.7%;
  top: 533.7px;
  bottom: 0;
  right: 0;
  border-radius: 0 0 20px 0;
}

.India {
  width: 193px;
  height: 112px;
  position: absolute;
  left: 0;
  top: 557.7px;
  bottom: 0;
  right: 0;
}

.formWrapper {
  text-align: center;
  margin-top: 15%;
}

h1 {
  color: RGB(0, 158, 226);
  font-weight: 800;
}

.login {
  font-size: 1rem;
  color: RGB(128, 128, 128);
}

.phoneNumber,
.password {
  border: none;
  width: 364px;
  height: 40px;
  padding: 10px;
  outline: none;
}

fieldset {
  border: 1px solid RGB(0, 158, 226);
  border-radius: 8px;
  padding: 2px;
  width: 364px;
  margin: auto;
}

legend {
  padding-left: 5px;
  padding-right: 5px;
  color: RGB(0, 158, 226);
  font-weight: 10;
  text-align: left;
}

.btn {
  width: 125px;
  height: 48px;
  color: white;
  font-weight: 14;
  font-size: 1rem;
  background-color: RGB(0, 158, 226);
  border: none;
  border-radius: 7px;
  cursor: pointer;
}

.auth a {
  color: RGB(128, 128, 128);
}

.auth {
  margin: 10px;
  color: RGB(128, 128, 128);
}

.error {
  color: red;
}
.success {
  color: green;
}
</style>
