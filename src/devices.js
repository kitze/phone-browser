//preval
const apple = require('./devices/apple');
const sony = require('./devices/sony');
const htc = require('./devices/htc');
const google = require('./devices/google');
const lg = require('./devices/lg');
const oneplus = require('./devices/oneplus');
const samsung = require('./devices/samsung');
const xiaomi = require('./devices/xiaomi');
const motorola = require('./devices/motorola');
const alcatel = require('./devices/alcatel');
const nokia = require('./devices/nokia');
const lenovo = require('./devices/lenovo');
const huawei = require('./devices/huawei');

const devices = [
  ...apple,
  ...sony,
  ...htc,
  ...google,
  ...lg,
  ...oneplus,
  ...samsung,
  ...xiaomi,
  ...nokia,
  ...lenovo,
  ...alcatel,
  ...motorola,
  ...huawei
];

const watchOs = ['tizen', 'watch', 'wear'];

const deviceNames = [
  'smartwatch',
  'tablet',
  'watch',
  'tab active',
  'ipad',
  'galaxy tab',
  'lenovo tab',
  'yoga tab'
];

//make sure to include these devices
const exceptions = ['galaxy s9', 'oneplus 6', 'huawei p20 pro'];

const filteredDevices = devices.filter(device => {
  const os = device && device.os ? device.os.toLowerCase() : '';
  const name =
    device && device.DeviceName ? device.DeviceName.toLowerCase() : '';
  const status = device && device.status ? device.status.toLowerCase() : '';

  if (exceptions.some(e => name.includes(e))) {
    return true;
  }

  //ignored smartwatcheds, keep exceptions, remove rumored or cancelled devices
  const notSmartwatch = watchOs.every(o => !os.includes(o));
  const notIgnoredName = deviceNames.every(n => !name.includes(n));
  const notRumored = !status.includes('rumored');
  const notCancelled = !status.includes('cancelled');

  return notSmartwatch && notIgnoredName && notRumored && notCancelled;
});

module.exports = filteredDevices;
