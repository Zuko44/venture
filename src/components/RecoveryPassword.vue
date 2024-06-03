<script setup lang="ts">
import { ref } from "vue";
import { sendPhone, sendSms } from "../api/api";
import router from "../router";

const phoneNumber = ref<number>();
const password = ref<number>();
const showForm = ref<boolean>(false);
const msg = ref<string>();
const success = ref<boolean>();

const sendPhoneHandler = () => {
  sendPhone(phoneNumber.value).then((result) => {
    msg.value = result.msg;

    if (result.success === true) {
      showForm.value = true;
    }
  });
};

const sendSmsHandler = () => {
  sendSms(password.value).then((result) => {
    msg.value = result.msg;

    if (result.success === true) {
      router.push({ name: "home" });
    }
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
        <form v-if="!showForm" action="" method="POST">
          <fieldset>
            <legend>Номер телефона</legend>
            <input
              v-model="phoneNumber"
              name="phoneNumber"
              type="tel"
              class="phoneNumber"
            />
          </fieldset>
          <button type="button" class="btn" @click.prevent="sendPhoneHandler">
            Отправить
          </button>
        </form>
        <form v-if="showForm" action="" method="POST">
          <fieldset>
            <legend>Пароль из смс</legend>
            <input
              v-model="password"
              name="phoneNumber"
              type="password"
              class="password"
            />
          </fieldset>
          <button type="button" class="btn" @click.prevent="sendSmsHandler">
            Отправить
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

.remember a {
  color: RGB(128, 128, 128);
}

.remember {
  margin-top: 10px;
  color: RGB(128, 128, 128);
}

.remember div {
  margin-left: 42%;
}

.remember a {
  display: inline-block;
}

.remember input {
  margin-left: 5px;
  display: inline;
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
  margin-top: 15px;
}

.error {
  color: red;
}
.success {
  color: green;
}
</style>
