import SubrouteHeader from '../container/Header/SubrouteHeader';

function GuestLoading() {
  return (
    <>
      <SubrouteHeader title="Guest Attending" />
      <section className="space-y-4 p-4">
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse"></div>
        <div className="w-full h-12 rounded-md bg-ny-gray-100 animate-pulse"></div>
      </section>
    </>
  );
}

export default GuestLoading;
