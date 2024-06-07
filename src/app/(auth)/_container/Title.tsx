export default function Title({
  title,
  subtitle,
}: {
  title: string;
  subtitle?: string;
}) {
  return (
    <div className="flex flex-col gap-2 w-full items-center text-left">
      <h1 className="font-semibold text-xl w-full">{title}</h1>
      {subtitle !== undefined ? (
        <h3 className="text-caption-1 text-ny-gray-400 w-full">
          Please enter your email address to request a password reset
        </h3>
      ) : null}
    </div>
  );
}
