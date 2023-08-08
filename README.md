
# Unsplash Image App

This is a web app which uses Unsplash API to show various images.


## Installation

To run this project run

```bash
  yarn
  yarn dev
```


## Environment Variables

To run this project, you will need to add the following environment variables to your .env file

`ACCESS_KEY`

use your own ACCESS_KEY 
if not use mine: `LE0QeIJsF4XoyFf56rofjQajP9La-nCmGzkFOpYbrWE`


## API Reference
```js
const api = createApi({
  accessKey: access_key,
});
```

#### Search images

```http
  api.search.getPhotos()
```

| Parameter | Type     | Description                |
| :-------- | :------- | :------------------------- |
| `access_key` | `string` | **Required**. Your ACCESS key |






## Appendix

Technologies used
- Frontend: React
- Styling: TailwindCSS
- Icons: react-icons
- UI Library: Material UI

