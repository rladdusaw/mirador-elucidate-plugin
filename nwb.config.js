module.exports = {
  type: 'react-component',
  npm: {
    esModules: true,
    umd: {
      global: 'MiradorElucidate',
      externals: {
        react: 'React'
      }
    }
  }
}
