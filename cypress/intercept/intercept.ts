export const intercept = () => {
  cy.intercept(
    {
      method: 'POST',
      url: 'http://localhost:3000/api/uploadthing?actionType=upload&slug=imageUploader',
    },

    [
      {
        presignedUrl: {
          url: 'https://uploadthing-prod.s3.us-west-2.amazonaws.com/',
          fields: {
            'Content-Disposition':
              'inline; filename="sample.jpg"; filename*=UTF-8\'\'sample.jpg',
            bucket: 'uploadthing-prod',
            'X-Amz-Algorithm': 'AWS4-HMAC-SHA256',
            'X-Amz-Credential':
              'AKIA4BVCOYKVWQXJFN4V/20231109/us-west-2/s3/aws4_request',
            'X-Amz-Date': '20231109T170940Z',
            key: 'dfbb1f55-036e-4539-a147-fe68780ec4da-f1lhsm.jpg',
            Policy:
              'eyJleHBpcmF0aW9uIjoiMjAyMy0xMS0wOVQxNzoxNDo0MFoiLCJjb25kaXRpb25zIjpbWyJzdGFydHMtd2l0aCIsIiRDb250ZW50LVR5cGUiLCJpbWFnZS8iXSxbInN0YXJ0cy13aXRoIiwiJENvbnRlbnQtRGlzcG9zaXRpb24iLCJpbmxpbmU7IGZpbGVuYW1lPSJdLFsiY29udGVudC1sZW5ndGgtcmFuZ2UiLDAsNDE5NDMwNF0seyJDb250ZW50LURpc3Bvc2l0aW9uIjoiaW5saW5lOyBmaWxlbmFtZT1cInNhbXBsZS5qcGdcIjsgZmlsZW5hbWUqPVVURi04JydzYW1wbGUuanBnIn0seyJidWNrZXQiOiJ1cGxvYWR0aGluZy1wcm9kIn0seyJYLUFtei1BbGdvcml0aG0iOiJBV1M0LUhNQUMtU0hBMjU2In0seyJYLUFtei1DcmVkZW50aWFsIjoiQUtJQTRCVkNPWUtWV1FYSkZONFYvMjAyMzExMDkvdXMtd2VzdC0yL3MzL2F3czRfcmVxdWVzdCJ9LHsiWC1BbXotRGF0ZSI6IjIwMjMxMTA5VDE3MDk0MFoifSx7ImtleSI6ImRmYmIxZjU1LTAzNmUtNDUzOS1hMTQ3LWZlNjg3ODBlYzRkYS1mMWxoc20uanBnIn1dfQ==',
            'X-Amz-Signature':
              '3ed8f3067b46645debdc772d1d2d740d33a05c5b8d7e1d57d9e0b89c8a3a762d',
          },
        },
        name: 'sample.jpg',
        key: 'dfbb1f55-036e-4539-a147-fe68780ec4da-f1lhsm.jpg',
        fileType: 'image',
      },
    ]
  );

  cy.intercept(
    {
      method: 'GET',
      url: 'https://uploadthing.com/api/pollUpload/dfbb1f55-036e-4539-a147-fe68780ec4da-f1lhsm.jpg',
    },

    {
      status: 'done',
      fileData: {
        id: '9cb04de5-9007-48bf-a42d-7adf91972aa7',
        createdAt: '2023-11-09T17:09:40.000Z',
        fileName: 'sample.jpg',
        filePath: null,
        fileType: 'image',
        fileKey: 'dfbb1f55-036e-4539-a147-fe68780ec4da-f1lhsm.jpg',
        metadata: '{}',
        fileSize: 54769,
        fileUrl:
          'https://uploadthing-prod.s3.us-west-2.amazonaws.com/dfbb1f55-036e-4539-a147-fe68780ec4da-f1lhsm.jpg',
        callbackUrl: 'http://localhost:3000/api/uploadthing',
        callbackSlug: 'imageUploader',
        appId: 'hd9kpfsosk',
        markedForDeletion: false,
        uploadFailed: false,
      },
    }
  );

  cy.intercept(
    {
      method: 'GET',
      url: 'http://localhost:3000/api/detect?url=https://utfs.io/f/dfbb1f55-036e-4539-a147-fe68780ec4da-f1lhsm.jpg',
    },

    {
      status: 'success',
      result: {
        width: 800,
        height: 534,
        url: 'https://utfs.io/f/dfbb1f55-036e-4539-a147-fe68780ec4da-f1lhsm.jpg',
        tags: [
          {
            width: 10.88,
            height: 20.41,
            roll: 1,
            center: {
              x: 47.38,
              y: 53,
            },
            attributes: {
              gender: {
                value: 'female',
                confidence: 32,
              },
              age_est: {
                value: '2',
                confidence: 50,
              },
              ethnicity: {
                white: {
                  value: 'true',
                  confidence: 80,
                },
                black: {
                  value: 'false',
                  confidence: 3,
                },
                asian: {
                  value: 'false',
                  confidence: 14,
                },
                indian: {
                  value: 'false',
                  confidence: 2,
                },
                hispanic: {
                  value: 'false',
                  confidence: 2,
                },
              },
            },
          },
          {
            width: 11.25,
            height: 23.41,
            roll: -9,
            center: {
              x: 66.75,
              y: 33.33,
            },
            attributes: {
              age_est: {
                value: '34',
                confidence: 50,
              },
              ethnicity: {
                white: {
                  value: 'true',
                  confidence: 90,
                },
                black: {
                  value: 'false',
                  confidence: 1,
                },
                asian: {
                  value: 'false',
                  confidence: 7,
                },
                indian: {
                  value: 'false',
                  confidence: 1,
                },
                hispanic: {
                  value: 'false',
                  confidence: 1,
                },
              },
            },
          },
          {
            width: 10.75,
            height: 16.67,
            roll: -13,
            center: {
              x: 75.62,
              y: 47.19,
            },
            attributes: {
              gender: {
                value: 'female',
                confidence: 30,
              },
              age_est: {
                value: '1',
                confidence: 50,
              },
              ethnicity: {
                white: {
                  value: 'true',
                  confidence: 76,
                },
                black: {
                  value: 'false',
                  confidence: 5,
                },
                asian: {
                  value: 'false',
                  confidence: 5,
                },
                indian: {
                  value: 'false',
                  confidence: 7,
                },
                hispanic: {
                  value: 'false',
                  confidence: 6,
                },
              },
            },
          },
        ],
      },
    }
  );

  cy.intercept(
    {
      method: 'OPTIONS',
      url: 'https://uploadthing-prod.s3.us-west-2.amazonaws.com/',
    },
    ''
  );
  cy.intercept(
    {
      method: 'POST',
      url: 'https://uploadthing-prod.s3.us-west-2.amazonaws.com/',
    },
    ''
  );
};
