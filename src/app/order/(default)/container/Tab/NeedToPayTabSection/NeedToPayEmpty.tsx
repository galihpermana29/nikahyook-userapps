import EmptySection from '@/shared/container/Section/EmptySection';

export default function NeedToPayEmpty() {
  return (
    <EmptySection
      title="No order paid yet"
      message={
        <>
          <span>There are currently no orders paid.</span> <br />
          <span>Please make payments for your orders!</span>
        </>
      }
    />
  );
}
