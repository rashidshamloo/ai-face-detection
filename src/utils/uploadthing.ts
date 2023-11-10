import {
  UploadButton as UB,
  UploadDropzone as UDZ,
  Uploader as U,
} from '@uploadthing/react';

import type { OurFileRouter } from '@/app/api/uploadthing/core';

export const UploadButton = UB<OurFileRouter>;
export const UploadDropzone = UDZ<OurFileRouter>;
export const Uploader = U<OurFileRouter>;
