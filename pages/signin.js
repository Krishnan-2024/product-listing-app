import AuthForm from '../components/AuthForm';
import Header from '../components/Header';

export default function SignIn() {
  return (
    <>
      <Header />
      <AuthForm mode="signin" />
    </>
  );
}
