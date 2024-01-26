export const validate = (type: string, text: string) => {
  switch (type) {
    case 'email':
      return String(text)
        .toLowerCase()
        .match(
          /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        );
    case 'password':
    case 'repeat_password':
    case 'newPassword':
    case 'repeat_newPassword':
    case 'oldPassword':
      return String(text).match(
        /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[a-zA-Z0-9]{8,40}$/,
      );

    case 'login':
      return String(text).match(
        /^(?=.*[A-Za-z0-9-_-]$)[A-Za-z][A-Za-z\d.-_-]{2,20}$/,
      );

    case 'first_name':
    case 'display_name':
    case 'second_name':
      return String(text).match(/^\b[A-ZА-Я][а-яa-z-]+$/);

    case 'phone':
      return String(text).match(/^\+?[0-9]{9,15}$/g);

    case 'user_id':
      return String(text).match(/^[0-9]/g);

    case 'message':
      return String(text).length !== 0;
    default:
      return false;
  }
};

export const checkValidation = (form: HTMLFormElement) => {
  const formData = new FormData(form);
  const formDataObj: Record<string, FormDataEntryValue> = {};
  formData.forEach((value, key) => {
    formDataObj[key] = value;
  });

  let validation = false;
  for (const item in formDataObj) {
    if (formDataObj[item].toString().length === 0) {
      validation = false;
      break;
    }
    if (validate(item, formDataObj[item].toString())) {
      validation = true;
    } else {
      validation = false;
      break;
    }
  }
  if (validation) {
    return formDataObj;
  } else {
    return null;
  }
};
