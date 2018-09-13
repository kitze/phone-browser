import React, { Component } from 'react';

//styles
import * as S from './styles';

//devices
import allDevices from './devices';

//utils
import { filters } from './filters';
import { getFilteredDevices } from './get-filtered-devices';
import { toggleInArray } from './state-utils';
import map from 'lodash/map';

class App extends Component {
  state = {
    pickedFilters: []
  };

  toggleId = id => this.setState(toggleInArray('pickedFilters', id));

  render() {
    const { pickedFilters } = this.state;
    const filteredDevices = getFilteredDevices(allDevices, pickedFilters);

    return (
      <S.App>
        <S.Background />
        <S.Header>
          <S.MadeBy>
            <span>Made by </span>
            <S.Link href="https://twitter.com/thekitze" target="_blank">
              @thekitze
            </S.Link>
          </S.MadeBy>
          <S.Content>
            <S.Title>Why iPhone X?</S.Title>
            <S.Space />
            <S.Subtitle>
              If you check all of them, there will be only one phone left.
            </S.Subtitle>
            <S.Space />
            <S.FilterList>
              {map(filters, (filter, id) => (
                <S.FilterButton
                  key={id}
                  active={pickedFilters.includes(id)}
                  onClick={() => this.toggleId(id)}
                >
                  {filter.name}
                </S.FilterButton>
              ))}
            </S.FilterList>
          </S.Content>
        </S.Header>
        <S.Devices>
          <S.Wrapper>
            {filteredDevices.map(device => (
              <S.Device.Wrap
                only={filteredDevices.length === 1}
                key={device.DeviceName}
              >
                <S.Device.Name> {device.DeviceName} </S.Device.Name>
              </S.Device.Wrap>
            ))}
          </S.Wrapper>
        </S.Devices>
      </S.App>
    );
  }
}

export default App;
