# AI Face Detection with age, gender, and ethnicity recognition

## - External API

This application uses an external API to provide the face detection results. All external API calls are performed on the server using Next.js API routes resulting in faster response times and more security by hiding the API key from the client.

## - BFF (Backend for Frontend)

The data received from the external API is validated and transformed to contain only the needed information before being sent to the client resulting in less bandwidth usage and easier debugging.

## - File Handling

Users have the ability to upload their own images for face detection. This application handles the upload process, file handling, and file limit enforcement (size, type, count).

## - Error Handling

This application handles errors gracefully regardless of which part of the process they occur in.

## - UI Composition

The face detection result is rendered on top of the image with size, rotation, and opacity adjustments to be both readable and elegant.

## - Skeleton UI

During the loading process, a custom skeleton UI with shimmering animation is used to provide feedback to the user and prevent unwanted layout shifts.

## - SEO Optimization

This application is optimized for search engines using metadata like description, keywords, OpenGraph, Twitter card, and more. 

## - Asset Optimization

All of the images used in this application have responsive sizes according to the device size to limit bandwidth usage and deliver a great end-user experience. All of the fonts are cached and served from the same server for faster load times.

## - End-to-End Testing

This application is tested with Cypress using end-to-end testing. Multiple face detection workflows are tested using intercepted API responses.

## - Lighthouse benchmark

This Application has a full 100 score on the Lighthouse benchmark.

![100 Lighthouse score](/screenshots/lighthouse.png)

## - Tech Stack
- TypeScript
- React.js
- Next.js v14
- Tailwind CSS
- Redux Toolkit (RTK) Query
- Zod
- Cypress

## - Screenshots
- Desktop

![Desktop Screenshot Home](/screenshots/screenshot-desktop-home.png) ![Desktop Screenshot Home](/screenshots/screenshot-desktop-result.png)
- Mobile

![Mobile Screenshot Home](/screenshots/screenshot-mobile-home.png) ![Desktop Screenshot Home](/screenshots/screenshot-mobile-result.png)

## - Author
Rashid Shamloo

- Portfolio - [rashidshamloo.com](https://www.rashidshamloo.com)
- Linkedin - [rashid-shamloo](https://www.linkedin.com/in/rashid-shamloo/)
- Dev.to - [@rashidshamloo](https://dev.to/rashidshamloo)
- Twitter - [@rashidshamloo](https://www.twitter.com/rashidshamloo)
- Email - [rashidshamloo@gmail.com](mailto:rashidshamloo@gmail.com)
