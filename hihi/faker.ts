import faker from 'faker';

const randomName = faker.name.findName(); // 랜덤 이름 생성
const randomEmail = faker.internet.email(); // 랜덤 이메일 생성

console.log(randomName, randomEmail);