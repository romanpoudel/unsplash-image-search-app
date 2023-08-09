
# Unsplash Image App

This is a web app which uses Unsplash API to show various images.

## Demo

You can view it here [Live](https://unsplash-image-search-app-mu.vercel.app/)

### Features

- Search images of high quality
- Save images in `localStorage`
- View saved images from local storage
- Remove image from local storage
- View local storage count

## Installation

To run this project run

```bash
  yarn
  yarn dev
```

## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ACCESS_KEY`

## API Reference

```js
const api = createApi({
  accessKey: access_key,
});
```

### Search images

```http
  api.search.getPhotos()
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `access_key` | `string` | **Required**. Your ACCESS key |

## Tech Stack

- **Frontend:** React
- **Styling:** TailwindCSS
- **Icons:** react-icons
- **UI Library:** Material UI
