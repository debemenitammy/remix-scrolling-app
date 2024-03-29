# Remix Scrolling Application
This is an Infinite Scrolling application built with Remix and the `react-infinite-scroll-component`.

You can refer to the [Remix Docs](https://remix.run/docs) for reference.

## Running the project
To run the project in development environment, use the following commands in your terminal:

```sh
npm run dev
```

Afterwards, the application will start running in development mode, rebuilding assets on file changes.

## Deploying the application

To deploy the application, start by building the application for production with the following command:

```sh
npm run build
```

Next, run the application in production mode with the following command:

```sh
npm start
```

Now you'll need to pick a host to deploy it to.

### DIY

If you're familiar with deploying node applications, the built-in Remix app server is production-ready.

Make sure to deploy the output of `remix build`

- `build/`
- `public/build/`

### Using a Template

When you ran `npx create-remix@latest` there were a few choices for hosting. You can run that again to create a new project, then copy over your `app/` folder to the new project that's pre-configured for your target server.

```sh
cd ..
# create a new project, and pick a pre-configured host
npx create-remix@latest
cd my-new-remix-app
# remove the new project's app (not the old one!)
rm -rf app
# copy your app over
cp -R ../my-old-remix-app/app app
```
