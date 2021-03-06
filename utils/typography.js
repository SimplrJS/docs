import Typography from 'typography'
import CodePlugin from 'typography-plugin-code'

const options = {
  scaleRatio: 1.618,
  plugins: [
    new CodePlugin(),
  ],
}

export var typography = new Typography(options)

// Hot reload typography in development.
if (process.env.NODE_ENV !== 'production') {
  typography.injectStyles()
}
