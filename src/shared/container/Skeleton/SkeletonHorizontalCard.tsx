function SkeletonHorizontalCards({ amount = 4 }: { amount?: number }) {
  return (
    <section className="px-4 grid grid-cols-1 md:grid-cols-2 gap-2">
      {[...Array(amount)].map((_, index) => (
        <div
          key={index}
          className="bg-ny-gray-100 rounded-lg h-[200px] animate-pulse"></div>
      ))}
    </section>
  );
}

export default SkeletonHorizontalCards;
