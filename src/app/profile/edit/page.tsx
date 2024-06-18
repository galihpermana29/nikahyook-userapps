import EditProfileFormContainer from './container/EditProfileFormContainer';
import EditProfileForm from './container/Form/EditProfileForm';

export default function EditProfilePage() {
  return (
    <EditProfileFormContainer
      className="w-full flex flex-col gap-3"
      layout="vertical">
      <EditProfileForm />
    </EditProfileFormContainer>
  );
}
