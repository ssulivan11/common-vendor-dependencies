const path = require('path')
const fs = require('fs-extra')

exports.remove = (distPath = 'dist') => {
  if (!fs.existsSync(distPath)) return null
  else fs.removeSync(distPath)
}

exports.clean = (distPath = 'dist', filter = '.LICENSE') => {
  if (!fs.existsSync(distPath)) return null

  const files = fs.readdirSync(distPath)
  for (var i = 0; i < files.length; i++) {
    const filename = path.join(distPath, files[i])
    if (filename.indexOf(filter) >= 0) {
      fs.unlinkSync(filename)
    }
  }
}
