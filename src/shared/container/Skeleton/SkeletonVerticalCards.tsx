function SkeletonVerticalCards({ amount = 4 }: { amount?: number }) {
  return (
    <section className="px-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
      {[...Array(amount)].map((_, index) => (
        <div
          key={index}
          className="bg-ny-gray-100 rounded-lg aspect-[4/5] animate-pulse"></div>
      ))}
    </section>
  );
}

export default SkeletonVerticalCards;
