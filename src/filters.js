import dxoMarks from './dxo-marks';

const getBodyRatio = device => {
  if (
    !(
      device &&
      device.size &&
      device.size.includes('~') &&
      device.size.includes('%')
    )
  ) {
    return false;
  }
  const size = device.size.split('~')[1];
  return parseFloat(size.split('%'));
};

export const filters = {
  bodyRatio: {
    name: 'Good screen to body ratio',
    filter: device => getBodyRatio(device) >= 80
  },
  goodCamera: {
    name: 'Great camera',
    filter: device => dxoMarks.find(d => d.name === device.DeviceName)
  },
  instantUpdates: {
    name: `Receives updates instantly`,
    filter: device => {
      let brand = device.Brand ? device.Brand.toLowerCase() : '';
      return brand === 'apple' || brand === 'google';
    }
  },
  tooSmall: {
    name: 'Not too small',
    filter: device => {
      if (!(device && device.size && device.size.includes('inches'))) {
        return false;
      }
      let size = device.size.split(' inches')[0];
      let inches = parseFloat(size);
      return inches >= 5;
    }
  },
  tooBig: {
    name: 'Can use with 1 hand',
    filter: device => {
      if (!(device && device.size && device.size.includes('inches'))) {
        return false;
      }

      let size = device.size.split(' inches')[0];
      let inches = parseFloat(size);
      let ratio = getBodyRatio(device);
      let bigWithGoodRatio = inches <= 5.8 && ratio > 80;
      let smallScreenWithOkRatio = inches <= 5.2 && ratio > 65;

      return bigWithGoodRatio || smallScreenWithOkRatio;
    }
  },
  latestVersion: {
    name: 'Latest version of OS',
    filter: device => {
      let brand = device.Brand ? device.Brand.toLowerCase() : '';

      const iOSdevices = [
        'Apple iPhone X',
        'Apple iPhone 8',
        'Apple iPhone 8 Plus',
        'Apple iPhone 7',
        'Apple iPhone 7 Plus',
        'Apple iPhone 6s',
        'Apple iPhone 6s Plus',
        'Apple iPhone 6',
        'Apple iPhone 6 Plus',
        'Apple iPhone SE',
        'Apple iPhone 5s'
      ];

      return iOSdevices.includes(device.DeviceName) || brand === 'google';
    }
  },
  superAmoled: {
    name: 'OLED screen',
    filter: device => {
      let screenType = device.type ? device.type.toLowerCase() : '';
      return screenType.includes('oled');
    }
  },
  wirelessCharging: {
    name: 'Wireless charging',
    filter: device => {
      let features = device.features_c ? device.features_c.toLowerCase() : '';
      return features.includes('wireless charging');
    }
  },
  waterResistant: {
    name: 'Water resistant',
    filter: device => {
      let features = device.body_c ? device.body_c.toLowerCase() : '';
      return features.includes('water');
    }
  },
  fullHd: {
    name: 'HQ screen resolution',
    filter: device => {
      const resolution = device.resolution
        ? device.resolution.toLowerCase()
        : '';
      let splitted = resolution.split(' x ');
      let a = splitted[0];
      let b = splitted[1] && splitted[1].split(' ')[0];
      if (a && b) {
        const x = parseInt(a.trim());
        const y = parseInt(b.trim());
        return y > 2400 && x > 1100;
      }
    }
  },
  recent: {
    name: 'Recently released',
    //make sure to include these phones because their date is 
    exceptions: ['Galaxy S9', 'Galaxy Note 8'],
    filter: device => {
      let status = device.status ? device.status.toLowerCase() : '';
      return (
        status.includes('released') &&
        ['2017', '2018', '2019'].some(year => status.includes(year))
      );
    }
  }
};
