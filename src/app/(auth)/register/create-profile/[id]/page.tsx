import React from 'react';
import CreateProfileFormContainer from './container/CreateProfileFormContainer';
import CreateProfileForm from './container/Form/CreateProfileForm';

export default function CreateProfilePage() {
  return (
    <CreateProfileFormContainer
      className="w-full flex flex-col gap-3"
      layout="vertical">
      <CreateProfileForm />
    </CreateProfileFormContainer>
  );
}
