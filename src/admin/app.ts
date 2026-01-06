
const config = {
  translations: {
    en: {
      'Auth.form.welcome.title': 'Welcome to CMS STT PATI',
      'Auth.form.welcome.subtitle': 'Login to your account',
    },
  },
};

const bootstrap = app => {
  console.log('bootstrap', app);
};

export default {
  config,
  bootstrap,
};
