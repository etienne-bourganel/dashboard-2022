exports.getDisplay = (req, res) => {
  const text = req.query.text
  console.log('Hey! I am the display endpoint')
  res.json({ message: `Here is your test: ${text}` })
}
