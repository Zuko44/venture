<script setup lang="ts"></script>

<template>
  <div class="wrapper">
    <div class="logo">
      <RouterLink class="allSpace" to="/">
        <img src="../assets/logo/Logo.png" />
      </RouterLink>
    </div>
    <hr />
    <div class="parent">
      <ul class="panel">
        <li><img src="../assets/icons/auth.svg" />Авторизация</li>
        <li>
          <RouterLink class="allSpace" to="/dashboard"
            ><img src="../assets/icons/dashboard.svg" />Дашборд
          </RouterLink>
        </li>

        <li>
          <RouterLink class="allSpace" to="/goods"
            ><img src="../assets/icons/goods.svg" />Товары</RouterLink
          >
        </li>
      </ul>
    </div>
    <hr />
    <div class="parent">
      <ul>
        <li><img src="../assets/icons/anal.svg" />Аналитика</li>
        <li><img src="../assets/icons/contacts.svg" />Контакты</li>
        <li><img src="../assets/icons/portfolio.svg" />Компании</li>
      </ul>
    </div>
    <hr />
    <div class="parent">
      <ul>
        <li><img src="../assets/icons/squares.svg" />Интеграции</li>
        <li><img src="../assets/icons/settings.svg" />Настройки</li>
      </ul>
    </div>
    <div class="bottom">
      <ul>
        <li><img src="../assets/icons/login.svg" />Кабинет</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.wrapper {
  width: 248px;
  border: 1px solid black;
  min-height: 100vh;
}

.logo {
  height: 72px;
  margin: 28px 22px 0px;
}

hr {
  border: 1px solid RGB(236, 236, 236);
}

.parent img {
  width: 20px;
  height: 20px;
  margin-right: 10px;
  vertical-align: middle;
}

.parent ul {
  margin: 0px 10px 0px 22px;
  padding: 0px;
}

.parent {
  margin: 10px 0px;
  line-height: 30px;
}

li {
  list-style-type: none;
  margin-bottom: 5px;
  padding: 5px;
  cursor: pointer;
}

li:hover {
  background: RGB(242, 242, 242);
}

.bottom {
  position: sticky;
  top: 90%;
  margin-left: 22px;
}

.bottom img {
  width: 40px;
  height: 40px;
  vertical-align: middle;
  margin-right: 10px;
}

.bottom ul {
  margin: 0px 10px 0px 0px;
  padding: 0px;
}

.login {
  margin: 8px 0px 0px 10px;
}

a {
  text-decoration: none;
  color: black;
}

.allSpace {
  display: block;
}

a.router-link-exact-active {
  font-weight: 700;
  background: RGB(242, 242, 242);
  padding: 5px;
}

a.router-link-exact-active:hover {
  background: RGB(242, 242, 242);
}
</style>
