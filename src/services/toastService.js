import iziToast from "izitoast";

function success(message) {
  iziToast.success({
    title: 'Success',
    message,
    position: 'topRight',
  });
}

function error(message) {
  iziToast.error({
    title: 'Error',
    message,
    position: 'topRight',
  });
}

const toastService = {
  success,
  error,
}

export default toastService;