'use strict'
const visit = require(`unist-util-visit`)
const defaultOptions = {
  width: 600,
  className: 'youtube-thumbnail',
  title: 'Click to see video on youtube.com'
}
module.exports = ({
  markdownAST
}, options ) => {

  options = Object.assign(defaultOptions, options)
  options = {...defaultOptions, ...options}

  visit(markdownAST, `inlineCode`, node => {
    const {
      value
    } = node
    if (value.startsWith(`youtube:`)) {
      const videoId = value.substr(8).trim()

      // Mutate node as an link with the thumbnail
      delete node.value;
      node.type = `link`
      node.url = `https://www.youtube.com/watch?v=${videoId}`
      node.title = options.title
      node.children = [{
        type: `html`,
        value: `<img src="https://img.youtube.com/vi/${videoId}/0.jpg"
            alt="Thumbnail of Youtube video ${videoId}"
            title="${options.title}"
            width="${options.width}"
            class="${options.className}"/>`
      }]


    }
  })

  return markdownAST
}
