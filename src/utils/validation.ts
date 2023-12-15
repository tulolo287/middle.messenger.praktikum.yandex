export const validate = (type: string, text: string) => {
  switch (type) {
    case 'email':
      return String(text)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    case 'password':
    case 'second_password':
    case 'newPassword':
    case 'oldPassword':
      return String(text).match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,40}$/,
      );

    case 'login':
      return String(text).match(
        /^(?=.*[A-Za-z0-9]$)[A-Za-z][A-Za-z\d.-]{2,20}$/,
      );

    case 'first_name':
      return String(text).match(/^\b[A-ZА-Я][а-яa-z]+$/);

    case 'second_name':
      return String(text).match(/^\b[A-ZА-Я][а-яa-z]+$/);

    case 'phone':
      return String(text).match(/^\+?[0-9]{9,15}$/g);

    case 'message':
      return String(text).length !== 0;
    default: return null;
  }
};

export const checkValidation = (form: HTMLFormElement) => {
  const data = Object.fromEntries(new FormData(form).entries());
  let validation = false;
  Object.entries(data).every((item) => {
    if (item[1].toString().length === 0) {
      validation = false;
      return;
    }
    if (validate(item[0], item[1].toString())) {
      validation = true;
    } else {
      validation = false;
    }
  });
  return validation ? data : null;
};
