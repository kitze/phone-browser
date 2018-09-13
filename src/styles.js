import glamorous from 'react-emotion';
import { whiteish } from './mixins';
import facepaint from 'facepaint';

const mq = facepaint([
  '@media(min-width: 420px)',
  '@media(min-width: 920px)',
  '@media(min-width: 1120px)'
]);

export const Background = glamorous.div`
  background-color: #ff9d00;
  background-image: url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='100%25' height='100%25' viewBox='0 0 1600 800'%3E%3Cg stroke='%23000' stroke-width='66.7' stroke-opacity='0.05' %3E%3Ccircle fill='%23ff9d00' cx='0' cy='0' r='1800'/%3E%3Ccircle fill='%23fb8d17' cx='0' cy='0' r='1700'/%3E%3Ccircle fill='%23f47d24' cx='0' cy='0' r='1600'/%3E%3Ccircle fill='%23ed6e2d' cx='0' cy='0' r='1500'/%3E%3Ccircle fill='%23e35f34' cx='0' cy='0' r='1400'/%3E%3Ccircle fill='%23d85239' cx='0' cy='0' r='1300'/%3E%3Ccircle fill='%23cc453e' cx='0' cy='0' r='1200'/%3E%3Ccircle fill='%23be3941' cx='0' cy='0' r='1100'/%3E%3Ccircle fill='%23b02f43' cx='0' cy='0' r='1000'/%3E%3Ccircle fill='%23a02644' cx='0' cy='0' r='900'/%3E%3Ccircle fill='%23901e44' cx='0' cy='0' r='800'/%3E%3Ccircle fill='%23801843' cx='0' cy='0' r='700'/%3E%3Ccircle fill='%236f1341' cx='0' cy='0' r='600'/%3E%3Ccircle fill='%235e0f3d' cx='0' cy='0' r='500'/%3E%3Ccircle fill='%234e0c38' cx='0' cy='0' r='400'/%3E%3Ccircle fill='%233e0933' cx='0' cy='0' r='300'/%3E%3Ccircle fill='%232e062c' cx='0' cy='0' r='200'/%3E%3Ccircle fill='%23210024' cx='0' cy='0' r='100'/%3E%3C/g%3E%3C/svg%3E");
  background-attachment: fixed;
  background-size: cover;
  background-position: center;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  max-height: 100vh;
  max-width: 100vw;
  width: 100vw;
  z-index: 0;
`;

export const App = glamorous.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  min-height: 100vh;
`;

export const Header = glamorous.div(
  {
    color: 'white',
    width: '100%',
    zIndex: 1
    // backgroundColor: 'rgba(0,0,0,0.5)'
  },
  mq({
    padding: [`20px 10px`, `20px 20px`, `20px 20px`]
  })
);

export const Space = glamorous.div(
  mq({
    height: [20, 30, 30]
  })
);

export const Content = glamorous.div({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  justifyContent: 'center'
});

export const Title = glamorous.div({
  fontSize: 30,
  fontWeight: '400',
  lineHeight: '25px'
});

export const Link = glamorous.a({
  fontWeight: 400,
  textDecoration: 'none',
  transition: 'all 150ms linear',
  color: 'white',
  borderBottom: '1px dotted white',
  paddingBottom: 4
});

export const Subtitle = glamorous.div({
  color: 'white',
  fontWeight: '300',
  fontSize: 18,
  textAlign: 'center'
});

export const MadeBy = glamorous.div(
  {
    color: 'white',
    fontWeight: '300',
    marginBottom: 30
  },
  mq({
    textAlign: ['center', 'center', 'end']
  })
);

export const FilterButton = glamorous.button(
  {
    outline: 'none',
    border: `1px solid ${whiteish(0.2)}`,
    backgroundColor: whiteish(0.1),
    color: whiteish(1),
    borderRadius: 3,
    cursor: 'pointer',
    fontWeight: 300,
    transition: 'all 100ms linear',
    userSelect: 'none'
  },
  ({ active }) => ({
    ...(active && { backgroundColor: 'white', color: '#2d2b58' }),
    ...(!active && {
      '&:hover': {
        border: `1px solid ${whiteish(0.4)}`,
        backgroundColor: whiteish(0.3)
      }
    })
  }),
  mq({
    marginRight: [10, 15, 15],
    marginBottom: [10, 15, 15],
    fontSize: [14, 16, 16],
    padding: ['4px 5px', '4px 8px', '4px 8px']
  })
);

export const FilterList = glamorous.div({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  flexWrap: 'wrap',
  maxWidth: 1000
});

export const Wrapper = glamorous.div({
  display: 'flex',
  flexWrap: 'wrap',
  alignItems: 'flex-start',
  maxWidth: 1200,
  justifyContent: 'center'
});

export const Devices = glamorous.div(
  {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    width: '100%',
    flex: 1,
    zIndex: 1,
    backgroundColor: 'rgba(74, 12, 53, 0.66)'
  },
  mq({
    padding: ['30px 10px', 20, 40]
  })
);

export const Device = {
  Wrap: glamorous.div(
    {
      userSelect: 'none',
      cursor: 'default',
      marginBottom: 12,
      marginRight: 12,
      border: `1px dashed ${whiteish(0.4)}`,
      borderRadius: 5,
      padding: '5px 7px',
      fontWeight: 300,
      transition: 'all 250ms ease-in',
      color: 'white'
    },
    mq({
      fontSize: [14, 16, 16]
    }),
    ({ only }) => ({
      ...(only === true && {
        fontSize: '30px !important',
        border: `2px dashed ${whiteish(0.8)}`,
        padding: '15px 25px'
      })
    })
  ),
  Name: glamorous.div({})
};
