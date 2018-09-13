import every from 'lodash/every';
import { filters } from './filters';

export const getFilteredDevices = (devices, pickedFilters) =>
  devices.filter(device => {
    return every(pickedFilters, filterId => {
      const name = device.DeviceName ? device.DeviceName.toLowerCase() : '';
      const filter = filters[filterId];
      const rule = filter.filter(device);
      const exceptions = filter.exceptions || [];
      const isException = exceptions.some(exception =>
        name.includes(exception.toLowerCase())
      );
      return rule || isException;
    });
  });
