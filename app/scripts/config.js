var config_data = {
  'APP_NAME': 'CEC INTRANET',
  'APP_VERSION': '2.0',
  'API_URL': 'https://api.intranet.com/'
  'API_KEY': 'ffef470c9f26f4ca9ec567f092f49990672a0500'
}
angular.forEach(config_data,function(key,value) {
  config_module.constant(value,key);
}