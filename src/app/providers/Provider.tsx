// react
import { PropsWithChildren } from 'react';

// react-redux
import { Provider as ReduxProvider } from 'react-redux';

// redux store
import store from '@/lib/redux/store';

const Provider = ({ children }: PropsWithChildren) => {
  return <ReduxProvider store={store}>{children}</ReduxProvider>;
};

export default Provider;
