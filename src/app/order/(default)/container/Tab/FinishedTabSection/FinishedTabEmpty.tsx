import EmptySection from '@/shared/container/Section/EmptySection';

export default function FinishedTabEmpty() {
  return (
    <EmptySection
      title="No finished order yet"
      message={
        <>
          <span>There are currently no orders finished.</span> <br />
          <span>Please wait wait until we finalize your orders!</span>
        </>
      }
    />
  );
}
