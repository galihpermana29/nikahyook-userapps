'use client';

import { uploadDocs } from '@/shared/actions/uploadService';
import type { IUploadResponseRoot } from '@/shared/models/uploadInterfaces';
import { Upload, message, UploadFile, UploadProps, Spin } from 'antd';
import useFormInstance from 'antd/es/form/hooks/useFormInstance';
import type { RcFile } from 'antd/es/upload';
import { UploadRef } from 'antd/es/upload/Upload';
import React, { useState } from 'react';
import { useMutation } from 'react-query';
import DefaultUploadButton from './DefaultUploadButton';
import useTransformImageLinksToFiles from '@/shared/usecase/useTransformImageLinksToFiles';

interface IFileUploaderProps<T> extends UploadProps<T> {
  uploadButton?: React.ReactNode;
  formFieldName: string;
}

const FileUploaderWrapper = React.forwardRef<
  UploadRef,
  IFileUploaderProps<any>
>(
  (
    // set default props value
    { maxCount = 1, listType = 'picture-card', accept = 'image/*', ...props },
    ref
  ) => {
    // get parent form
    const form = useFormInstance();
    const initialFormValue = form.getFieldValue(props.formFieldName) as
      | string
      | string[]
      | undefined;

    // add state to track files being uploaded
    const [isUploading, setIsUploading] = useState(false);
    // state for listed file to show
    const [fileList, setFileList] = useState<UploadFile[]>(
      // default to an empty array if no form field value yet
      useTransformImageLinksToFiles(initialFormValue)
    );

    const mutation = useMutation({
      mutationFn: async (file: RcFile) => {
        const formData = new FormData();
        formData.append('image', file);
        const res = await uploadDocs(formData);

        if (res.success) {
          // asumming file upload succeed, then its gonna give us
          // data of type IUploadResponse root
          const resData = res.data as IUploadResponseRoot;

          // update the latest item in fileList to have a URL
          // whenever upload succeeds
          setFileList((prevFileList) => {
            const updatedFileList = [...prevFileList];
            // get the last index (recently added file)
            const lastIndex = updatedFileList.length - 1;
            updatedFileList[lastIndex] = {
              ...updatedFileList[lastIndex],
              // updates the url
              url: resData.data,
            };
            return updatedFileList;
          });

          if (maxCount === 1) {
            form.setFieldValue(props.formFieldName, resData.data);
          } else {
            const currentUrls = form.getFieldValue(props.formFieldName) || [];
            form.setFieldValue(props.formFieldName, [
              ...currentUrls,
              resData.data,
            ]);
          }

          return resData.data;
        } else {
          // upload file failed, then it'll give data as string
          // showing the error
          const resFailed = res.data as string;
          message.error(`Upload failed! ${resFailed}`);

          // return the error
          return resFailed;
        }
      },
      onError: () => {
        message.error(
          'Something went wrong when we tried to upload your file!'
        );
      },
    });

    const handleBeforeUpload: IFileUploaderProps<any>['beforeUpload'] = async (
      file
    ) => {
      // this checks if file is over the size limit
      if (file.size > 2_000_000) {
        message.error('File size cannot be more than 2 MB!');
        return Upload.LIST_IGNORE;
      }

      // try uploading the file
      try {
        setIsUploading(true); // add to list of uploading files
        await mutation.mutate(file);
        setIsUploading(false); // remove from uploading list when finished
      } catch (error) {
        // if error then early exit by giving an error
        message.error('Error!' + (error as string));

        // return false to prevent component's default upload
        return false;
      }

      setFileList([...fileList, file]); // add to list before upload
      return false; // prevent default upload to handle it using RQ mutation
    };

    const handleRemove = (file: UploadFile) => {
      setFileList(fileList.filter((item) => item.uid !== file.uid));
      const currentFieldValue = (form.getFieldValue(props.formFieldName) ??
        []) as string[];

      if (Array.isArray(currentFieldValue)) {
        // check if it's an array
        // if we dont do this, its gonna error out when we remove the last item
        form.setFieldValue(
          props.formFieldName,
          currentFieldValue.filter((url: string) => url !== file.url)
        );
        // this handles the last item removal case
      } else if (currentFieldValue === file.url) {
        // if it's a string and matches the file's URL
        form.setFieldValue(props.formFieldName, undefined); // clear the form field
      } // remove the URL from the form field on file removal
    };

    return (
      <Upload
        ref={ref}
        {...props}
        maxCount={maxCount}
        fileList={fileList}
        listType={listType}
        accept={accept}
        beforeUpload={handleBeforeUpload}
        onRemove={handleRemove}
        // TODO: this doesnt seem to work, idk how to fix it
        // use item render to get the currently uploaded/uploading files
        itemRender={(originNode) =>
          isUploading ? ( // check if file is being uploaded
            <Spin /> // show loading spinner if file is being uploaded
          ) : (
            originNode // show the original item (thumbnail, etc.) if not
          )
        }>
        {/* show the upload button if there's still a slot left */}
        {maxCount === fileList.length
          ? null
          : props.uploadButton ?? (
              <div className="flex flex-col gap-2">
                <DefaultUploadButton />
                <p className="text-xs text-ny-gray-300">
                  Supported: JPEG, JPG, PNG, Max size: 2 MB
                </p>
              </div>
            )}
      </Upload>
    );
  }
);

FileUploaderWrapper.displayName = 'FileUploaderWrapper';

export { FileUploaderWrapper };
