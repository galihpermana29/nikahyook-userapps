import { IFetchGeneralResponse } from '../models/generalInterfaces';

export const errorHandling = async (res: Response) => {
  switch (res.status) {
    case 404: {
      return { success: false, data: 'URL Not found' };
    }
    case 500: {
      return {
        success: false,
        data: 'Error 500: Something went wrong on the server',
      };
    }
    default: {
      const errorData = await res.json();
      return {
        success: false,
        data: errorData.errors[0],
      };
    }
  }
};

export const clientSideReactQueryErrorDetection = <T>(
  result: IFetchGeneralResponse<string | T>
) => {
  if (result) {
    if (!result.success) {
      throw result.data;
    }
  }
};
