const jsonToFormData = (obj, form, namespace) => {
  const fd = form || new FormData();
  let formKey;

  for (let property in obj) {
    if (obj.hasOwnProperty(property)) {
      if (namespace) {
        formKey = namespace + '[' + property + ']';
      } else {
        formKey = property;
      }
      if (
        typeof obj[property] === 'object' &&
        !(obj[property] instanceof File)
      ) {
        jsonToFormData(obj[property], fd, property);
      } else {
        fd.append(formKey, obj[property]);
      }
    }
  }

  return fd;
};

export default jsonToFormData;
