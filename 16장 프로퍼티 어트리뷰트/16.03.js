const 사람 = {
    name: 'Lee'
};

// 프로퍼티 동적 생성
사람.age = 20;
사람.gender = '남자'

// 모든 프로퍼티의 프로퍼티 어트리뷰트 정보를 제공하는 프로퍼티 디스크립터 객체들을 반환한다.
console.log(Object.getOwnPropertyDescriptors(사람));


// {   name: { value: 'Lee', writable: true, enumerable: true,  configurable: true },
//     age: { value: 20, writable: true, enumerable: true, configurable: true },
//     gender: { value: '남자', writable: true, enumerable: true, configurable: true }
//   }
