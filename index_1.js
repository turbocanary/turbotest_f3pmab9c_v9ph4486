function anotherInsecurePassword() {
  // GOOD: cryptographically secure random suffix
  var suffix = require('crypto').randomBytes(4).readUInt32BE(0);
  var password = "sssAAAA" + suffix;
  return password;
}