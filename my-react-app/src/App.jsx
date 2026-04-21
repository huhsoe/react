import withLoading from './withLoading';
import UserInfo from './UserInfo';

const UserInfoWithLoading = withLoading(UserInfo);

function App() {
  return <UserInfoWithLoading />;
}

export default App;