import { atom, selector } from 'recoil';

export const userState = atom({
    key: 'logged',
    default: false
});

// export const counterLabelSelector = selector({
//     key: 'counterLabelSelector',
//     get: ({ get }) => {
//         const counter = get(counterState);
//         return `현재 카운터는 ${counter} 입니다.`;
//     }
// });
