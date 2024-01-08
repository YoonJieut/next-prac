// pages/index.tsx
import faker from "faker";
import { GetServerSideProps } from 'next';

interface User {
  name: string;
  email: string;
}

interface Props {
  user: User;
}


export default function Home({ user }: Props) {
  return (
    <div>
      <h1>가짜 사용자 정보</h1>
      <p>이름: {user.name}</p>
      <p>이메일: {user.email}</p>
    </div>
  );
}

export const getServerSideProps: GetServerSideProps = async (context) => {
  const user = {
    name: faker.name.findName(),
    email: faker.internet.email()
  };

  return {
    props: {
      user
    }
  };
};
