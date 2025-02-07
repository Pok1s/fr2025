import { Component } from 'react';
import { TLoginButton, TLoginButtonSize } from 'react-telegram-auth';
import { connect } from 'react-redux';
import { telegramAuthorized } from './redux/Auth/operations';

// Інтерфейс для користувача Telegram
interface TelegramUser {
  id: number;
  first_name: string;
  last_name?: string;
  username?: string;
  auth_date: number;
  hash: string;
  photo_url?: string;
}

// Інтерфейс для пропсів компонента
interface Props {
  telegramAuthorized: (user: TelegramUser) => void;
}

class TelegramLogin extends Component<Props> {
  render() {
    return (
      <TLoginButton
        botName="FriendsRateFRT_bot"
        buttonSize={TLoginButtonSize.Large}
        lang="en"
        usePic={true}
        cornerRadius={30}
        onAuthCallback={(user: TelegramUser) => {
          this.props.telegramAuthorized(user);
        }}
        requestAccess={'write'}
        additionalClassNames={'telegram-login-button'}
      />
    );
  }
}

// Типізація для dispatch
const mapDispatchToProps = (dispatch: AppDispatch) => ({
  telegramAuthorized: (user: TelegramUser) => dispatch(telegramAuthorized(user))
});

export default connect(null, mapDispatchToProps)(TelegramLogin);