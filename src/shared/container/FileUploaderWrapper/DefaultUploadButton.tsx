import DocumentIcon from '../Icon/DocumentIcon';

type TUploadButtonProps = {
  containerProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLDivElement>,
    HTMLDivElement
  >;
  iconProps?: React.SVGProps<SVGSVGElement>;
  textProps?: React.DetailedHTMLProps<
    React.HTMLAttributes<HTMLParagraphElement>,
    HTMLParagraphElement
  >;
};

export default function DefaultUploadButton({
  containerProps,
  textProps,
  iconProps,
}: TUploadButtonProps) {
  return (
    <div
      {...containerProps}
      className={`${
        containerProps?.className ?? ''
      } flex flex-col group w-full gap-2 justify-center text-center items-center cursor-pointer`}>
      <DocumentIcon
        {...iconProps}
        className={`${
          iconProps?.className ?? ''
        } text-ny-primary-300 group-hover:text-ny-primary-500 transition-all ease-in-out mb-1 size-6`}
      />
      <p
        {...textProps}
        className={`${
          textProps?.className ?? ''
        } text-xs text-ny-gray-300 group-hover:text-ny-gray-500 break-words`}>
        Click here to browse file
      </p>
    </div>
  );
}
