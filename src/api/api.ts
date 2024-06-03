export const comeIn = async (
  value: number,
  value2: string,
  value3: boolean,
) => {
  const formData = new FormData();
  formData.set("phoneNumber", value.toString());
  formData.set("password", value2);
  formData.set("rememberMe", value3.toString());

  const response = await fetch("http://localhost/test/api/auth/login.php", {
    method: "POST",
    body: formData,
  });

  const result = await response.json();
  return result;
};

export const registration = async (
  value: string,
  value2: number,
  value3: string,
  value4: File | null,
) => {
  const formData = new FormData();
  formData.set("name", value);
  formData.set("phone", value2.toString());
  formData.set("password", value3);
  formData.set("avatar", value4);

  const response = await fetch(
    "http://localhost/test/api/user/registration.php",
    {
      method: "POST",
      body: formData,
    },
  );

  const result = await response.json();
  return result;
};

export const sendPhone = async (value: number) => {
  const formData = new FormData();
  formData.set("phone", value.toString());

  const response = await fetch(
    "https://backend-front-test.dev.echo-company.ru/api/user/forgot.php",
    {
      method: "POST",
      body: formData,
    },
  );

  const result = await response.json();
  return result;
};

export const sendSms = async (value: number) => {
  const formData = new FormData();
  formData.set("sms", value.toString());

  const response = await fetch(
    "https://backend-front-test.dev.echo-company.ru/api/user/forgot.php",
    {
      method: "POST",
      body: formData,
    },
  );

  const result = await response.json();
  return result;
};
