import generateUUID from '@/shared/usecase/generateUUID';
import ItemCardLoading from '../../ItemCard/ItemCardLoading';

export default function TabLoading(props: { withAlert?: boolean }) {
  return (
    <div className="flex flex-col w-full gap-4 justify-center">
      {props.withAlert ? (
        <div className="h-10 w-full bg-ny-info-100/70 animate-pulse border border-ny-info-300 rounded-lg" />
      ) : null}

      {Array(3)
        .fill(0)
        .map((_, index) => (
          <ItemCardLoading key={index + generateUUID()} />
        ))}
    </div>
  );
}
