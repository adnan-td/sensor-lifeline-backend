export function isValidEmail(email: string): boolean {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return regex.test(email);
}

export async function isValidEmailAndNew(email: string | null, model: any) {
  if (!isValidEmail(email || "")) return false;
  const isNew = !(await model.findOne({
    where: {
      email: email,
    },
  }));
  if (isNew) return true;
  return false;
}

export function response(success: boolean, message: string) {
  return {
    success: success,
    message: message,
  };
}

export function userResponse(code: number, success: boolean, message: string, data: any = null) {
  return {
    code: code,
    success: success,
    message: message,
    data: data,
  };
}

export function isValidPassword(password: string): boolean {
  const regex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/;
  return process.env.NODE_ENV === "production" ? regex.test(password) : true;
}

export async function addIntoModel(model: any, data: any) {
  await model.create(data);
  return response(true, "Inserted Successfully");
}

export async function updateModel(model: any, data: any) {
  await model.update(data, {
    where: {
      id: data.id,
    },
  });
  return response(true, "Updated Successfully");
}

export async function deleteModel(model: any, id: number) {
  model.destroy({
    where: {
      id: id,
    },
  });
  return response(true, "Deleted Successfully");
}
