# @gatsby-contrib/gatsby-remark-link-youtube

Instead of embedding a Youtube Video in your Markdown as with [gatsby-remark-embed-youtube](https://github.com/ntwcklng/gatsby-remark-embed-youtube), it add a thumbnail with a link to the video. Like this your users aren't polluted with google cookies, particulary for european users.

## Install

1.  Install plugin to your site:

```bash
yarn add @gatsby-contrib/gatsby-remark-link-youtube
```

2.  Add following to your `gatsby-config.js`:

```js
    plugins: [      
      {
        resolve: "gatsby-transformer-remark",
        options: {
          plugins: [
            {
              resolve: `@gatsby-contrib/gatsby-remark-link-youtube`,
              options: {
                width: 768,
                className: `center`,
                title: `Cliquer pour voir la vidéo sur youtube.com`,
              },
            },
          }
          ]
        }
      },
```

3.  Restart gastby.

## Usage

```markdown
# Look at this Video:

`youtube:https://www.youtube.com/embed/2Xc9gXyf2G4`
```

Will render in your `html` as:

```html
<a href="https://www.youtube.com/watch?v=w7y-1eY0mcE" title="Cliquer pour voir la vidéo sur youtube.com"><img src="https://img.youtube.com/vi/w7y-1eY0mcE/0.jpg" alt="Thumbnail of Youtube video w7y-1eY0mcE" title="Cliquer pour voir la vidéo sur youtube.com" class="center" width="768"></a>
```

## License

MIT
