import WeddingSettingsForm from './container/Form/WeddingSettingsForm';
import WeddingSettingsFormContainer from './container/WeddingSettingsFormContainer';

export default function WeddingSettingsPage() {
  return (
    <WeddingSettingsFormContainer
      className="w-full flex flex-col gap-3"
      layout="vertical">
      <WeddingSettingsForm />
    </WeddingSettingsFormContainer>
  );
}
