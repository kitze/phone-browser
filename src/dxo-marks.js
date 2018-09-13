/*

Run this in the console to get the latest ranks from dxomark.com

(function(){
    const list = document.querySelector('#mobilesTopScoringTab');
    console.log(list);
    const phones = [...list.querySelectorAll('.listElement')];
    const ranks = phones.map(p => {
        const score = parseInt(p.querySelector('.deviceScore').innerHTML);
        const name = p.querySelector('.deviceName a').innerHTML;
        return {
            score,
            name
        }
    });
    const filtered = ranks.filter(r => r.score >= 90);
    console.log('filtered', filtered);
})()

*/

export default [
  {
    score: 109,
    name: 'Huawei P20 Pro'
  },
  {
    score: 103,
    name: 'HTC U12+'
  },
  {
    score: 102,
    name: 'Huawei P20'
  },
  {
    score: 99,
    name: 'Samsung Galaxy S9+'
  },
  {
    score: 99,
    name: 'Samsung Galaxy S9'
  },
  {
    score: 99,
    name: 'Xiaomi Mi 8'
  },
  {
    score: 98,
    name: 'Google Pixel 2'
  },
  {
    score: 97,
    name: 'Apple iPhone X'
  },
  {
    score: 97,
    name: 'Huawei Mate 10 Pro'
  },
  {
    score: 97,
    name: 'Xiaomi Mi MIX 2S'
  },
  {
    score: 94,
    name: 'Apple iPhone 8 Plus'
  },
  {
    score: 94,
    name: 'Samsung Galaxy Note 8'
  },
  {
    score: 92,
    name: 'Apple iPhone 8'
  },
  {
    score: 90,
    name: 'Google Pixel'
  },
  {
    score: 90,
    name: 'Google Pixel XL'
  },
  {
    score: 90,
    name: 'HTC U11'
  },

  {
    score: 90,
    name: 'Xiaomi Mi Note 3'
  }
];
