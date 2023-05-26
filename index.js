const ffmpeg = require('fluent-ffmpeg')
const http = require('http')
const fs = require('fs')

const sizes = {s: '640',m: '1280', l: '2560', xl: '5120'}
const rtspUrl = process.env.npm_config_rtsp_url || process.env.RTSP_URL

if (!rtspUrl) throw new Error('RTSP_URL not specified, please set env var')


http.createServer((req, res) => {
  const size = sizes[req.url.substr(1)] || sizes.m
  const command = ffmpeg(rtspUrl)
    .outputFormat('image2')
    .frames(1)
    .size(size + 'x?')
    .noAudio()
    .on('end', function() {
      console.log('Snapshot taken')
    })
    .on('error', function(err) {
      console.log('Error taking snapshot:', err)
    })

    command.save('snapshot.jpg').on('end', function() {
      res.writeHead(200, { 'Content-Type': 'image/jpeg' })
      const stream = fs.createReadStream('snapshot.jpg')
      stream.pipe(res)
    })
})
.listen(8000, () => {
  console.log('Server running on port 8000')
})

