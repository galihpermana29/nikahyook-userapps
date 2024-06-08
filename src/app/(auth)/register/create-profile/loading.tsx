import CreateProfileFormContainer from './container/CreateProfileFormContainer';
import CreateProfileFormLoading from './container/CreateProfileFormLoading';

export default function CreateProfileLoading() {
  return (
    <CreateProfileFormContainer
      disabled
      className="w-full flex flex-col gap-3"
      layout="vertical">
      <CreateProfileFormLoading />
    </CreateProfileFormContainer>
  );
}
